import React, { Fragment, useEffect, useMemo, useState } from 'react';
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
import { addMember, deleteMember, editMember } from '@/pages/pos-configuration/system/Service';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format, parseISO } from 'date-fns';

interface Member {
  memberCode: string;
  name: string;
  address1: string;
  address2: string;
  address3: string;
  email: string;
  phone: string;
  point: string;
  startdate: string;
  expiredate: string;
}

const MemberPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editData, setEditData] = useState<Member | null>(null);
  const [formData, setFormData] = useState({ memberCode: '', name: '', address1: '', address2: '', address3: '', email: '', point: '', phone: '', startdate: '', expiredate: '' });
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [refreshKey, setRefreshKey] = useState(0);
  const { currentLayout } = useLayout();
  const [isFormat, setIsFormat] = useState(true);
  const API_URL = import.meta.env.VITE_DOMAIN;
  const token = localStorage.getItem('token');

  const fetchMember = async (params: TDataGridRequestParams) => {
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

      const response = await axios.get(`${API_URL}/member?${queryParams.toString()}`, {
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
      toast.error("Error fetching members");
      return { data: [], totalCount: 0 };
    }
  };

  const handleEdit = (rowData: Member) => {
    setEditData(rowData);
    setFormData({ memberCode: rowData.memberCode, name: rowData.name, address1: rowData.address1, address2: rowData.address2, address3: rowData.address3, email: rowData.email, phone: rowData.phone, point: rowData.point, startdate: rowData.startdate, expiredate: rowData.expiredate });
    setShowAddForm(true);
  };

  const handleDelete = async (code: string) => {
    toast("Are you sure you want to delete this member?", {
      action: (
        <button
          onClick={async () => {
            try {
              await deleteMember(code);
              toast.success("Member deleted successfully!");
              setRefreshKey(prev => prev + 1);
            } catch (error) {
              toast.error("Error deleting member.");
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
    console.log(">>>", formData)
    try {
      if (isFormat) {
        if (editData) {
          await editMember(formData.memberCode, formData.name, formData.address1, formData.address2, formData.address3, formData.email, formData.point, formData.phone, formData.startdate, formData.expiredate);
          toast.success("Member updated successfully!");
        } else {
          await addMember(formData.memberCode, formData.name, formData.address1, formData.address2, formData.address3, formData.email, formData.point, formData.phone, formData.startdate, formData.expiredate);
          toast.success("Member added successfully!");
        }
        setShowAddForm(false);
        setEditData(null);
        setFormData({ memberCode: '', name: '', address1: '', address2: '', address3: '', email: '', point: '', phone: '', startdate: '', expiredate: '' });
      } else {
        toast.error("Some inputs have an invalid format.");
      }
    } catch (error) {
      toast.error("Failed to save member.");
    }
  };

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'memberCode',
        id: 'memberCode',
        header: ({ column }) => <DataGridColumnHeader title="Code" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.memberCode,
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
        accessorKey: 'point',
        id: 'point',
        header: ({ column }) => <DataGridColumnHeader title="Point" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.point,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'startdate',
        id: 'startdate',
        header: ({ column }) => <DataGridColumnHeader title="Start Date" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.startdate,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'expiredate',
        id: 'expiredate',
        header: ({ column }) => <DataGridColumnHeader title="Expired Date" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.expiredate,
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
          <button onClick={() => handleDelete(row.original.memberCode)} className='bg-[var(--tw-light-active)] border border-red-600 rounded-md font-semibold text-base text-red-600 h-[1.9rem] w-[1.9rem] hover:bg-red-600 hover:text-white'>
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
                  <span className="text-md text-gray-600">Member Management</span>
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
          <div className="card">
            <div className="card-header" id="webhooks">
              <h3 className="card-title">{editData ? 'Edit Member' : 'New Member'}</h3>
            </div>
            <div className="card-body grid gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Code {!formData.memberCode && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Code"
                      name="memberCode"
                      value={formData.memberCode}
                      onChange={handleChange}
                      disabled={!!editData}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Name {!formData.name && <span className="text-red-500">*</span>}
                  </span>
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
                  <span className="form-label max-w-32 w-full">
                    Address 1 {!formData.address1 && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Address 1 "
                      name="address1"
                      value={formData.address1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Address 2 {!formData.address2 && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Address 2 "
                      name="address2"
                      value={formData.address2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Address 3 {!formData.address3 && <span className="text-red-500">*</span>}
                  </span>
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
                  <span className="form-label max-w-32 w-full">
                    Email {!formData.email && <span className="text-red-500">*</span>}
                  </span>
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
                  <span className="form-label max-w-32 w-full">
                    Phone {!formData.phone && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Point
                  </span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="number"
                      placeholder="Enter Point"
                      name="point"
                      value={formData.point}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Start Date {!formData.startdate && <span className="text-red-500">*</span>}</span>
                  <div className="grow min-w-24">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          id="startdate"
                          className={cn(
                            'input data-[state=open]:border-primary',
                            !formData.startdate && 'text-muted-foreground'
                          )}
                        >
                          <KeenIcon icon="calendar" className="-ms-0.5" />
                          {formData.startdate ? format(parseISO(formData.startdate), 'LLL dd, y') : <span>Pick a date</span>}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="single"
                          defaultMonth={formData.startdate ? parseISO(formData.startdate) : undefined}
                          selected={formData.startdate ? parseISO(formData.startdate) : undefined}
                          onSelect={(selectedDate) => {
                            if (selectedDate) {
                              setFormData((prevData) => ({
                                ...prevData,
                                startdate: format(selectedDate, 'yyyy-MM-dd'),
                                expiredate: prevData.expiredate && parseISO(prevData.expiredate) < selectedDate ? '' : prevData.expiredate
                              }));
                              if (formData.expiredate && parseISO(formData.expiredate) < selectedDate) {
                                toast.error("Expired date must be after Start date.");
                              }
                            }
                          }}
                          numberOfMonths={1}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Expired Date {!formData.expiredate && <span className="text-red-500">*</span>}</span>
                  <div className="grow min-w-24">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          id="expiredate"
                          className={cn(
                            'input data-[state=open]:border-primary',
                            !formData.expiredate && 'text-muted-foreground'
                          )}
                        >
                          <KeenIcon icon="calendar" className="-ms-0.5" />
                          {formData.expiredate ? format(parseISO(formData.expiredate), 'LLL dd, y') : <span>Pick a date</span>}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="single"
                          defaultMonth={formData.expiredate ? parseISO(formData.expiredate) : undefined}
                          selected={formData.expiredate ? parseISO(formData.expiredate) : undefined}
                          onSelect={(selectedDate) => {
                            if (selectedDate && formData.startdate) {
                              const startDate = parseISO(formData.startdate);
                              const nextDay = new Date(startDate);
                              nextDay.setDate(startDate.getDate() + 1); 

                              if (selectedDate >= nextDay) {
                                setFormData((prevData) => ({
                                  ...prevData,
                                  expiredate: format(selectedDate, 'yyyy-MM-dd'),
                                }));
                              } else {
                                toast.error("Expired date must be at least one day after Start date.");
                              }
                            } 
                          }}
                          numberOfMonths={1}
                          disabled={(date) => {
                            if (!formData.startdate) return false;
                            const startDate = parseISO(formData.startdate);
                            return date <= startDate;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
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
                onClick={() => { setShowAddForm(false); setEditData(null); setFormData({ memberCode: '', name: '', address1: '', address2: '', address3: '', email: '', point: '', phone: '', startdate: '', expiredate: '' }); }}
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
              onFetchData={fetchMember}
              rowSelection={true}
              pagination={{ size: pageSize }}
              toolbar={
                <div className="card-header flex-wrap gap-2 border-b-0 px-5">
                  <h3 className="card-title font-medium text-sm">
                    Showing {count} of {totalCount} members
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

export { MemberPage };
