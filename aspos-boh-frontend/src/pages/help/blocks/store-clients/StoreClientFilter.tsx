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
            <div className="card-header" id="webhooks">
                <h3 className="card-title">How can we help ?</h3>
            </div>
            <div className="card-body grid gap-5 flex justify-center">
                <div className="flex items-baseline flex-wrap gap-2.5 w-[500px] border-blue-400 ">
                    <div className="gap-5 grow flex items-center ">
                        <KeenIcon icon="magnifier" className="text-gray-700 text-xl" />
                        <input
                            type="text"
                            name="query"
                            // value={searchInput}
                            className="input px-0 border-none bg-transparent shadow-none ms-2.5"
                            // onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Tap to start search"
                        />
                    </div>
                </div>
                
            </div>
            {/* <div className="card-footer justify-center">
                <button className="btn btn-sm btn-primary">Filter</button>
            </div> */}
        </div>
    );
};

export { StoreClientsFilter };




