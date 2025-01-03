import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const DetailTab = () => {

    return (
        <div className=" w-full pl-[30px]">
            <div className='flex justify-between text-lg font-medium w-full mb-5'>
                <div className='text-2xl'>Details</div>
                <div className='flex gap-x-2'>
                    <button className='btn btn-sm border border-blue-600'>
                        <div className='text-blue-600'>Save</div>
                    </button>
                    <button className='btn btn-sm border border-red-600 '>
                        <div className='text-red-600'>Delete this item</div>
                    </button>
                </div>
            </div>
            <div className="grid gap-5">
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Number</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="number" placeholder="Enter number..." />
                    </div>
                </div>
                <div className="flex items-baseline flex-wrap gap-2.5">
                    <label className="form-label max-w-32">Combo Group</label>
                    <div className="grid gap-5 grow items-start">
                        <Select>
                            <SelectTrigger size="md">
                                <SelectValue placeholder="Select combo group..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cbi1">Combo Group 1</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTab
