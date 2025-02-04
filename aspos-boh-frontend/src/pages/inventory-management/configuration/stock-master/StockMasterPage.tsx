import { Fragment } from 'react';

import { Container } from '@/components/container';

import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { StockMasterContent } from '.';
import { useLayout } from '@/providers';

const StockMasterPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                <div className="flex items-center flex-wrap gap-1.5 font-medium">
                  <span className="text-md text-gray-600">Stock Master Management</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            {/* <ToolbarActions>
              <a href="#" className="btn btn-sm btn-primary">
                Save
              </a>
            </ToolbarActions> */}
          </Toolbar>
        </Container>
      )}

      <Container>
        <StockMasterContent/>
      </Container>
    </Fragment>
  );
};

export { StockMasterPage };
