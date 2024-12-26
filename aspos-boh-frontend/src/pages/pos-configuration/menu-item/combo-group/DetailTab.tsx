import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectTitle
} from '@/components/ui/select';

const DetailTab = () => {
    const numberOfPrices = 20;
    return (
        <div className=" w-full pl-[30px]">
            <div className='text-lg font-medium w-full mb-2'>
                Details
            </div>
            <div className="grid gap-5">
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Combo Code</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="text" placeholder="Enter Combo Code" value="CB01 Combo1" />
                    </div>
                </div>
                <div className="flex items-baseline flex-wrap gap-2.5">
                    <label className="form-label max-w-32">Menu Item</label>
                    <div className="grid gap-5 grow items-start">
                        <Select defaultValue="cbi1">
                            <SelectTrigger size="md">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cbi1">Combo Item1</SelectItem>
                                <SelectItem value="cbi2">Combo Item2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Quantity</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="number" placeholder="Enter Quantity" />
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    {Array.from({ length: numberOfPrices }).map((_, i) => (
                        <div key={i+1} className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                            <span>Price {i+1}</span>
                            <div className="grow min-w-48">
                                <input className="input" type="number" placeholder="Enter Quantity" />
                            </div>
                        </div>
                    ))}
                    {/* <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Price 1</span>
                        <div className="grow min-w-48">
                            <input className="input w-full" type="number" placeholder="Enter Quantity" />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Price 2</span>
                        <div className="grow min-w-48">
                            <input className="input w-full" type="number" placeholder="Enter Quantity" />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Price 3</span>
                        <div className="grow min-w-48">
                            <input className="input w-full" type="number" placeholder="Enter Quantity" />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Price 4</span>
                        <div className="grow min-w-48">
                            <input className="input w-full" type="number" placeholder="Enter Quantity" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DetailTab
