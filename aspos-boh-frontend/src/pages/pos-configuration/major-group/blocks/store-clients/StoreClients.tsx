import { useMemo, useState } from 'react';
import {
  DataGrid,
  DataGridColumnHeader,
  DataGridRowSelectAll,
  DataGridRowSelect
} from '@/components';
import { ColumnDef, Column, RowSelectionState } from '@tanstack/react-table';
import { StoreClientsData, IStoreClientsData } from '.';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { ToolbarDescription } from '@/partials/toolbar';

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

const EnforceSwitch = ({ enforce }: { enforce: boolean }) => {
  return (
    <label className="switch switch-sm">
      <input type="checkbox" checked={enforce} value="1" readOnly />
    </label>
  );
};

const StoreClients = () => {
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

  const columns = useMemo<ColumnDef<IStoreClientsData>[]>(
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
        accessorFn: (row) => row.clientId,
        id: 'clientId',
        header: ({ column }) => <DataGridColumnHeader title="Code" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.clientId,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.user.name,
        id: 'user',
        header: ({ column }) => <DataGridColumnHeader title="Name" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.user.name,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.enforce,
        id: 'enforce',
        header: ({ column }) => <DataGridColumnHeader title="Active" column={column} />,
        enableSorting: true,
        cell: (info: any) => <EnforceSwitch enforce={info.row.original.enforce} />,
        meta: {
          headerClassName: 'min-w-[137px]',
          cellClassName: 'text-gray-800 font-medium'
        }
      },
      {
        id: 'actions',
        header: ({ column }) => <DataGridColumnHeader title="Delete Item" column={column} />,
        enableSorting: true,
        cell: () => <button className="deleteBtn">Delete</button>,
        meta: {
          headerClassName: 'w-28',
          cellClassName: 'text-gray-800 font-medium'
        }
      }
    ],
    []
  );

  const data: IStoreClientsData[] = useMemo(() => StoreClientsData, []);

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
        <h3 className="card-title font-medium text-sm">Showing 10 of 49,053 users</h3>
        <div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex flex-wrap gap-2.5">
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ToolbarDescription>
        <div className="flex items-center flex-wrap gap-1.5 font-medium mt-8 mb-3">
          <span className="text-md text-[#071437]">Major Group List</span>
        </div>
      </ToolbarDescription>
      <DataGrid
        columns={columns}
        data={data}
        rowSelection={true}
        onRowSelectionChange={handleRowSelection}
        pagination={{ size: 5 }}
        sorting={[{ id: 'user', desc: false }]}
        toolbar={<Toolbar />}
        layout={{ card: true }}
      />
    </div>
  );
};

export { StoreClients };
