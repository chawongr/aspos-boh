import { useState } from 'react';

const StoreClientsFilter = () => {

    return (
        <div>
            <div className="card mb-10">
                <div className="card-header" id="webhooks">
                    <h3 className="card-title">Store 1</h3>
                </div>
                <div className="card-body grid gap-5">
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Store Name</label>
                        <div className="grow min-w-48">
                            <input className="input w-full" type="text" placeholder="Enter Name 1" />
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Line Web App ID</label>
                        <div className="grow">
                            <div className="input-group">
                                <input
                                className="input" 
                                type="text"
                                value="ID 1"
                                />   
                                <span className="btn btn-primary">Copy</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Line Web App</label>
                        <div className="grow">
                            <div className="input-group">
                                <input
                                className="input" 
                                type="text"
                                value="url link 1"
                                />   
                                <span className="btn btn-primary">Copy</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end gap-2 my-5'>
                            <button className="btn btn-sm loadBtn">Save</button>
                            <button className="btn btn-sm editBtn">Preview</button>
                    </div>
                </div>

            </div>
            <div className="card mb-10">
                <div className="card-header" id="webhooks">
                    <h3 className="card-title">Store 2</h3>
                </div>

                <div className="card-body grid gap-5">
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Store Name</label>
                        <div className="grow min-w-48">
                            <input className="input w-full" type="text" placeholder="Enter Name 2" />
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Line Web App ID</label>
                        <div className="grow">
                            <div className="input-group">
                                <input
                                className="input" 
                                type="text"
                                value="ID 2"
                                />   
                                <span className="btn btn-primary">Copy</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Line Web App</label>
                        <div className="grow">
                            <div className="input-group">
                                <input
                                className="input" 
                                type="text"
                                value="url link 2"
                                />   
                                <span className="btn btn-primary">Copy</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end gap-2 my-5'>
                            <button className="btn btn-sm loadBtn">Save</button>
                            <button className="btn btn-sm editBtn">Preview</button>
                    </div>
                </div>

            </div>
            <div className="card mb-10">
                <div className="card-header" id="webhooks">
                    <h3 className="card-title">Store 3</h3>
                </div>

                <div className="card-body grid gap-5">
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Store Name</label>
                        <div className="grow min-w-48">
                            <input className="input w-full" type="text" placeholder="Enter Name 3" />
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Line Web App ID</label>
                        <div className="grow">
                            <div className="input-group">
                                <input
                                className="input" 
                                type="text"
                                value="ID 3"
                                />   
                                <span className="btn btn-primary">Copy</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                        <label className="form-label max-w-56">Line Web App</label>
                        <div className="grow">
                            <div className="input-group">
                                <input
                                className="input" 
                                type="text"
                                value="url link 3"
                                />   
                                <span className="btn btn-primary">Copy</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end gap-2 my-5'>
                            <button className="btn btn-sm loadBtn">Save</button>
                            <button className="btn btn-sm editBtn">Preview</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { StoreClientsFilter };




