import { useState } from 'react';
import { KeenIcon } from '@/components';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const GeneralUrl = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header" id="webhooks">
          <h3 className="card-title">Url</h3>
        </div>
        <div className="card-body grid gap-5">

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">API URL</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter URL" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">ERP URL</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter URL" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">POS Host1</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter IP/URL" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">POS Host2</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter IP/URL" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">POS Host3</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter IP/URL" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export { GeneralUrl };
