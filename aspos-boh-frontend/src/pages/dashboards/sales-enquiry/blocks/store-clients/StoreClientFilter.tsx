import { useState } from 'react';
import { KeenIcon } from '@/components';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectTitle
} from '@/components/ui/select';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';


const StoreClientsFilter = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="card mb-7">
            <div className="card-header" id="webhooks">
                <h3 className="card-title">Filter</h3>
            </div>
            <div className="card-body grid gap-5">
                <div className="flex items-baseline flex-wrap gap-2.5">
                    <label className="form-label max-w-32">Store Group</label>
                    <div className="grid gap-5 grow items-start">
                        <Select defaultValue="all">
                            <SelectTrigger size="sm">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Stores</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-baseline flex-wrap gap-2.5">
                    <label className="form-label max-w-32">Store</label>
                    <div className="grid gap-5 grow items-start">
                        <Select defaultValue="foodRepublic">
                            <SelectTrigger size="sm">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectTitle value={'rvc'}>Store</SelectTitle>
                                <SelectItem value="foodRepublic">Food Republic</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                </div>
                <div className="flex items-baseline flex-wrap gap-2.5">
                    <label className="form-label max-w-32">RVC</label>
                    <div className="grid gap-5 grow items-start">
                        <Select defaultValue="registration">
                            <SelectTrigger size="sm">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="registration">Registration Counter</SelectItem>
                                <SelectItem value="stall07">STALL 07</SelectItem>
                                <SelectItem value="stall12">STALL 12</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-baseline flex-wrap gap-2.5">
                    <label className="form-label max-w-32">PC</label>
                    <div className="grid gap-5 grow items-start">
                        <Select defaultValue="1">
                            <SelectTrigger size="sm">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">01</SelectItem>
                                <SelectItem value="2">02</SelectItem>
                                <SelectItem value="3">03</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-baseline flex-wrap gap-2.5">
                    <label className="form-label max-w-32">From</label>
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
                    <label className="form-label max-w-32">To</label>
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
            </div>
            <div className="card-footer justify-center">
                <button className="btn btn-sm btn-primary">Filter</button>
            </div>
        </div>
    );
};

export { StoreClientsFilter };




