import { useState } from 'react';
import { KeenIcon } from '@/components';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { MultiSelect } from '@/components/ui/select';


const StoreClientsFilter = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const tabs = ["Criteria 1", "Criteria 2"];
    const [activeTab, setActiveTab] = useState("Criteria 1");

    const getTabStyle = (tabName: string) => ({
        color: activeTab === tabName ? "var(--tw-primary)" : "var(--tw-gray-700)",
        borderColor: activeTab === tabName ? "var(--tw-primary)" : "transparent",
    });

    const storeT = [
        { value: 'Store 1', label: 'Store Type 1' },
        { value: 'Store 2', label: 'Store Type 2' },
        { value: 'Store 3', label: 'Store Type 3' },
        { value: 'Store 4', label: 'Store Type 4' },
        { value: 'Store 5', label: 'Store Type 5' },
    ];

    const companies = [
        { value: '1', label: 'Company 1' },
        { value: '2', label: 'Company 2' },
        { value: '3', label: 'Company 3' },
    ];

    const closed = [
        { value: '1', label: 'Closed 1' },
        { value: '2', label: 'Closed 2' },
        { value: '3', label: 'Closed 3' },
    ];

    const area = [
        { value: '1', label: 'Area 1' },
        { value: '2', label: 'Area 2' },
        { value: '3', label: 'Area 3' },
    ];

    const region = [
        { value: '1', label: 'Region 1' },
        { value: '2', label: 'Region 2' },
        { value: '3', label: 'Region 3' },
    ];

    const country = [
        { value: '1', label: 'Country 1' },
        { value: '2', label: 'Country 2' },
        { value: '3', label: 'Country 3' },
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
        { value: '1', label: 'employee shift' },
        { value: '2', label: 'sales by machine' },
        { value: '3', label: 'system sales report' },
        { value: '4', label: 'menu item sales report : Group By PC , Group By Item group' },
        { value: '5', label: 'cash and transaction' },
        { value: '6', label: 'hourly product' },
        { value: '7', label: 'hourly sales' },
        { value: '8', label: 'performance cashier' },
        { value: '9', label: 'sale summary trans report' },
        { value: '10', label: 'speed of service' },
        { value: '11', label: 'speed of service analysis report' },
        { value: '12', label: 'average speed of service by transtype' },
    ];

    const groupby = [
        { value: '1', label: 'Company' },
        { value: '2', label: 'Store Group' },
        { value: '3', label: 'Store' },
        { value: '4', label: 'RVC' },
        { value: '5', label: 'PC' },
        { value: '6', label: 'Menu Item Group' },
        { value: '7', label: 'Sales type' },
    ];

    const handleSelectionChange = (selectedItems: Set<string>) => {
        // console.log('Selected Items:', Array.from(selectedItems));
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Criteria 1':
                return (
                    <div className="card-body grid gap-5">
                        <div className="grid grid-cols-5 gap-5">
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Store No</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter Store No" />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Name</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter Name" />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Address 1</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter Address 1" />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Address 2</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter Address 2" />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Address 3</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter Address 3" />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Email</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter Email" />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Phone</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter Phone" />
                                </div>
                            </div>
                            {/* <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Store Group</span>
                                <div className="grow min-w-24">
                                    <MultiSelect
                                        items={storeG}
                                        onChange={handleSelectionChange}
                                    />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Area</span>
                                <div className="grow min-w-24">
                                    <MultiSelect
                                        items={area}
                                        onChange={handleSelectionChange}
                                    />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Region</span>
                                <div className="grow min-w-24">
                                    <MultiSelect
                                        items={region}
                                        onChange={handleSelectionChange}
                                    />
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                );
            case 'Criteria 2':
                return (
                    <div className="card-body grid gap-5">
                        <div className="grid grid-cols-5 gap-5">
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Country</span>
                                <div className="grow min-w-24">
                                    {/* <MultiSelect
                                        items={country}
                                        onChange={handleSelectionChange}
                                    /> */}
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Open Date</span>
                                <div className="grow min-w-24">
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
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Closed</span>
                                <div className="grow min-w-24">
                                    {/* <MultiSelect
                                        items={closed}
                                        onChange={handleSelectionChange}
                                    /> */}
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Account Code</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter Account Code" />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Cost Centre</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter Cost Centre" />
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">Store Type</span>
                                <div className="grow min-w-24">
                                    {/* <MultiSelect
                                        items={storeT}
                                        onChange={handleSelectionChange}
                                    /> */}
                                </div>
                            </div>
                            <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                                <span className="form-label max-w-32 w-full">IP Address</span>
                                <div className="grow min-w-24">
                                    <input className="input w-full" type="text" placeholder="Enter IP Address" />
                                </div>
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
                    Detail 1
                </button>
                <button
                    className={`tab ${activeTab === 'Criteria 2' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Criteria 2')}
                >
                    Detail 2
                </button>
            </div>


            <div className="px-10">{renderTabContent()}</div>

            <div className="card-footer justify-center">
                <button className="btn btn-sm btn-primary">Add</button>
            </div>
        </div>
    );
};

export { StoreClientsFilter };


