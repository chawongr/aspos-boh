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
import { addMajorGroup, deleteMajorGroup, editMajorGroup } from '@/pages/pos-configuration/sales/Service';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';

interface MajorGroup {
  code: string;
  name: string;
  accountcode: string;
  inactive: string;
}

const MajorGroupPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editData, setEditData] = useState<MajorGroup | null>(null);
  const [formData, setFormData] = useState({ code: '', name: '',accountcode:'',inactive:'0' });
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [refreshKey, setRefreshKey] = useState(0);
  const { currentLayout } = useLayout();
  const API_URL = import.meta.env.VITE_DOMAIN;
  const token = localStorage.getItem('token');


  const fetchMajorGroup = async (params: TDataGridRequestParams) => {
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

      const response = await axios.get(`${API_URL}/config/menu/major-group?${queryParams.toString()}`, {
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
      toast.error("Error fetching major group");
      return { data: [], totalCount: 0 };
    }
  };

  const handleEdit = (rowData: MajorGroup) => {
    setEditData(rowData);
    setFormData({ 
      code: rowData.code, 
      name: rowData.name,
      accountcode: rowData.accountcode,
      inactive: rowData.inactive 
    });
    setShowAddForm(true);
  };

  const handleDelete = async (code: string) => {
      toast("Are you sure you want to delete this major group?", {
        action: (
          <button
            onClick={async () => {
              try {
                await deleteMajorGroup(code);
                toast.success("Major Group deleted successfully!");
                setRefreshKey(prev => prev + 1);
              } catch (error) {
                toast.error("Error deleting major group.");
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
      if (editData) {
        await editMajorGroup(
          formData.code, 
          formData.name,
          formData.accountcode,
          formData.inactive
        );
        toast.success("Major Group updated successfully!");
      } else {
        await addMajorGroup(
          formData.code, 
          formData.name,
          formData.accountcode,
          formData.inactive);
        toast.success("Major Group added successfully!");
      }
      setShowAddForm(false);
      setEditData(null);
      setFormData({ code: '', name: '',accountcode:'',inactive:'0' });
    } catch (error) {
      toast.error("Failed to save major Group.");
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
        accessorKey: 'name',
        id: 'name',
        header: ({ column }) => <DataGridColumnHeader title="Name" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.name,
      },
      {
        accessorKey: 'accountcode',
        id: 'accountcode',
        header: ({ column }) => <DataGridColumnHeader title="Account Code" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.accountcode,
      },
      {
        accessorKey: 'inactive',
        id: 'inactive',
        header: ({ column }) => <DataGridColumnHeader title="Activation" column={column} />,
        enableSorting: true,
        cell: (info) => (info.row.original.inactive === "1" ? "Active" : "Inactive"),
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'createby',
        id: 'createby',
        header: ({ column }) => <DataGridColumnHeader title="Create By" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.createby,
      },
      {
        accessorKey: 'createdate',
        id: 'createdate',
        header: ({ column }) => <DataGridColumnHeader title="Create Date" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.createdate,
        meta: {
          cellClassName: 'text-center',
          subHeaderClassName: 'flex justify-center'
        },
      },
      {
        accessorKey: 'updateby',
        id: 'updateby',
        header: ({ column }) => <DataGridColumnHeader title="Update By" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.updateby,
      },
      {
        accessorKey: 'updatedate',
        id: 'updatedate',
        header: ({ column }) => <DataGridColumnHeader title="Update Date" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.updatedate,
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
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? "1" : "0") : value, // Handle checkboxes correctly
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
                  <span className="text-md text-gray-600">Major Group Management</span>
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
              <h3 className="card-title">{editData ? 'Edit Major Group' : 'New Major Group'}</h3>
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
                    Account Code
                  </span>
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
                  <span className="form-label max-w-32 w-full">
                    In Active
                  </span>
                  <div className="grow min-w-24 switch switch-sm h-10">
                    <input 
                      type="checkbox" 
                      // value={formData.inactive}
                      name="inactive" 
                      checked={formData.inactive === "1"}
                      onChange={handleChange}
                      // defaultChecked readOnly 
                    />
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
                onClick={() => { setShowAddForm(false); setEditData(null); setFormData({ code: '', name: '' ,accountcode:'',inactive:'0'}); }}
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
              onFetchData={fetchMajorGroup}
              rowSelection={true}
              pagination={{ size: pageSize }}
              toolbar={
                <div className="card-header flex-wrap gap-2 border-b-0 px-5">
                  <h3 className="card-title font-medium text-sm">
                    Showing {count} of {totalCount} major groups
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

export { MajorGroupPage };
