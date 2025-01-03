import { type TMenuConfig } from '@/components/menu';

export const MENU_SIDEBAR: TMenuConfig = [
  {
    title: 'Dashboards',
    icon: 'element-11',
    children: [
      {
        title: 'Sales Enquiry',
        path: '/'
      },
      // {
      //   title: 'Cashier Enquiry',
      //   path: '/dashboard/cashier-enquiry'
      // },
      // {
      //   title: 'Major Enquiry',
      //   path: '/dashboard/major-enquiry'
      // },
      {
        title: 'Inventory Enquiry',
        path: '/dashboard/inventory-enquiry'
      },
    ]
  },
  {
    title: 'POS Configuration',
    icon: 'setting-2',
    children: [
      {
        title: 'Menu Item',
        path: '/pos-config/menu-item',
        children: [
          {
            title: 'Combo Group',
            path: '/pos-config/menu-item/combo-group'
          },
          {
            title: 'Combo Definition',
            path: '/pos-config/menu-item/combo-def'
          },
        ]
      },
      {
        title: 'Major Group',
        path: '/pos-config/major-group'
      },
      {
        title: 'Family Group',
        path: '/pos-config/family-group'
      },
      // {
      //   title: 'Device',
      //   children: [
      //     {
      //       title: 'PC Table',
      //       path: '/pos-config/device/pc-table'
      //     },
      //     {
      //       title: 'Printer',
      //       path: '/pos-config/device/printer'
      //     },
      //     {
      //       title: 'Kitchen Printer',
      //       path: '/pos-config/device/kitchen-printer'
      //     },
      //   ]
      // },
      {
        title: 'System',
        children: [
          {
            title: 'System',
            path: '/pos-config/system',
          },
          {
            title: 'Store',
            children: [
              {
                title: 'Hq Sync Down',
                path: '/pos-config/system/store/hqSync'
              },
            ]
          },
        ]
      },
      // {
      //   title: 'More',
      //   collapse: true,
      //   collapseTitle: 'Show less',
      //   expandTitle: 'Show 1 more',
      //   dropdownProps: {
      //     placement: 'right-start'
      //   },
      //   children: [
      //     {
      //       title: 'Invite a Friend',
      //       path: '/account/invite-a-friend'
      //     },

      //   ]
      // }
    ]
  },
  // {
  //   title: 'System Setting',
  //   icon: 'users',
  //   children: [
  //     {
  //       title: 'System Setting',
  //       path: '/system-setting',
  //     }
  //   ],
  // },
  // {
  //   title: 'Inventory Management',
  //   icon: 'setting-2',
  //   children: [
  //     {
  //       title: 'Goods Receipt',
  //       path: '/inventory-manage/goods-receipt'
  //     },
  //     {
  //       title: 'Item Type',
  //       path: '/inventory-manage/item-type'
  //     },
  //     {
  //       title: 'Items',
  //       path: '/inventory-manage/items'
  //     },
  //     {
  //       title: 'Stock Count',
  //       path: '/inventory-manage/stock-count'
  //     },{
  //       title: 'Supplier',
  //       path: '/inventory-manage/supplier'
  //     },
  //   ]
  // },
  {
    title: 'Support',
    icon: 'support',
    children: [
      {
        title: 'User',
        path: '/support/user'
      },
    ]
  },
  {
    title: 'Logs',
    icon: 'notepad',
    path: '/logs'
  },
  {
    title: 'Help',
    icon: 'question-2',
    path: '/help'
  },
  {
    title: 'Line OA',
    icon: 'messages',
    path: '/line-oa'
  },
  // {
  //   title: 'Network',
  //   icon: 'users',
  //   children: [
  //     {
  //       title: 'User Table',
  //       children: [
  //         {
  //           title: 'Team Crew',
  //           path: '/network/user-table/team-crew'
  //         },
  //         {
  //           title: 'App Roster',
  //           path: '/network/user-table/app-roster'
  //         },
  //         {
  //           title: 'Market Authors',
  //           path: '/network/user-table/market-authors'
  //         },
  //         {
  //           title: 'SaaS Users',
  //           path: '/network/user-table/saas-users'
  //         },
  //         {
  //           title: 'Store Clients',
  //           path: '/network/user-table/store-clients'
  //         },
  //         {
  //           title: 'Visitors',
  //           path: '/network/user-table/visitors'
  //         }
  //       ]
  //     },
  //   ]
  // },
  
];

