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
        <div className="card">
            {/* <div className="card-header" id="webhooks">
                <h3 className="card-title">Filter</h3>
            </div> */}
            <div className="card-body grid gap-5">
                <div className="flex items-baseline flex-wrap gap-2.5">
                    <label className="form-label max-w-32">Table</label>
                    <div className="grid gap-5 grow items-start">
                        <Select defaultValue="1">
                            <SelectTrigger size="md">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Table 1</SelectItem>
                                <SelectItem value="2">Table 2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="card-body flex justify-center">
                <div className="flex w-full">
                    <label className="input">
                        <KeenIcon icon="magnifier" />
                        <input
                            type="text"
                            placeholder="Search..."
                        />
                    </label>
                </div>
                <button className="btn btn-md btn-primary ml-3">Search</button>


            </div>
            {/* <div className="card-footer justify-center">
                <button className="btn btn-sm btn-primary">Filter</button>
            </div> */}
        </div>
    );
};

export { StoreClientsFilter };




