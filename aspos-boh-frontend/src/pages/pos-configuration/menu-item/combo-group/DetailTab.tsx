import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { KeenIcon } from '@/components';
import {
    Toolbar,
    ToolbarActions,
    ToolbarDescription,
    ToolbarHeading,
    ToolbarPageTitle
} from '@/partials/toolbar';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';



const DetailTab = () => {
    const numberOfPrices = 20;
    const [showComboDot, setShowComboDot] = useState(false);

    const toggleComboDot = () => {
        setShowComboDot((prev) => !prev);
    };
    return (
        <div className=" w-full pl-[30px]">
            <div className='flex justify-between text-lg font-medium w-full mb-5'>
                <div className='text-2xl'>Details</div>
                <div className='flex gap-x-2'>
                    <button className='btn btn-sm border border-blue-600'>
                        <div className='text-blue-600'>Save</div>
                    </button>
                    {/* <button className='btn btn-sm border border-gray-400'>
                        <div className='text-gray-400'>Save</div>
                    </button> */}
                    <button className='btn btn-sm border border-red-600 '>
                        <div className='text-red-600'>Delete this item</div>
                    </button>
                    {/* <span
                        className=" mt-1 cursor-pointer"
                        onClick={toggleComboDot}
                    >
                        <KeenIcon icon="dots-vertical" />
                    </span>

                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setShowComboDot(false);
                        }}
                    >
                        {showComboDot && (
                            <div className="absolute z-10 mt-10 right-20 bg-gray-50 px-4 py-2 rounded-lg border border-gray-300 divide-y divide-gray-300 ">
                                <button className='flex gap-2 w-full text-red-500'>
                                    <div className='text-xl'><KeenIcon icon="delete-folder" /></div>
                                    <div className='text-md my-auto '>Delete this item</div>
                                </button>
                            </div>
                        )}
                    </OutsideClickHandler> */}
                </div>
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
                                <SelectItem value="cbi1">Combo Item 1</SelectItem>
                                <SelectItem value="cbi2">Combo Item 2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-center flex-wrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Quantity</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="number" placeholder="Enter Quantity" />
                    </div>
                </div>
                {Array.from({ length: numberOfPrices }).map((_, i) => (
                    <div className="flex items-baseline flex-wrap gap-2.5">
                        <label className="form-label max-w-32">Price {i + 1}</label>
                        <div className="grow min-w-48">
                            <input className="input" type="number" placeholder="Enter Price" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailTab
