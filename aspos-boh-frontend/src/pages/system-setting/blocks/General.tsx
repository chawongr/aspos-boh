import { useState } from 'react';
import { KeenIcon } from '@/components';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const General = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header" id="webhooks">
          <h3 className="card-title">General</h3>
        </div>
        <div className="card-body grid gap-5">

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Store Code</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Store Name</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Version</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Decimal Point</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Amount Due Rounding</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Default Tender Media</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">24hr Time</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">On - Weight in Pounds</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">On - Use Auto business date</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">On - Pickup control by employee</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">Perform inventory closing during end of day process</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">Do not allow inventory receipt without purchase order</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">Shutdown computer after end of day process</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

        </div>
      </div>
      <div className="card mt-7">
        <div className="card-body grid gap-5">
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">License</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export { General };
