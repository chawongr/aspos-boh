import { useState } from 'react';

const StoreClientsFilter = () => {

    return (
        <div className="card mb-10">
            <div className="card-header" id="webhooks">
                <h3 className="card-title">Information</h3>
            </div>
            <div className="card-body grid gap-5">
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Name</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="text" placeholder="Enter Name" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Surname</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="text" placeholder="Enter Surname" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Phone Number</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="text" placeholder="Enter Number" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">National ID Card</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="text" placeholder="Enter Number" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Email</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="text" placeholder="Enter Email" />
                    </div>
                </div>
            </div>
            
            <div className="card-footer justify-center">
                <button className="btn btn-sm btn-primary">Register</button>
            </div>
        </div>
    );
};

export { StoreClientsFilter };




