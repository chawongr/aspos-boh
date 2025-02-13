import { useState } from 'react';
import { KeenIcon } from '@/components';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    MultiSelect
} from '@/components/ui/select';

import { Checkbox } from '@/components/ui/checkbox'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';


const StoreClientsFilter = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const tabs = ["Criteria 1", "Criteria 2"];
    const [activeTab, setActiveTab] = useState("Criteria 1");

    const getTabStyle = (tabName: string) => ({
        color: activeTab === tabName ? "var(--tw-primary)" : "var(--tw-gray-700)",
        borderColor: activeTab === tabName ? "var(--tw-primary)" : "transparent",
    });

    const stores = [
        { value: 'Store 1', label: 'Store 1' },
        { value: 'Store 2', label: 'Store 2' },
        { value: 'Store 3', label: 'Store 3' },
        { value: 'Store 4', label: 'Store 4' },
        { value: 'Store 5', label: 'Store 5' },
    ];

    const companies = [
        { value: '1', label: 'Company 1' },
        { value: '2', label: 'Company 2' },
        { value: '3', label: 'Company 3' },
    ];

    const storeG = [
        { value: '1', label: 'Store Group 1' },
        { value: '2', label: 'Store Group 2' },
        { value: '3', label: 'Store Group 3' },
    ];

    const rvc = [
        { value: 'registration', label: 'Registration Counter' },
        { value: 'stall07', label: 'STALL 07' },
        { value: 'stall12', label: 'STALL 12' },
        { value: 'Store 4', label: 'Store 4' },
        { value: 'Store 5', label: 'Store 5' },
    ];

    const pc = [
        { value: '01', label: 'PC 1' },
        { value: '02', label: 'PC 2' },
        { value: '03', label: 'PC 3' },
    ];

    const reports = [
        { value: '1', label: 'Raw Waste' },
        { value: '2', label: 'Finish Waste' },
        { value: '3', label: 'Stock take' },
        { value: '4', label: 'Inventory varience' },
        { value: '5', label: 'Standard cost per menu' },
    ];

    const groupby = [
        { value: '1', label: 'Company' },
        { value: '2', label: 'Store Group' },
        { value: '3', label: 'Store' },
        { value: '4', label: 'RVC' },
        { value: '5', label: 'PC' },
        { value: '6', label: 'Menu Item Group' },
    ];

    const handleSelectionChange = (selectedItems: Set<string>) => {
        // console.log('Selected Items:', Array.from(selectedItems));
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Criteria 1':
                return (
                    <div className="card-body grid gap-5 h-[370px]">
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32">Company</label>
                            <div className="grid gap-5 grow items-start">
                                {/* <MultiSelect
                                    items={companies}
                                    onChange={handleSelectionChange}
                                /> */}
                            </div>
                        </div>
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32">Store Group</label>
                            <div className="grid gap-5 grow items-start">
                                {/* <MultiSelect
                                    items={storeG}
                                    onChange={handleSelectionChange}
                                /> */}
                            </div>
                        </div>
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32">Store</label>
                            <div className="grid gap-5 grow items-start">
                                {/* <MultiSelect
                                    items={stores}
                                    onChange={handleSelectionChange}
                                /> */}
                            </div>
                        </div>
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32">RVC</label>
                            <div className="grid gap-5 grow items-start">
                                {/* <MultiSelect
                                    items={rvc}
                                    onChange={handleSelectionChange}
                                /> */}
                            </div>
                        </div>
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32">PC</label>
                            <div className="grid gap-5 grow items-start">
                                {/* <MultiSelect
                                    items={pc}
                                    onChange={handleSelectionChange}
                                /> */}
                            </div>
                        </div>
                    </div>
                );
            case 'Criteria 2':
                return (
                    <div className="card-body grid gap-5 h-[370px]">
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32 my-auto">From</label>
                            <div className="grid gap-5 grow items-start">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button
                                            id="date"
                                            className={cn(
                                                'input data-[state=open]:border-primary',
                                                !date && 'text-muted-foreground'
                                            )}
                                        >
                                            <KeenIcon icon="calendar" className="-ms-0.5" />
                                            {date ? format(date, 'LLL dd, y') : <span>Pick a date</span>}
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            initialFocus
                                            mode="single"
                                            defaultMonth={date}
                                            selected={date}
                                            onSelect={setDate}
                                            numberOfMonths={1}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32 my-auto">To</label>
                            <div className="grid gap-5 grow items-start">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button
                                            id="date"
                                            className={cn(
                                                'input data-[state=open]:border-primary',
                                                !date && 'text-muted-foreground'
                                            )}
                                        >
                                            <KeenIcon icon="calendar" className="-ms-0.5" />
                                            {date ? format(date, 'LLL dd, y') : <span>Pick a date</span>}
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            initialFocus
                                            mode="single"
                                            defaultMonth={date}
                                            selected={date}
                                            onSelect={setDate}
                                            numberOfMonths={1}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32 my-auto">Status</label>
                            <div className="grid gap-5 grow items-start">
                                <Select defaultValue="close">
                                    <SelectTrigger size="md">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="close">CLOSED</SelectItem>
                                        <SelectItem value="open">OPENED</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32 my-auto">Report</label>
                            <div className="grid gap-5 grow items-start">
                                <Select defaultValue="1">
                                    <SelectTrigger size="md">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>

                                        {reports.map((report) => (
                                            <SelectItem value={report.value}>{report.label}</SelectItem>
                                        ))}

                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex items-baseline flex-wrap gap-2.5">
                            <label className="form-label max-w-32 my-auto">Group By</label>
                            <div className="grid gap-5 grow items-start">
                                {/* <MultiSelect
                                    items={groupby}
                                    onChange={handleSelectionChange}
                                /> */}
                            </div>
                        </div>
                        <div className="flex">
                            <div className='flex'>
                                <input className="checkbox" type="checkbox" />
                                <label className="form-label ml-2 my-auto">Dairy</label>

                            </div>
                            <div className='ml-10 flex'>
                                <input className="checkbox" type="checkbox" />
                                <label className="form-label ml-2 my-auto">Weekly</label>

                            </div>
                            <div className='ml-10 flex'>
                                <input className="checkbox" type="checkbox" />
                                <label className="form-label ml-2 my-auto">Monthly</label>

                            </div>

                        </div>
                    </div >
                );
            default:
                return null;
        }
    };

    return (
        <div className="card">
            <div className="tabs px-8 pt-3">
                <button
                    className={`tab ${activeTab === 'Criteria 1' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Criteria 1')}
                >
                    Criteria 1
                </button>
                <button
                    className={`tab ${activeTab === 'Criteria 2' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Criteria 2')}
                >
                    Criteria 2
                </button>
            </div>


            <div className="px-10">{renderTabContent()}</div>

            <div className="card-footer justify-center">
                <button className="btn btn-sm btn-primary">Search</button>
            </div>
        </div>
    );
};

export { StoreClientsFilter };


