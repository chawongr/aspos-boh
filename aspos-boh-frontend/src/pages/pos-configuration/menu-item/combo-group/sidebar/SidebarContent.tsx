import { SidebarMenu } from './';
import { KeenIcon } from '@/components';

const SidebarContent = () => {
  return (
    <div>
      <div className="scrollable-y-hover mr-4">
        <div className='flex'>
          <label className="input input-sm mb-2">
            <KeenIcon icon="magnifier" />
            <input
              type="text"
              placeholder="Search combo group ..."
              className=''
            />
          </label>
          <button className='bg-[var(--tw-light-active)] border border-gray-400 rounded-md font-semibold text-lg text-gray-600 h-[2rem] w-[2.3rem] ml-2'>
            <KeenIcon icon='add-folder'/>
          </button>
        </div>
        <SidebarMenu />
      </div>
    </div>
  );
};

export { SidebarContent };
