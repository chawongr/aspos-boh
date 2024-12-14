/* eslint-disable prettier/prettier */
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
import { Input } from '@/components/ui/input';


const StoreClientsFilter = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="card">
            <div className="card-header" id="webhooks">
                <h3 className="card-title">New Major Group</h3>
            </div>
            <div className="card-body grid gap-5">
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Name</span>
                    <div className="grow min-w-48">
                    <input className="input w-full" type="text" placeholder="Enter Name" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Active</span>
                    <div className="switch switch-sm grow min-w-48">
                    <input type="checkbox" value="1" name="check" defaultChecked readOnly />
                    </div>
                </div>
            </div>
            <div className="card-footer justify-center">
                <button className="btn btn-sm btn-primary">Add</button>
            </div>
        </div>
    );
};

export { StoreClientsFilter };




