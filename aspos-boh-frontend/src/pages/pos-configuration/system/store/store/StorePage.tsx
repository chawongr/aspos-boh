import React, { Fragment, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { ColumnDef } from '@tanstack/react-table';
import {
  DataGrid,
  TDataGridRequestParams,
  KeenIcon,
  DataGridColumnHeader,
  Container
} from '@/components';
import axios from 'axios';
import { addStore, deleteStore, editStore } from '@/pages/pos-configuration/system/Service';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Dropdown } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format, parseISO, setHours, setMinutes } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

interface Store {
  storeNo: string;
  name: string;
  address1: string;
  address2: string;
  address3: string;
  email: string;
  phone: string;
  stroregroup: string;
  area: string;
  region: string;
  country: string;
  opendate: string;
  closed: string;
  accountcode: string;
  costcentre: string;
  storetype: string;
  ipaddress: string;
}

const StorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editData, setEditData] = useState<Store | null>(null);
  const [formData, setFormData] = useState({
    storeNo: '',
    name: '',
    address1: '',
    address2: '',
    address3: '',
    email: '',
    phone: '',
    stroregroup: '',
    area: '',
    region: '',
    country: '',
    opendate: '',
    closed: 'N',
    accountcode: '',
    costcentre: '',
    storetype: '',
    ipaddress: ''
  });
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [refreshKey, setRefreshKey] = useState(0);
  const { currentLayout } = useLayout();
  const selectedDate = formData.opendate ? parseISO(formData.opendate) : new Date();

  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
  const [isOpen, setIsOpen] = useState(false);
  const API_URL = import.meta.env.VITE_DOMAIN;
  const token = localStorage.getItem('token');


  const [isFormat, setIsFormat] = useState(true);

  const fetchStore = async (params: TDataGridRequestParams) => {
    try {
      const queryParams = new URLSearchParams();
      queryParams.set('page', String(params.pageIndex + 1));
      queryParams.set('items_per_page', String(params.pageSize));

      if (params.sorting?.[0]?.id) {
        queryParams.set('sort', params.sorting[0].id);
        queryParams.set('order', params.sorting[0].desc ? 'desc' : 'asc');
      }

      if (searchQuery.trim().length > 0) {
        queryParams.set('query', searchQuery);
      }

      const response = await axios.get(`${API_URL}/store?${queryParams.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      setPageIndex(params.pageIndex);
      setPageSize(params.pageSize);
      setTotalCount(response.data.pagination.total);
      return { data: response.data.data, totalCount: response.data.pagination.total };
    } catch (error) {
      toast.error("Error fetching store");
      return { data: [], totalCount: 0 };
    }
  };

  const handleEdit = (rowData: Store) => {
    setEditData(rowData);
    setFormData({
      storeNo: rowData.storeNo,
      name: rowData.name,
      address1: rowData.address1,
      address2: rowData.address2,
      address3: rowData.address3,
      email: rowData.email,
      phone: rowData.phone,
      stroregroup: rowData.stroregroup,
      area: rowData.area,
      region: rowData.region,
      country: rowData.country,
      opendate: rowData.opendate,
      closed: rowData.closed,
      accountcode: rowData.accountcode,
      costcentre: rowData.costcentre,
      storetype: rowData.storetype,
      ipaddress: rowData.ipaddress,
    });
    setShowAddForm(true);
  };

  const handleDelete = async (code: string) => {
    toast("Are you sure you want to delete this store?", {
      action: (
        <button
          onClick={async () => {
            try {
              await deleteStore(code);
              toast.success("Store deleted successfully!");
              setRefreshKey(prev => prev + 1);
            } catch (error) {
              toast.error("Error deleting store.");
            }
          }}
          className="bg-red-500 text-white w-20 py-2 rounded-md hover:bg-red-600 transition font-semibold"
        >
          Confirm
        </button>
      ),
    });
  };

  const handleSave = async () => {
    try {
      if (isFormat) {
        if (editData) {
          await editStore(
            formData.storeNo,
            formData.name,
            formData.address1,
            formData.address2,
            formData.address3,
            formData.email,
            formData.phone,
            formData.stroregroup,
            formData.area,
            formData.region,
            formData.country,
            formData.opendate,
            formData.closed,
            formData.accountcode,
            formData.costcentre,
            formData.storetype,
            formData.ipaddress
          );
          toast.success("Store updated successfully!");
        } else {
          await addStore(
            formData.storeNo,
            formData.name,
            formData.address1,
            formData.address2,
            formData.address3,
            formData.email,
            formData.phone,
            formData.stroregroup,
            formData.area,
            formData.region,
            formData.country,
            formData.opendate,
            formData.closed,
            formData.accountcode,
            formData.costcentre,
            formData.storetype,
            formData.ipaddress
          );
          toast.success("Store added successfully!");
        }
        setShowAddForm(false);
        setEditData(null);
        setFormData({
          storeNo: '',
          name: '',
          address1: '',
          address2: '',
          address3: '',
          email: '',
          phone: '',
          stroregroup: '',
          area: '',
          region: '',
          country: '',
          opendate: '',
          closed: 'N',
          accountcode: '',
          costcentre: '',
          storetype: '',
          ipaddress: ''
        });
      }
      else {
        toast.error("Some inputs have an invalid format.");
      }
    } catch (error) {
      toast.error("Failed to save store.");
    }
  };

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'storeNo',
        id: 'storeNo',
        header: ({ column }) => <DataGridColumnHeader title="Store No" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.storeNo,
        meta: {
          headerClassName: 'w-6',
          cellClassName: 'w-6 text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'name',
        id: 'name',
        header: ({ column }) => <DataGridColumnHeader title="Name" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.name,
      },
      {
        accessorKey: 'address1',
        id: 'address1',
        header: ({ column }) => <DataGridColumnHeader title="Address 1" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.address1,
      },
      {
        accessorKey: 'address2',
        id: 'address2',
        header: ({ column }) => <DataGridColumnHeader title="Address 2" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.address2,
      },
      {
        accessorKey: 'address3',
        id: 'address3',
        header: ({ column }) => <DataGridColumnHeader title="Address 3" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.address3,
      },
      {
        accessorKey: 'email',
        id: 'email',
        header: ({ column }) => <DataGridColumnHeader title="Email" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.email,
      },
      {
        accessorKey: 'phone',
        id: 'phone',
        header: ({ column }) => <DataGridColumnHeader title="Phone" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.phone,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'stroregroup',
        id: 'stroregroup',
        header: ({ column }) => <DataGridColumnHeader title="Store Group" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.stroregroup,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'area',
        id: 'area',
        header: ({ column }) => <DataGridColumnHeader title="Area" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.area,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'region',
        id: 'region',
        header: ({ column }) => <DataGridColumnHeader title="Region" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.region,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'country',
        id: 'country',
        header: ({ column }) => <DataGridColumnHeader title="Country" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.country,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'opendate',
        id: 'opendate',
        header: ({ column }) => <DataGridColumnHeader title="Open Date" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.opendate,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'closed',
        id: 'closed',
        header: ({ column }) => <DataGridColumnHeader title="Closed" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.closed,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },

      {
        accessorKey: 'accountcode',
        id: 'accountcode',
        header: ({ column }) => <DataGridColumnHeader title="Account Code" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.accountcode,
      },
      {
        accessorKey: 'costcentre',
        id: 'costcentre',
        header: ({ column }) => <DataGridColumnHeader title="Cost Centre" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.costcentre,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'storetype',
        id: 'storetype',
        header: ({ column }) => <DataGridColumnHeader title="Store Type" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.storetype,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'ipaddress',
        id: 'ipaddress',
        header: ({ column }) => <DataGridColumnHeader title="IP Address" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.ipaddress,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },

      {
        id: 'edit',
        header: 'Modify',
        cell: ({ row }) => (
          <button onClick={() => handleEdit(row.original)} className='bg-[var(--tw-light-active)] border border-amber-500 rounded-md font-semibold  text-amber-500 h-[1.9rem] w-[1.9rem] hover:bg-amber-500 hover:text-white'>
            <KeenIcon icon='pencil' />
          </button>
        ),
        meta: {
          headerClassName: 'w-8',
          cellClassName: 'w-8',
          subCellClassName: 'flex justify-center'
        },
        enableHiding: false,
      },
      {
        id: 'delete',
        header: 'Delete',
        cell: ({ row }) => (
          <button onClick={() => handleDelete(row.original.storeNo)} className='bg-[var(--tw-light-active)] border border-red-600 rounded-md font-semibold text-base text-red-600 h-[1.9rem] w-[1.9rem] hover:bg-red-600 hover:text-white'>
            <KeenIcon icon='trash' />
          </button>
        ),
        meta: {
          headerClassName: 'w-8',
          cellClassName: 'w-8',
          subCellClassName: 'flex justify-center'
        },
        enableHiding: false,
      }
    ],
    []
  );

  const count = Math.min((pageIndex + 1) * pageSize, totalCount);

  const handleSearchClick = () => {
    setRefreshKey(prev => prev + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phoneRegex = /^[0-9]*$/;
      if (!phoneRegex.test(value)) {
        toast.error("Phone number can contain only numbers");
        return;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-600">Store Management</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              {!showAddForm && (
                <button
                  className="w-20 h-8 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  onClick={() => setShowAddForm(true)}
                >
                  <div className='flex justify-center'>
                    <div className='text-xl mr-2 font-semibold mb-1'>+</div>
                    <div className='my-auto'>Add</div>
                  </div>
                </button>
              )}
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        {showAddForm ? (
          <div className="card mb-6">
            <div className="card-header" id="webhooks">
              <h3 className="card-title">{editData ? 'Edit Store' : 'New Store'}</h3>
            </div>
            <div className="card-body grid gap-5">
              <div className="grid grid-cols-2 gap-5">

                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Store No</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Store No"
                      name="storeNo"
                      value={formData.storeNo}
                      onChange={handleChange}
                      disabled={!!editData}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Name</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Address 1</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Address 1"
                      name="address1"
                      value={formData.address1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Address 2</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Address 2"
                      name="address2"
                      value={formData.address2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Address 3</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Address 3"
                      name="address3"
                      value={formData.address3}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Email</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={(e) => {
                        if (!e.target.checkValidity()) {
                          toast.error("Invalid email format");
                          setIsFormat(false);
                        } else {
                          setIsFormat(true);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Phone</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="tel"
                      placeholder="Enter Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Store Group</span>
                  <div className="grow min-w-24">
                    <Dropdown
                      apiEndpoint={`${API_URL}/store/group`}
                      queryParam="Query"
                      isLabel="name"
                      value={formData.stroregroup}
                      setSelectedItem={(item) => {
                        setFormData(prev => ({ ...prev, stroregroup: item?.value || "" })); // ✅ Syncs with formData.storegroup
                      }}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Area</span>
                  <div className="grow min-w-24">
                    <Dropdown
                      apiEndpoint={`${API_URL}/location/area`}
                      queryParam="Query"
                      isLabel="name"
                      value={formData.area}
                      setSelectedItem={(item) => {
                        setFormData(prev => ({ ...prev, area: item?.value || "" }));
                      }}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Region</span>
                  <div className="grow min-w-24">
                    <Dropdown
                      apiEndpoint={`${API_URL}/location/region`}
                      queryParam="Query"
                      isLabel="name"
                      value={formData.region}
                      setSelectedItem={(item) => {
                        setFormData(prev => ({ ...prev, region: item?.value || "" }));
                      }}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Country</span>
                  <div className="grow min-w-24">
                    <Dropdown
                      apiEndpoint={`${API_URL}/location/country`}
                      queryParam="Query"
                      isLabel="name"
                      value={formData.country}
                      setSelectedItem={(item) => {
                        setFormData(prev => ({ ...prev, country: item?.value || "" }));
                      }}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Open Date</span>
                  <div className="grow min-w-24">
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="flex justify-start items-center gap-2 w-full">
                          <KeenIcon icon="calendar" className="text-lg text-gray-500" />
                          {formData.opendate
                            ? format(parseISO(formData.opendate), 'LLL dd, y HH:mm')
                            : <span className="text-gray-500">Pick a date & time</span>}
                        </Button>
                      </PopoverTrigger>
                      <div>
                        <PopoverContent className="w-[420px] p-3 rounded-lg shadow-lg bg-white flex">
                          <div >
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={(date) => {
                                if (date) {
                                  setFormData((prev) => ({
                                    ...prev,
                                    opendate: format(setHours(setMinutes(date, selectedDate.getMinutes()), selectedDate.getHours()), "yyyy-MM-dd'T'HH:mm:ss"),
                                  }));
                                }
                              }}
                              numberOfMonths={1}
                            />
                          </div>

                          {/* Time Picker Section */}
                          <div className="mt-11">
                            <div className="flex items-center gap-2 mt-2 border rounded-lg p-2">
                              {/* Scrollable Hours */}
                              <ScrollArea className="h-52 w-1/2 overflow-y-auto">
                                {hours.map((hour) => (
                                  <Button
                                    key={hour}
                                    variant={selectedDate.getHours() === parseInt(hour) ? "default" : "ghost"}
                                    className="w-full text-center"
                                    onClick={() => {
                                      const updatedDate = setHours(selectedDate, parseInt(hour));
                                      setFormData((prev) => ({
                                        ...prev,
                                        opendate: format(updatedDate, "yyyy-MM-dd'T'HH:mm:ss"),
                                      }));
                                    }}
                                  >
                                    {hour}
                                  </Button>
                                ))}
                              </ScrollArea>

                              {/* Scrollable Minutes */}
                              <ScrollArea className="h-52 w-1/2 overflow-y-auto">
                                {minutes.map((minute) => (
                                  <Button
                                    key={minute}
                                    variant={selectedDate.getMinutes() === parseInt(minute) ? "default" : "ghost"}
                                    className="w-full text-center"
                                    onClick={() => {
                                      const updatedDate = setMinutes(selectedDate, parseInt(minute));
                                      setFormData((prev) => ({
                                        ...prev,
                                        opendate: format(updatedDate, "yyyy-MM-dd'T'HH:mm:ss"),
                                      }));
                                    }}
                                  >
                                    {minute}
                                  </Button>
                                ))}
                              </ScrollArea>
                            </div>
                          </div>
                        </PopoverContent>
                      </div>
                    </Popover>

                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Account Code</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Account Code"
                      name="accountcode"
                      value={formData.accountcode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Cost Centre</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Cost Centre"
                      name="costcentre"
                      value={formData.costcentre}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Store Type</span>
                  <div className="grow min-w-24">
                    <Dropdown
                      apiEndpoint={`${API_URL}/store/type`}
                      queryParam="Query"
                      isLabel="type"
                      value={formData.storetype}
                      setSelectedItem={(item) => {
                        setFormData(prev => ({ ...prev, storetype: item?.value || "" }));
                      }}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">IP Address</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter IP Address"
                      name="ipaddress"
                      value={formData.ipaddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <div className="flex items-baseline flex-wrap gap-2.5">
                    <label className="form-label max-w-32"></label>
                    <div className="switch switch-sm grow flex justify-start">
                      <span className="text-gray-800 text-sm">Closed</span>
                      <input
                        type="checkbox"
                        checked={formData.closed === 'Y'} // ✅ Checked if value is "Y"
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          closed: e.target.checked ? 'Y' : 'N' // ✅ Toggle between "Y" and "N"
                        }))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer justify-end">
              <button className="loadBtn text-sm h-8 mr-2 bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center gap-x-1" onClick={handleSave}>
                <div className='text-base mt-[1px]'><KeenIcon icon='folder-down' /></div>
                <div>Save</div>
              </button>
              <button
                className="cancelBtn h-8 text-sm bg-white border border-blue-500 text-primary  flex justify-center items-center gap-x-1"
                onClick={() => {
                  setShowAddForm(false); setEditData(null); setFormData({
                    storeNo: '',
                    name: '',
                    address1: '',
                    address2: '',
                    address3: '',
                    email: '',
                    phone: '',
                    stroregroup: '',
                    area: '',
                    region: '',
                    country: '',
                    opendate: '',
                    closed: 'N',
                    accountcode: '',
                    costcentre: '',
                    storetype: '',
                    ipaddress: ''
                  });
                }}
              >
                <div className='text-base mt-[1px]'><KeenIcon icon='cross' /></div>
                <div>Cancel</div>
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto ">
            <DataGrid
              key={refreshKey}
              columns={columns}
              serverSide={true}
              onFetchData={fetchStore}
              rowSelection={true}
              pagination={{ size: pageSize }}
              toolbar={
                <div className="card-header flex-wrap gap-2 border-b-0 px-5">
                  <h3 className="card-title font-medium text-sm">
                    Showing {count} of {totalCount} stores
                  </h3>
                  <div className="flex flex-wrap gap-2 lg:gap-5">
                    <div className="flex flex-wrap gap-2.5">
                      <div className="flex">
                        <label className="input input-sm">
                          <input
                            type="text"
                            placeholder="Search ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </label>
                        <button onClick={handleSearchClick} className='bg-[var(--tw-light-active)] border border-gray-400 rounded-md font-semibold text-lg text-gray-600 h-[2rem] w-[2.3rem] ml-2'>
                          <KeenIcon icon='magnifier' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              }
              layout={{ card: true }}
            />
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export { StorePage };
