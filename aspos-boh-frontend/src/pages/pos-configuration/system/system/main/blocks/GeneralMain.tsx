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

const GeneralMain = () => {
  return (
    <div>
      <div className="card mb-10">
        <div className="card-header" id="webhooks">
          <h3 className="card-title">Main</h3>
        </div>
        <div className="card-body grid gap-5">

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Store No</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter Store Number" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5 h-10">
            <span className="form-label max-w-32 w-full">Store Name</span>
            <div className="grow min-w-48">
              <span className="text-2sm text-gray-700 w-full">James Capenter</span>
                {/* <input className="input w-full" type="text" placeholder="Enter Combo Code" value="CB01 Combo1" /> */}
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5 h-10">
            <span className="form-label max-w-32 w-full">Version</span>
            <div className="grow min-w-48">
            <span className="text-2sm text-gray-700 w-full">3.2.0.0.1</span>
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5 h-10">
            <span className="form-label max-w-32 w-full">Business Date</span>
            <div className="grow min-w-48">
            <span className="text-2sm text-gray-700 w-full">12/11/2024</span>
            </div>
          </div>

          <div className="flex items-baseline flex-wrap gap-2.5">
              <label className="form-label max-w-32">Decimal Point</label>
              <div className="grid gap-5 grow items-start">
                  <Select defaultValue="dp0">
                      <SelectTrigger size="md">
                          <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="dp0">0</SelectItem>
                          <SelectItem value="dp1">1</SelectItem>
                          <SelectItem value="dp2">2</SelectItem>
                          <SelectItem value="dp3">3</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Amount Due Rounding</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" />
            </div>
          </div>

          <div className="flex items-baseline flex-wrap gap-2.5">
              <label className="form-label max-w-32">Default Tender Media</label>
              <div className="grid gap-5 grow items-start">
                  <Select defaultValue="td1">
                      <SelectTrigger size="md">
                          <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="td1">Tender</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
          </div>
          
          <div className="flex items-baseline flex-wrap gap-2.5">
              <label className="form-label max-w-32">Default Sales Type</label>
              <div className="grid gap-5 grow items-start">
                  <Select defaultValue="st1">
                      <SelectTrigger size="md">
                          <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="st1">sale type 1</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
          </div>

          <div className="flex items-baseline flex-wrap gap-2.5">
              <label className="form-label max-w-32">Default Waste</label>
              <div className="grid gap-5 grow items-start">
                  <Select defaultValue="w1">
                      <SelectTrigger size="md">
                          <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="w1">waste 1</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
          </div>

          <div className="flex items-baseline flex-wrap gap-2.5">
              <label className="form-label max-w-32">Approver User</label>
              <div className="grid gap-5 grow items-start">
                  <Select defaultValue="user1">
                      <SelectTrigger size="md">
                          <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="user1">user 1</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
          </div>
          <div className="flex items-baseline flex-wrap gap-2.5">
              <label className="form-label max-w-32"></label>
              <div className="switch switch-sm grow flex justify-start">
                <input type="checkbox" value="1" name="check" defaultChecked readOnly />
                <span className="text-gray-800 text-sm">Allowed</span>
              </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Clear training data every</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter Number of Days" />
            </div>
          </div>

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
            <span className="form-label max-w-32 w-full">POS Host URL1</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter URL" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">POS Host URL2</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter URL" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">POS Host URL3</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter URL" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Backup DB Name</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter DB Name" />
            </div>
          </div>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
            <span className="form-label max-w-32 w-full">Call Center</span>
            <div className="grow min-w-48">
              <input className="input w-full" type="text" placeholder="Enter Cal Center" />
            </div>
          </div>

          <div className="flex items-baseline flex-wrap gap-2.5">
              <label className="form-label max-w-32">Language</label>
              <div className="grid gap-5 grow items-start">
                  <Select defaultValue="user1">
                      <SelectTrigger size="md">
                          <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user1">
                          <img src="" className="inline-block size-3.5 rounded-full mr-2" alt="{currentLanguage.label}"/>
                            English
                        </SelectItem>
                        <SelectItem value="user2">
                          <img src="" className="inline-block size-3.5 rounded-full mr-2" alt="{currentLanguage.label}"/>
                            Franch
                        </SelectItem>
                      </SelectContent>
                  </Select>
              </div>
          </div>

          <div className="flex items-baseline flex-wrap gap-2.5">
              <label className="form-label max-w-32">Approver User</label>
              <div className="grid gap-5 grow items-start">
                  <Select defaultValue="user1">
                      <SelectTrigger size="md">
                          <SelectValue placeholder="Select"  />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="user1" className='checkbox-label'>user 1</SelectItem>
                      </SelectContent>
                  </Select>
              </div>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export { GeneralMain };
