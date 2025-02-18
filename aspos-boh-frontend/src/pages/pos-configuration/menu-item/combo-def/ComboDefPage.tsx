import { Fragment } from 'react';

import { Container } from '@/components/container';

import {
  Toolbar,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { ComboDefContent } from '.';
import { useLayout } from '@/providers';

const ComboDefPage = () => {
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
                  <span className="text-md text-gray-600">Combo definition management</span>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
          </Toolbar>
        </Container>
      )}

      <Container>
        <ComboDefContent/>
      </Container>
    </Fragment>
  );
};

export { ComboDefPage };
