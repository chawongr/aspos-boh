import { Fragment } from 'react';

import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { SystemUrlContent } from '.';
import { useLayout } from '@/providers';
import { PageNavbar } from '@/pages/pos-configuration/system';

const SystemUrlPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>

      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              {/* <ToolbarPageTitle /> */}
              <h1 className="text-xl font-medium leading-none text-gray-900">System</h1>
              <ToolbarDescription>System POS Management</ToolbarDescription>
            </ToolbarHeading>
            {/* <ToolbarActions>
              <div className="btn btn-sm btn-primary">
                Save
              </div>
            </ToolbarActions> */}
          </Toolbar>
        </Container>
      )}

      <PageNavbar />

      <Container>
        <SystemUrlContent />
      </Container>
    </Fragment>
  );
};

export { SystemUrlPage };
