import { useState } from 'react';
import { KeenIcon } from '@/components';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  MultiSelect
} from '@/components/ui/select';

const GeneralOption = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header" id="webhooks">
          <h3 className="card-title">Option</h3>
        </div>
        <div className="card-body grid gap-5">

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-42 w-full">Enter Number of Guest Screen before order</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="number" placeholder="Enter Store Number" />
            </div>
          </div>
            
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">On - 24hr Time ( Off - AM/PM )</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">On - Weight in Pounds ( Off – In 
              Kilograms )</span>
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
            <span className="form-label w-full">On - Pickup control by employee ( Off - 
              By PC )</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full"> On - PinCode ( Off - User and Password ) </span>
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

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">On - Use Auto discount ( Off - Discount SLU )</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full"> On- Default sales type ( Off - Force select sales type first  )</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full"> Round Up Discount / Service Charge</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full"> Round Up Amount Due</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label w-full">  Force check Enter counted stock when EOD</span>
            <div className="switch switch-sm grow flex justify-end">
              <input type="checkbox" value="1" name="check" defaultChecked readOnly />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export { GeneralOption };
