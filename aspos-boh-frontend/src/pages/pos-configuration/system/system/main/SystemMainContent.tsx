import { Fragment } from 'react';

import { IHighlightedPostsItems, MiscHighlightedPosts } from '@/partials/misc';
import { toAbsoluteUrl } from '@/utils';

import { GeneralMain } from './blocks';

const SystemMainContent = () => {

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 lg:gap-7.5">
      <div className="col-span-4">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <GeneralMain />
        </div>
      </div>
    </div>
  );
};

export { SystemMainContent };
