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
                <div className="flex">
                    <div className='flex'>
                        <input className="checkbox" type="checkbox" />
                        <label className="form-label ml-2 my-auto">In Active</label>
                    </div>
                    <div className='ml-10 flex'>
                        <input className="checkbox" type="checkbox" />
                        <label className="form-label ml-2 my-auto">User</label>
                    </div>
                    <div className='ml-10 flex'>
                        <input className="checkbox" type="checkbox" />
                        <label className="form-label ml-2 my-auto">Logs</label>
                    </div>
                    <div className='ml-10 flex'>
                        <input className="checkbox" type="checkbox" />
                        <label className="form-label ml-2 my-auto">License Register</label>
                    </div>
                    <div className='ml-10 flex'>
                        <input className="checkbox" type="checkbox" />
                        <label className="form-label ml-2 my-auto">License Connected Client</label>
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




