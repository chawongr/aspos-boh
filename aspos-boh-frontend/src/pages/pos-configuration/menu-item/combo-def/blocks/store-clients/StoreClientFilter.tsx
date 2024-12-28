import { useState } from 'react';
import { Sidebar } from '../../sidebar';
import DetailTab from '../../DetailTab';


const StoreClientsFilter = () => {

    return (
        <div className="card">
            {/* <div className="card-header" id="webhooks">
                <h3 className="card-title">New Major Group</h3>
            </div> */}
            <div className="card-body grid gap-5">
                <div className='flex'>
                    <Sidebar />
                    <DetailTab />
                </div>
            </div>
            {/* <div className="card-footer justify-center">
                <button className="btn btn-sm btn-primary">Add</button>
            </div> */}
        </div>
    );
};

export { StoreClientsFilter };




