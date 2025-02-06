import { Fragment, useEffect, useMemo, useState } from 'react';
import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';
import {
  DataGrid,
  DataGridColumnHeader,
} from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import { addStoreGroup, deleteStoreGroup, editStoreGroup, fetchStoreGroup } from '@/auth/providers/Service';
import { KeenIcon } from '@/components';
import { useLayout } from '@/providers';
import { toast } from 'sonner';

interface StoreType {
  id: string;
  code: string;
  name: string;
}

const StoreTypePage = () => {
  const { currentLayout } = useLayout();
  const [storeGroups, setStoreGroups] = useState<StoreType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editData, setEditData] = useState<StoreType | null>(null);
  const [formData, setFormData] = useState({ code: '', name: '' });


  useEffect(() => {
    const getStoreGroups = async () => {
      try {
        const response = await fetchStoreGroup();
        setStoreGroups(response.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getStoreGroups();
  }, []);

  const handleEdit = (rowData: StoreType) => {
    setEditData(rowData);
    setFormData({ code: rowData.code, name: rowData.name });
    setShowAddForm(true);
  };

  const handleDelete = async (code: string) => {
    try {
      await deleteStoreGroup(code);
      const response = await fetchStoreGroup();
      setStoreGroups(response.data);
      toast.success("Store type deleted successfully!");
    } catch (error) {
      toast.error("Error deleting store group.");
    }
  };

  const columns = useMemo<ColumnDef<StoreType>[]>(
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
        id: 'actions',
        header: 'Actions',
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
        id: 'actions',
        header: 'Actions',
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
    return (
      <div className="card-header flex-wrap gap-2 border-b-0 px-5">
        <h3 className="card-title font-medium text-sm">
          Showing {storeGroups.length} store types
        </h3>
        <div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex flex-wrap gap-2.5">
            <div className="flex">
              <label className="input input-sm">
                <KeenIcon icon="magnifier" />
                <input
                  type="text"
                  placeholder="Search store type"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
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
      const response = await fetchStoreGroup();
      setStoreGroups(response.data);
    } catch (error) {
      toast.error("Failed to save store type.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) return <p>Loading store groups...</p>;
  if (error) return <p>Error: {error}</p>;

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
              columns={columns}
              data={storeGroups}
              rowSelection={true}
              pagination={{ size: 5 }}
              sorting={[{ id: 'code', desc: false }]}
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
