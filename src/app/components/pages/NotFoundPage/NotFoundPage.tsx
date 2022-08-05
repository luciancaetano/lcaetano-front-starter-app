import React from 'react';
import { Layout } from 'lens-ui';

function NotFoundPage() {
  return (
    <Layout.Content>
      <div id="NotFoundPage">
        Page Not Found
        <br />
      </div>
    </Layout.Content>
  );
}

export default React.memo(NotFoundPage);