export const MENU_MEGA: TMenuConfig = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Profiles',
    children: [
      {
        title: 'Profiles',
        children: [
          {
            children: [
              {
                title: 'Default',
                icon: 'badge',
                path: '/public-profile/profiles/default'
              },
              {
                title: 'Creator',
                icon: 'coffee',
                path: '/public-profile/profiles/creator'
              },
              {
                title: 'Company',
                icon: 'abstract-41',
                path: '/public-profile/profiles/company'
              },
              {
                title: 'NFT',
                icon: 'bitcoin',
                path: '/public-profile/profiles/nft'
              },
              {
                title: 'Blogger',
                icon: 'message-text',
                path: '/public-profile/profiles/blogger'
              },
              {
                title: 'CRM',
                icon: 'devices',
                path: '/public-profile/profiles/crm'
              },
              {
                title: 'Gamer',
                icon: 'ghost',
                path: '/public-profile/profiles/gamer'
              }
            ]
          },
          {
            children: [
              {
                title: 'Feeds',
                icon: 'book',
                path: '/public-profile/profiles/feeds'
              },
              {
                title: 'Plain',
                icon: 'files',
                path: '/public-profile/profiles/plain'
              },
              {
                title: 'Modal',
                icon: 'mouse-square',
                path: '/public-profile/profiles/modal'
              },
              {
                title: 'Freelancer',
                icon: 'financial-schedule',
                path: '#',
                disabled: true
              },
              {
                title: 'Developer',
                icon: 'technology-4',
                path: '#',
                disabled: true
              },
              {
                title: 'Team',
                icon: 'users',
                path: '#',
                disabled: true
              },
              {
                title: 'Events',
                icon: 'calendar-tick',
                path: '#',
                disabled: true
              }
            ]
          }
        ]
      },
      {
        title: 'Other Pages',
        children: [
          {
            children: [
             
              {
                title: 'Documents',
                icon: 'document',
                path: '#',
                disabled: true
              },
              {
                title: 'Badges',
                icon: 'award',
                path: '#',
                disabled: true
              },
              {
                title: 'Awards',
                icon: 'gift',
                path: '#',
                disabled: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'My Account',
    children: [
      {
        title: 'General Pages',
        children: [
          { title: 'Invite a Friend', icon: 'user-tick', path: '/account/invite-a-friend' },
          { title: 'Brand', icon: 'verify', disabled: true },
          { title: 'Get Paid', icon: 'euro', disabled: true }
        ]
      },
      {
        title: 'Other pages',
        children: [
          {
            title: 'Account Home',
            children: [
              { title: 'User Profile', path: '/account/home/user-profile' },
              { title: 'Plain', path: '/account/home/settings-plain' },
            ]
          },
          {
            title: 'Security',
            children: [
              { title: 'Backup & Recovery', path: '/account/security/backup-and-recovery' },
              { title: 'Security Log', path: '/account/security/security-log' }
            ]
          },
          {
            title: 'Other Pages',
            children: [
              { title: 'Invite a Friend', path: '/account/invite-a-friend' },
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Network',
    children: [
      {
        title: 'General Pages',
        children: [
          { title: 'Colleagues', icon: 'users', path: '#', disabled: true },
          { title: 'Donators', icon: 'heart', path: '#', disabled: true },
          { title: 'Leads', icon: 'abstract-21', path: '#', disabled: true }
        ]
      },
      {
        title: 'Other pages',
        children: [
          {
            title: 'User Base',
            badge: 'Datatables',
            children: [
              { title: 'Team Crew', path: '/network/user-table/team-crew' },
              { title: 'App Roster', path: '/network/user-table/app-roster' },
              { title: 'Market Authors', path: '/network/user-table/market-authors' },
              { title: 'SaaS Users', path: '/network/user-table/saas-users' },
              { title: 'Store Clients', path: '/network/user-table/store-clients' },
              { title: 'Visitors', path: '/network/user-table/visitors' }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Authentication',
    children: [
      {
        title: 'General pages',
        children: [
          {
            title: 'Branded Layout',
            children: [
              { title: 'Sign In', path: '/auth/login' },
            ]
          }
        ]
      },
      {
        title: 'Other Pages',
        children: [
          { title: 'Error 404', icon: 'message-question', path: '/error/404' },
          { title: 'Error 500', icon: 'information', path: '/error/500' }
        ]
      }
    ]
  },
];

export const MENU_ROOT: TMenuConfig = [
  {
    title: 'Account',
    icon: 'setting-2',
    rootPath: '/account/',
    path: '/',
    childrenIndex: 3
  },
  {
    title: 'Network',
    icon: 'users',
    rootPath: '/network/',
    path: 'network/get-started',
    childrenIndex: 4
  },
  {
    title: 'Authentication',
    icon: 'security-user',
    rootPath: '/authentication/',
    path: 'authentication/get-started',
    childrenIndex: 5
  }
];
