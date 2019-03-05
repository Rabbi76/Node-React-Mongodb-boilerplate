import React from 'react';
import { render } from 'react-dom';

// React Router related
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

// Redux related
import { Provider } from 'react-redux';
import store from './store';

// Containers
import App from './containers/App/App';
import DashboardApp from './containers/App/DashboardApp';

import NotFound from './containers/App/NotFound';
import Home from './containers/Home/Home';
import Dashboard from './containers/Dashboard/Dashboard';


// Styles
import './styles/styles.scss';

render((
  <Provider store={store} >
    <Router>
      <App>
        <Switch>

          <Route exact path="/" component={Home} />

          <DashboardApp>
            <Route path="/dashboard" component={Dashboard} />
          </DashboardApp>

          <Route component={NotFound} />

        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('app'));
