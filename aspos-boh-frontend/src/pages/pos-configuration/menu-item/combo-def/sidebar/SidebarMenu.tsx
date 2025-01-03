import clsx from 'clsx';
import { KeenIcon } from '@/components/keenicons';
import {
  Menu,
  MenuArrow,
  MenuBadge,
  MenuBullet,
  MenuHeading,
  MenuIcon,
  MenuItem,
  MenuLabel,
  MenuLink,
  MenuSub,
  MenuTitle,
  IMenuItem
} from '@/components/menu';
import menuConfig from './sidebarMenuConfig.json';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';



const SidebarMenu = () => {
  const linkPl = 'ps-[10px]';
  const linkPr = 'pe-[10px]';
  const linkPy = 'py-[6px]';
  const itemsGap = 'gap-0.5';
  const subLinkPy = 'py-[8px]';
  const rightOffset = 'me-[-10px]';
  const iconWidth = 'w-[20px]';
  const iconSize = 'text-lg';
  const accordionLinkPl = 'ps-[10px]';
  const accordionLinkGap = [
    'gap-[10px]',
    'gap-[14px]',
    'gap-[5px]',
    'gap-[5px]',
    'gap-[5px]',
    'gap-[5px]',
  ];
  const accordionPl = [
    'ps-[10px]',
    'ps-[22px]',
    'ps-[22px]',
    'ps-[22px]',
    'ps-[22px]',
    'ps-[22px]',
  ];
  const accordionBorderLeft = [
    'before:start-[20px]',
    'before:start-[32px]',
    'before:start-[32px]',
    'before:start-[32px]',
    'before:start-[32px]',
  ];

  const buildMenuHeading = (item: IMenuItem, index: number) => {
    return (
      <MenuItem key={index} className="pt-2.25 pb-px">
        <MenuHeading
          className={clsx('uppercase text-2sm font-medium text-gray-500', linkPl, linkPr)}
        >
          {item.name}
        </MenuHeading>
      </MenuItem>
    );
  };


  const buildMenu = (items: IMenuItem[]) => {
    return items.map((item, index) => {
      if (item.heading) {
        return buildMenuHeading(item, index);
      } else {
        return buildMenuItemRoot(item, index); // Treat all items as normal
      }
    });
  };

  const buildMenuArrow = () => {
    return (
      <MenuArrow className={clsx('text-gray-400 w-[20px] shrink-0 justify-end me-[-10px]')}>
        {/* Display a "plus" icon when the menu is collapsed */}
        <KeenIcon icon="plus" className="text-2xs menu-item-show:hidden" />
        {/* Display a "minus" icon when the menu is expanded */}
        <KeenIcon icon="minus" className="text-2xs hidden menu-item-show:inline-flex" />
      </MenuArrow>
    );
  };

  const buildMenuBullet = () => {
    return (
      <MenuBullet className="flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary" />
    );
  };


  const buildMenuItemChild = (
    item: IMenuItem,
    key: string,
    level: number = 0
  ) => {
    if (item.children) {
      return (
        <MenuItem key={key}>
          <MenuLink
            className={clsx(
              'border border-transparent grow cursor-pointer',
              accordionLinkGap[level],
              accordionLinkPl,
              linkPr,
              subLinkPy
            )}
          >
            {buildMenuBullet()}
            <MenuTitle className="text-2sm font-normal menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
              {item.name}
            </MenuTitle>
            {buildMenuArrow()}
          </MenuLink>
          <MenuSub
            className={clsx(
              'relative before:absolute before:top-0 before:bottom-0 before:border-s before:border-[#c4d6fb]',
              itemsGap,
              accordionBorderLeft[level],
              accordionPl[level]
            )}
          >
            {buildMenuItemChildren(item.children, key, level + 1)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={key}>
          <MenuLink
            path={item.path}
            className={clsx(
              'border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg',
              accordionLinkGap[level],
              accordionLinkPl,
              linkPr,
              subLinkPy
            )}
          >
            {buildMenuBullet()}
            <MenuTitle className="text-2sm font-normal menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              {item.name}
            </MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  };


  const buildMenuItemChildren = (
    items: IMenuItem[],
    parentIndex: number | string,
    level: number = 0
  ) => {
    return items.map((item, index) => {
      if (item.disabled) {
        return buildMenuItemChildDisabled(item, `${parentIndex}-${index}`, level);
      } else {
        return buildMenuItemChild(item, `${parentIndex}-${index}`, level);
      }
    });
  };

  const buildMenuItemChildDisabled = (
    item: IMenuItem,
    key: string,
    level: number = 0
  ) => {
    return (
      <MenuItem key={key}>
        <MenuLabel
          className={clsx(
            'border border-transparent items-center grow cursor-not-allowed text-gray-400',
            accordionLinkGap[level],
            accordionLinkPl,
            linkPr,
            subLinkPy
          )}
        >
          {buildMenuBullet()}
          <MenuTitle className="text-2sm font-normal">{item.name}</MenuTitle>
        </MenuLabel>
      </MenuItem>
    );
  };


  const buildMenuItemRoot = (item: IMenuItem, index: number) => {
    const [showComboDot, setShowComboDot] = useState(false);

    const toggleComboDot = () => {
      setShowComboDot((prev) => !prev);
    };

    if (item.children) {
      return (
        <MenuItem key={index} className="relative">
          <MenuLink
            className={clsx(
              'flex items-center grow cursor-pointer border border-transparent mr-7 ',
              accordionLinkGap[0],
              linkPl,
              linkPr,
              linkPy,
            )}
          >
            <MenuIcon className={clsx('items-start', iconWidth)}>
              {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
            </MenuIcon>
            <MenuTitle className="text-sm font-medium menu-item-active:text-gray-500 menu-link-hover:!text-primary">
              {item.name}
            </MenuTitle>
            {buildMenuArrow()}
          </MenuLink>

          <span
            className="absolute right-0 mt-2 cursor-pointer"
            onClick={toggleComboDot}
          >
            <KeenIcon icon="dots-vertical" />
          </span>

          <OutsideClickHandler
            onOutsideClick={() => {
              setShowComboDot(false);
            }}
          >
            {showComboDot && (
              <div className="absolute z-10  right-0 bg-gray-50 px-4 py-2 rounded-lg border border-gray-300 divide-y divide-gray-300 ">
                <button className='flex gap-2 w-full pb-2'>
                  <div className='text-blue-600 text-xl'><KeenIcon icon="add-files" /></div>
                  <div className='text-md my-auto text-blue-600'>Add Menu Item</div>
                </button>
                <button className='flex gap-2 w-full pt-2'>
                  <div className='text-red-500 text-xl'><KeenIcon icon="delete-folder" /></div>
                  <div className='text-md my-auto text-red-500'>Combo Definition</div>
                </button>
              </div>
            )}
          </OutsideClickHandler>

          <MenuSub
            className={clsx(
              'relative before:absolute before:top-0 before:bottom-0 before:border-s before:border-[#c4d6fb]',
              itemsGap,
              accordionBorderLeft[0],
              accordionPl[0],
            )}
          >
            {buildMenuItemChildren(item.children, index, 1)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <MenuLink
            path={item.path}
            className={clsx(
              'border border-transparent menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg',
              accordionLinkGap[0],
              linkPy,
              linkPl,
              linkPr,
            )}
          >
            <MenuIcon
              className={clsx(
                'items-start text-gray-700 dark:text-gray-500 menu-item-active:text-primary menu-link-hover:!text-primary',
                iconWidth,
              )}
            >
              {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
            </MenuIcon>
            <MenuTitle className="text-sm font-medium text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
              {item.name}
            </MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  };

  return (
    <Menu highlight={true} multipleExpand={false} className={clsx('flex flex-col grow', itemsGap)}>
      {menuConfig.menuItems && buildMenu(menuConfig.menuItems)} {/* Use JSON Data */}
    </Menu>
  );
};

export { SidebarMenu };
