import { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';

const StoreClientsFilter = () => {

    return (
        <div className="card">
            <div className="card-header" id="webhooks">
                <h3 className="card-title">Select</h3>
            </div>
            <div className="card-body grid gap-5">
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Company</span>
                    <div className="grow min-w-48">
                        <Select defaultValue="cpn1">
                            <SelectTrigger size="md">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cpn1">Company 1</SelectItem>
                                <SelectItem value="cpn2">Company 2</SelectItem>
                                <SelectItem value="cpn3">Company 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">ฺBranch</span>
                    <div className="grow min-w-48">
                        <Select defaultValue="b1">
                            <SelectTrigger size="md">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="b1">All</SelectItem>
                                <SelectItem value="b2">(Store Group)</SelectItem>
                                <SelectItem value="b3">(Store)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            
            <div className="card-footer justify-center">
                <button className="btn btn-sm btn-primary">Select</button>
            </div>
        </div>
    );
};

export { StoreClientsFilter };




