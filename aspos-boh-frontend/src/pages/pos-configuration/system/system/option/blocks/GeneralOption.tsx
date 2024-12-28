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
          <h3 className="card-title">General</h3>
        </div>
        <div className="card-body grid gap-5">

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Store Code</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" />
            </div>
          </div>

          <div className="flex items-baseline flex-wrap gap-2.5">
              <label className="form-label max-w-32">Approver User</label>
              <div className="grid gap-5 grow items-start">
                <MultiSelect
                  items={[
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' },
                    { value: '3', label: 'Option 3' },
                  ]}
                  onChange={(selectedItems) => console.log('Selected items:', Array.from(selectedItems))}
                />
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export { GeneralOption };
