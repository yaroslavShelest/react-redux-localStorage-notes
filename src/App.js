import React, { Fragment } from 'react';

import Title from './components/title/title';
import ToDo from './containers/todo';

const App = () => (
  <Fragment>
    <Title title="Список дел" />
    <ToDo />
  </Fragment>
);

export default App;
