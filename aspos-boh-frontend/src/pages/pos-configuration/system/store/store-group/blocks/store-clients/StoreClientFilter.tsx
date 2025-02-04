const StoreClientsFilter = () => {
    return (
        <div className="card">
            <div className="card-header" id="webhooks">
                <h3 className="card-title">New Store Group</h3>
            </div>
            <div className="card-body grid gap-5">
                <div className="grid grid-cols-5 gap-5">
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Code</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Code" />
                        </div>
                    </div>
                    <div className="items-center flex-wrap lg:flex-nowrap gap-2.5">
                        <span className="form-label max-w-32 w-full">Name</span>
                        <div className="grow min-w-24">
                            <input className="input w-full" type="text" placeholder="Enter Name" />
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


