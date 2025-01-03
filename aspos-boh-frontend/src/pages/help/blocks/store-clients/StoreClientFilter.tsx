import { useState } from 'react';
import { KeenIcon } from '@/components';

const StoreClientsFilter = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="card">
            <div className="card-header" id="webhooks">
                <h3 className="card-title">How can we help ?</h3>
            </div>
            <div className="card-body gap-5 flex justify-center">
                <div className="flex items-baseline flex-wrap gap-2.5 w-[450px] ">
                    <div className="gap-2 grow flex items-center mx-4 input">
                        <KeenIcon icon="magnifier" className="text-gray-700 text-xl " />
                        <input
                            type="text"
                            name="query"
                            className="input px-0 border-none bg-transparent shadow-none ms-2"
                            placeholder="Tap to start search"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export { StoreClientsFilter };




