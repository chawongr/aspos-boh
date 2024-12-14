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

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

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
        accessorFn: (row) => row.user.name,
        id: 'user',
        header: ({ column }) => <DataGridColumnHeader title="Business Date" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.user.name,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.clientId,
        id: 'clientId',
        header: ({ column }) => <DataGridColumnHeader title="Sales Date" column={column} />,
        enableSorting: true,
        cell: (info: any) => info.row.original.clientId,
        meta: {
          headerClassName: 'min-w-[150px]',
          cellClassName: 'text-gray-800 font-normal'
        }
      },
      {
        accessorFn: (row) => row.ordersValue,
        id: 'ordersValue',
        header: ({ column }) => <DataGridColumnHeader title="Sales Time" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Check No." column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Total Selling Price" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Gross Sales" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Total Discount" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Discount Variance" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Nest Sales" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Total Tax" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Total Sales" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Total Service" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Total Revenue" column={column} />,
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
        header: ({ column }) => <DataGridColumnHeader title="Cashier" column={column} />,
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
  );
};

export { StoreClients };
