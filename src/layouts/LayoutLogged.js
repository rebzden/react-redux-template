/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import RootRoute from '../routes/RootRoute';

class LayoutLogged extends React.Component {
  render() {
    return (
      <div>
        Logged
        <main>
          <RootRoute/>
        </main>
      </div>
    );
  }
}
export default LayoutLogged;