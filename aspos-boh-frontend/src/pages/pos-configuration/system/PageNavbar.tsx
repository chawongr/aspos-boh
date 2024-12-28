import { Container } from '@/components/container';
import { useLayout, useMenus } from '@/providers';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar } from '@/partials/navbar';

const PageNavbar = () => {
  const { getMenuConfig } = useMenus();
  const { currentLayout } = useLayout();
  const menuConfig = getMenuConfig('primary');
  const accountMenuConfig = menuConfig?.['1']?.children;

  // Static menu configuration
  const menuConfig1 = {
    title: 'POS Configuration',
    children: [
      {
        title: 'Main',
        path: '/pos-config/system/system/main',
      },
      {
        title: 'Option',
        path: '/pos-config/system/system/option',
      },
      {
        title: 'Url',
        path: '/pos-config/system/system/url',
      },
    ],
  };

  // Extracting children from the static configuration
  const accountMenuConfig1 = menuConfig1.children;

  if (accountMenuConfig && currentLayout?.name === 'demo1-layout') {
    return (
      <Navbar>
        <Container>
          <NavbarMenu items={accountMenuConfig1} />
        </Container>
      </Navbar>
    );
  } else {
    return <></>;
  }
};

export { PageNavbar };
