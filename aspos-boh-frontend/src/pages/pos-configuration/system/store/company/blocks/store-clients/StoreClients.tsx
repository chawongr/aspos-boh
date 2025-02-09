import { useEffect, useMemo, useState } from 'react';
import {
  DataGrid,
  DataGridColumnHeader,
  DataGridRowSelectAll,
  DataGridRowSelect
} from '@/components';
import { ColumnDef, Column, RowSelectionState } from '@tanstack/react-table';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { fetchStoreGroup } from '@/providers/Service';
import { KeenIcon } from '@/components';

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

const StoreClients = () => {
  const [storeGroups, setStoreGroups] = useState([]); // ✅ Store API data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const getStoreGroups = async () => {
      try {
        const response = await fetchStoreGroup();
        setStoreGroups(response.data); // ✅ Store fetched data
      } catch (err) {
        // setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getStoreGroups();
  }, []);

  const ColumnInputFilter = <TData, TValue>({ column }: IColumnFilterProps<TData, TValue>) => {
    return (
      <Input
        placeholder="Filter..."
        value={(column.getFilterValue() as string) ?? ''}
        onChange={(event) => column.setFilterValue(event.target.value)}
        className="h-9 w-full max-w-40"
      />
    );
  };

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'id',
        header: () => <DataGridRowSelectAll />,
        cell: ({ row }) => <DataGridRowSelect row={row} />,
        enableSorting: false,
        enableHiding: false,
        meta: {
          headerClassName: 'w-0'
        }
      },
      {
        accessorKey: 'code',
        id: 'code',
        header: ({ column }) => <DataGridColumnHeader title="Company Code" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.code,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorKey: 'name',
        id: 'name',
        header: ({ column }) => <DataGridColumnHeader title="Name" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.name,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.ordersValue,
        id: 'ordersValue',
        header: ({ column }) => <DataGridColumnHeader title="Address1" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.ordersValue,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.clientId,
        id: 'clientId',
        header: ({ column }) => <DataGridColumnHeader title="Address2" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.clientId,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.activity,
        id: 'activity',
        header: ({ column }) => <DataGridColumnHeader title="Address3" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.activity,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.activity,
        id: 'activity',
        header: ({ column }) => <DataGridColumnHeader title="Email" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.activity,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.activity,
        id: 'activity',
        header: ({ column }) => <DataGridColumnHeader title="Phone" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.activity,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.activity,
        id: 'activity',
        header: ({ column }) => <DataGridColumnHeader title="Tax ID Number" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.activity,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
    ],

    []
  );

  const handleRowSelection = (state: RowSelectionState) => {
    const selectedRowIds = Object.keys(state);

    if (selectedRowIds.length > 0) {
      toast(`Total ${selectedRowIds.length} are selected.`, {
        description: `Selected row IDs: ${selectedRowIds}`,
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo')
        }
      });
    }
  };

  const Toolbar = () => {
    return (
      <div className="card-header flex-wrap gap-2 border-b-0 px-5">
        <h3 className="card-title font-medium text-sm">
          Showing {storeGroups.length} companies
        </h3>
        <div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex flex-wrap gap-2.5">
            <div className="flex">
              <label className="input input-sm">
                <KeenIcon icon="magnifier" />
                <input
                  type="text"
                  placeholder="Search company"
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

  if (loading) return <p>Loading store groups...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <DataGrid
      columns={columns}
      data={storeGroups} // ✅ Use API data
      rowSelection={true}
      onRowSelectionChange={handleRowSelection}
      pagination={{ size: 5 }}
      sorting={[{ id: 'code', desc: false }]}
      toolbar={<Toolbar />}
      layout={{ card: true }}
    />
  );
};

export { StoreClients };
