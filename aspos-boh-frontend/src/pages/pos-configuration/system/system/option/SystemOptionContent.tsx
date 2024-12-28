import { Fragment } from 'react';

import { IHighlightedPostsItems, MiscHighlightedPosts } from '@/partials/misc';
import { toAbsoluteUrl } from '@/utils';

import { GeneralOption } from './blocks';

const SystemOptionContent = () => {
  const posts: IHighlightedPostsItems = [
    {
      icon: 'users',
      title: 'Expand Your Network: Seamless Friend Invitation System',
      summary:
        'Invite colleagues to join and collaborate with ease using our streamlined invitation process. Share the experience and grow your professional network effortlessly.',
      path: '#'
    },
    {
      icon: 'message-add',
      title: 'Collaboration Growth: Refer Peers with Custom Invites',
      summary:
        "Enhance your team's capabilities by inviting peers directly through personalized invitations. Strengthen your projects by collaborating with trusted professionals.",
      path: '#'
    },
    {
      icon: 'address-book',
      title: 'Team Building: Easy Referral of Professional Contacts',
      summary:
        "Strengthen your team's dynamics by inviting industry friends to collaborate. Use our intuitive referral system to bring in expertise and foster collaboration.",
      path: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <GeneralOption />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <MiscHighlightedPosts posts={posts} />
        </div>
      </div>
    </div>
  );
};

export { SystemOptionContent };
