import { useState } from 'react';

const StoreClientsFilter = () => {

    return (
        <div className="card">
            <div className="card-header" id="webhooks">
                <h3 className="card-title">New User</h3>
            </div>
            <div className="card-body grid gap-5">
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Code</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="text" placeholder="Enter User Code" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Name</span>
                    <div className="grow min-w-48">
                        <input className="input w-full" type="text" placeholder="Enter Name" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">In Active</span>
                    <div className="grow min-w-48">
                        <input className="checkbox" name="attributes" type="checkbox" value="1" readOnly />
                    </div>
                    <span className="form-label max-w-32 w-full">License Register</span>
                    <div className="grow min-w-48">
                    <input className="checkbox" name="attributes" type="checkbox" value="1" readOnly />
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">User</span>
                    <div className="grow min-w-48">
                    <input className="checkbox" name="attributes" type="checkbox" value="1" readOnly />
                    </div>
                    <span className="form-label max-w-32 w-full">License Connected Client</span>
                    <div className="grow min-w-48">
                    <input className="checkbox" name="attributes" type="checkbox" value="1" readOnly />
                    </div>
                </div>
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <span className="form-label max-w-32 w-full">Logs</span>
                    <div className="grow min-w-48">
                        <input className="checkbox" name="attributes" type="checkbox" value="1" readOnly />
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




