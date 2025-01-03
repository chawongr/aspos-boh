import { Fragment } from 'react';

import { Container } from '@/components/container';

import {
  Toolbar,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
  ToolbarActions
} from '@/partials/toolbar';

import { HqSyncDownContent } from '.';
import { useLayout } from '@/providers';

const HqSyncDownPage = () => {
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
                  <span className="text-md text-gray-600">HQ sync down management</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-primary">
                Add
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <HqSyncDownContent/>
      </Container>
    </Fragment>
  );
};

export { HqSyncDownPage };
