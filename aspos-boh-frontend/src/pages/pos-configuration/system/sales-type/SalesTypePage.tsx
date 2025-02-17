import React,{ Fragment, useEffect, useMemo, useState } from 'react';
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
import { addSalesType, deleteSalesType, editSalesType } from '@/pages/pos-configuration/system/Service';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
  } from '@/components/ui/select';

interface SalesType {
  code: string;
  name1: string;
  name2: string;
  name3: string;
  suffix: string;
  pricelevel: string;
  mainlevel: string;
}


const SalesTypePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editData, setEditData] = useState<SalesType | null>(null);
  const [formData, setFormData] = useState({ code: '', name1: '', name2: '', name3: '', suffix: '', pricelevel: '', mainlevel: '' });
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [refreshKey, setRefreshKey] = useState(0);
  const { currentLayout } = useLayout();
  const API_URL = import.meta.env.VITE_DOMAIN;
  const token = localStorage.getItem('token');
  
  const fetchSalesType = async (params: TDataGridRequestParams) => {
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

      const response = await axios.get(`${API_URL}/config/sales-type?${queryParams.toString()}`, {
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
      toast.error("Error fetching sales type");
      return { data: [], totalCount: 0 };
    }
  };

  const handleEdit = (rowData: SalesType) => {
    setEditData(rowData);
    setFormData({ code: rowData.code, name1: rowData.name1 , name2: rowData.name2, name3: rowData.name3, suffix: rowData.suffix, pricelevel: rowData.pricelevel, mainlevel: rowData.mainlevel});
    setShowAddForm(true);
  };

  const handleDelete = async (code: string) => {
      toast("Are you sure you want to delete this sales type?", {
        action: (
          <button
            onClick={async () => {
              try {
                await deleteSalesType(code);
                toast.success("Sales type deleted successfully!");
                setRefreshKey(prev => prev + 1);
              } catch (error) {
                toast.error("Error deleting sales type.");
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
    console.log("formData>>>", formData)
    try {
      if (editData) {
        await editSalesType(formData.code, formData.name1, formData.name2, formData.name3, formData.suffix, formData.pricelevel, formData.mainlevel);
        toast.success("Sales type updated successfully!");
      } else {
        await addSalesType(formData.code, formData.name1, formData.name2, formData.name3, formData.suffix, formData.pricelevel, formData.mainlevel);
        toast.success("Sales type added successfully!");
      }
      setShowAddForm(false);
      setEditData(null);
      setFormData({code: '', name1: '', name2: '', name3: '', suffix: '', pricelevel: '', mainlevel: ''});
    } catch (error) {
      toast.error("Failed to save sales type.");
    }
  };

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'code',
        id: 'code',
        header: ({ column }) => <DataGridColumnHeader title="Code" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.code,
        meta: {
          headerClassName: 'w-6',
          cellClassName: 'w-6 text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'name1',
        id: 'name1',
        header: ({ column }) => <DataGridColumnHeader title="Name1" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.name1,
      },
      {
        accessorKey: 'name2',
        id: 'name2',
        header: ({ column }) => <DataGridColumnHeader title="Name2" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.name2,
      },
      {
        accessorKey: 'name3',
        id: 'name3',
        header: ({ column }) => <DataGridColumnHeader title="Name3" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.name3,
      },
      {
        accessorKey: 'suffix',
        id: 'suffix',
        header: ({ column }) => <DataGridColumnHeader title="Suffix" column={column} />,
        enableSorting: true,
        cell: (info) => (info.row.original.suffix === "E" ? "Eat In" : (info.row.original.suffix === "D" ? "Delivery":"Take Away")),
      },
      {
        accessorKey: 'pricelevel',
        id: 'pricelevel',
        header: ({ column }) => <DataGridColumnHeader title="Price Level" column={column} />,
        enableSorting: true,
        cell: (info) => `Price ${info.row.original.pricelevel}`,
        meta: {
            cellClassName: 'text-center',
            subHeaderClassName: 'flex justify-center'
          },
      },
      {
        accessorKey: 'mainlevel',
        id: 'mainlevel',
        header: ({ column }) => <DataGridColumnHeader title="Default Main Level" column={column} />,
        enableSorting: true,
        cell: (info) => `Main Level ${info.row.original.mainlevel}`,
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
          <button onClick={() => handleDelete(row.original.code)} className='bg-[var(--tw-light-active)] border border-red-600 rounded-md font-semibold text-base text-red-600 h-[1.9rem] w-[1.9rem] hover:bg-red-600 hover:text-white'>
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                  <span className="text-md text-gray-600">Sales type Management</span>
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
              <h3 className="card-title">{editData ? 'Edit Sales type' : 'New Sales type'}</h3>
            </div>
            <div className="card-body grid gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Code {!formData.code && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="number"
                      placeholder="Enter Code"
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                      disabled={!!editData}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Name1 {!formData.name1 && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Name"
                      name="name1"
                      value={formData.name1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Name2 {!formData.name2 && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Name"
                      name="name2"
                      value={formData.name2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Name3 {!formData.name3 && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Name"
                      name="name3"
                      value={formData.name3}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Suffix {!formData.suffix && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <Select
                        value={formData.suffix} // Bind value to state
                        onValueChange={(value) => 
                            setFormData((prevData) => ({ ...prevData, suffix: value }
                        ))}
                    >
                      <SelectTrigger size="md">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="E">Eat In</SelectItem>
                        <SelectItem value="D">Delivery</SelectItem>
                        <SelectItem value="T">Take Away</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Price Level {!formData.pricelevel && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                    <Select
                      value={formData.pricelevel?.toString()}
                      onValueChange={(value) => {
                        setFormData((prev) => ({ ...prev, pricelevel: value }));
                      }}
                    >
                      <SelectTrigger size="md">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 100 }, (_, index) => (
                            <SelectItem key={index + 1} value={(index + 1).toString()}>
                                Price {index + 1}
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">
                    Main Level {!formData.mainlevel && <span className="text-red-500">*</span>}
                  </span>
                  <div className="grow min-w-24">
                  <Select
                      value={formData.mainlevel?.toString()}
                      onValueChange={(value) => {
                        setFormData((prev) => ({ ...prev, mainlevel: value }));
                      }}
                    >
                      <SelectTrigger size="md">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 100 }, (_, index) => (
                            <SelectItem key={index + 1} value={(index + 1).toString()}>
                                Main Level {index + 1}
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                onClick={() => { setShowAddForm(false); setEditData(null); setFormData({code: '', name1: '', name2: '', name3: '', suffix: '', pricelevel: '', mainlevel: ''}); }}
              >
                <div className='text-base mt-[1px]'><KeenIcon icon='cross'/></div>
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
              onFetchData={fetchSalesType}
              rowSelection={true}
              pagination={{ size: pageSize }}
              toolbar={
                <div className="card-header flex-wrap gap-2 border-b-0 px-5">
                  <h3 className="card-title font-medium text-sm">
                    Showing {count} of {totalCount} sales types
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

export { SalesTypePage };
