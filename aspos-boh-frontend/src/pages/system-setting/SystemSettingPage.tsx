import { Fragment } from 'react';

import { Container } from '@/components/container';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle
} from '@/partials/toolbar';

import { SystemSettingContent } from '.';
import { useLayout } from '@/providers';

const SystemSettingPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>

      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>Central Hub for Personal Customization</ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <div className="btn btn-sm btn-primary">
                Save
              </div>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}

      <Container>
        <SystemSettingContent />
      </Container>
    </Fragment>
  );
};

export { SystemSettingPage };
