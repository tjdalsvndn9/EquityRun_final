import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HttpsRedirect from 'react-https-redirect';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { offline } from '@redux-offline/redux-offline';
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import {createEpicMiddleware} from 'redux-observable';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';


import reducers from './reducers';
import rootEpic from './epics';
//Page
import HEADER from './components/common/Header/Header';
import HOME from './components/Home/Home';
import LOGIN from './components/Auth/Login/Login'
import SIGNUP from './components/Auth/SignUp/SignUp';
import BILLING from './components/Setting/Billing/Billing';
import SETTINGMEMBERSHIP from './components/Setting/Membership/Membership'
import CONTACT from './components/Setting/Contact/Contact';
import PROFILE from './components/Setting/Profile/Profile';
import RELOGIN from './components/Auth/Relogin/Relogin';
import POSTJOB from './components/Job/PostJob/PostJob';
import FINDJOB from './components/Job/FindJob/FindJob';
import MESSAGE from './components/Message/Message';
//HOC
import REQUIREDAUTH from './components/HOC/RequiredAuth';
import ASKAUTH from './components/HOC/askAuth';
import REQUIREDAUTHANDROLE from './components/HOC/RequiredAuthAndRole';
import 'bootstrap/dist/css/bootstrap.css';


//HOC syntax
const reqAuthContact = ASKAUTH(CONTACT)('/setting/contact')


const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  reducers,
  composeEnhancer(
    applyMiddleware(thunk,middleware,epicMiddleware)
  )
)





ReactDOM.render(
  <Provider store={store}>
     <HttpsRedirect>
    <ConnectedRouter history={history}>
      <div>
        <HEADER/>
        <Switch>
          <Route path='/message' component={MESSAGE}/>
          <Route path='/find-job' component={REQUIREDAUTHANDROLE(FINDJOB)('freelancer')}/>
          <Route path='/post-job' component={REQUIREDAUTHANDROLE(POSTJOB)('entreprener')}/>
          <Route path='/setting/profile' component={REQUIREDAUTH(PROFILE)}/>
          <Route path='/authenticate' component={RELOGIN}/>
          <Route path='/setting/contact-info' component={reqAuthContact}/>
          <Route path='/setting/membership' component={REQUIREDAUTH(SETTINGMEMBERSHIP)}/>
          <Route path='/setting/billing' component={REQUIREDAUTH(BILLING)}/>
          <Route path='/signup' component={SIGNUP}/>
          <Route path='/login' component={LOGIN}/>
          <Route exact path='/' component={HOME}/>
        </Switch>
      </div>
    </ConnectedRouter>
     </HttpsRedirect>
  </Provider>
  , document.getElementById('root'));
