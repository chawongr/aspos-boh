import { Fragment } from 'react';

import { Container } from '@/components/container';

import {
  Toolbar,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { ItemTypeContent } from '.';
import { useLayout } from '@/providers';

const ItemTypePage = () => {
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
                  <span className="text-md text-gray-600"></span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
          </Toolbar>
        </Container>
      )}

      <Container>
        <ItemTypeContent/>
      </Container>
    </Fragment>
  );
};

export { ItemTypePage };
