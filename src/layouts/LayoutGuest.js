/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import RootRoute from '../routes/RootRoute';

class LayoutGuest extends React.Component {
  render() {
    return (
      <div>
        Guest
        <main>
          <RootRoute/>
        </main>
      </div>
    );
  }
}


export default LayoutGuest;