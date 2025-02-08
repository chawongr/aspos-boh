import { Fragment, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Column, ColumnDef, RowSelectionState } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import {
  DataGrid,
  TDataGridRequestParams,
  KeenIcon,
  DataGridColumnHeader,
  Container
} from '@/components';
import axios from 'axios';
import { addStoreGroup, deleteStoreGroup, editStoreGroup } from '@/auth/providers/Service';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';

const API_URL = import.meta.env.VITE_DOMAIN;
const token = localStorage.getItem('token');

interface StoreType {
  id: string;
  code: string;
  name: string;
}

const StoreTypePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editData, setEditData] = useState<StoreType | null>(null);
  const [formData, setFormData] = useState({ code: '', name: '' });
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0); 
  const [pageSize, setPageSize] = useState(5);  
  const [refreshKey, setRefreshKey] = useState(0);


  const fetchStoreGroups = async (params: TDataGridRequestParams) => {
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

      const response = await axios.get(`${API_URL}/store/group?${queryParams.toString()}`, {
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
      toast.error("Error fetching store groups");
      return { data: [], totalCount: 0 };
    }
  };

  const handleEdit = (rowData: StoreType) => {
    setEditData(rowData);
    setFormData({ code: rowData.code, name: rowData.name });
    setShowAddForm(true);
  };

  const handleDelete = async (code: string) => {
    try {
      await deleteStoreGroup(code);
      toast.success("Store type deleted successfully!");
      setRefreshKey(prev => prev + 1);
    } catch (error) {
      toast.error("Error deleting store group.");
    }
  };

  const handleSave = async () => {
    try {
      if (editData) {
        await editStoreGroup(formData.code, formData.name);
        toast.success("Store type updated successfully!");
      } else {
        await addStoreGroup(formData.code, formData.name);
        toast.success("Store type added successfully!");
      }
      setShowAddForm(false);
      setEditData(null);
      setFormData({ code: '', name: '' });
    } catch (error) {
      toast.error("Failed to save store type.");
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
      },
      {
        accessorKey: 'name',
        id: 'name',
        header: ({ column }) => <DataGridColumnHeader title="Name" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.name,
      },
      {
        id: 'edit',
        header: 'Edit',
        cell: ({ row }) => (
          <button className="editBtn" onClick={() => handleEdit(row.original)}>Edit</button>
        ),
        meta: {
          headerClassName: 'sticky right-0 w-8',
          cellClassName: 'sticky right-0 w-8',
        },
        enableHiding: false,
      },
      {
        id: 'delete',
        header: 'Delete',
        cell: ({ row }) => (
          <button className="deleteBtn" onClick={() => handleDelete(row.original.code)}>Delete</button>
        ),
        meta: {
          headerClassName: 'sticky right-0 w-8',
          cellClassName: 'sticky right-0 w-8',
        },
        enableHiding: false,
      }
    ],
    []
  );

  const ToolbarTable = () => {
    const count = Math.min((pageIndex + 1) * pageSize, totalCount); 
    return (
      <div className="card-header flex-wrap gap-2 border-b-0 px-5">
        <h3 className="card-title font-medium text-sm">
        Showing {count} of {totalCount} store types
        </h3>
        <div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex flex-wrap gap-2.5">
            <div className="flex">
              <label className="input input-sm">
                <KeenIcon icon="magnifier" />
                <input
                  type="text"
                  placeholder="Search store type"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-600">Store Type Management</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              {showAddForm ? (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  onClick={() => { setShowAddForm(false); setEditData(null); setFormData({ code: '', name: '' }); }}
                >
                  Back
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  onClick={() => setShowAddForm(true)}
                >
                  Add
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
              <h3 className="card-title">{editData ? 'Edit Store Type' : 'New Store Type'}</h3>
            </div>
            <div className="card-body grid gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                  <span className="form-label max-w-32 w-full">Code</span>
                  <div className="grow min-w-24">
                    <input
                      className="input w-full"
                      type="text"
                      placeholder="Enter Code"
                      name="code"
                      value={formData.code}
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
              </div>
            </div>
            <div className="card-footer justify-center">
              <button className="loadBtn h-8" onClick={handleSave}>Save</button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto ">
            <DataGrid
              key={refreshKey}
              columns={columns}
              serverSide={true}
              onFetchData={fetchStoreGroups}
              rowSelection={true}
              pagination={{ size: pageSize }}
              toolbar={<ToolbarTable />}
              layout={{ card: true }}
            />
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export { StoreTypePage };
