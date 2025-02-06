const StoreClientsFilter = () => {
    return (
        <div className="card">
            <div className="card-header" id="webhooks">
                <h3 className="card-title">New Company</h3>
            </div>
            <div className="card-body grid gap-5">
                <div className="grid grid-cols-5 gap-5">
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Company Code</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Company Code" />
                        </div>
                    </div>
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Name</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Address 1</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Address 1" />
                        </div>
                    </div>
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Address 2</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Address 2" />
                        </div>
                    </div>
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Address 3</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Address 3" />
                        </div>
                    </div>
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Email</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Phone</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Phone" />
                        </div>
                    </div>
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Tax ID Number</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Tax ID Number" />
                        </div>
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


