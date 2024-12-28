import { Fragment } from 'react';

import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarDescription,
  ToolbarHeading,
} from '@/partials/toolbar';

import { SystemOptionContent } from '.';
import { useLayout } from '@/providers';
import { PageNavbar } from '@/pages/pos-configuration/system';

const SystemOptionPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>

      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <h1 className="text-xl font-medium leading-none text-gray-900">System</h1>
              <ToolbarDescription>System POS Management</ToolbarDescription>
            </ToolbarHeading>
          </Toolbar>
        </Container>
      )}

      <PageNavbar />

      <Container>
        <SystemOptionContent />
      </Container>
    </Fragment>
  );
};

export { SystemOptionPage };
