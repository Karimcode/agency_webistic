import React from 'react';
import { FormattedMessage } from "react-intl";
import { Switch, Route, useRouteMatch, useLocation} from "react-router-dom";
import CaseList from './CaseList'
import StudyCase from './Data/DisplayCase';

const Works = () => {
  let { path } = useRouteMatch();
  let location = useLocation();

  return (
    <section>
      {location.pathname === '/works' ? 
      <div>
        <h4>
          <FormattedMessage id="works.title" />
        </h4>
        <p>
          <FormattedMessage id="works.paragraph" />
        </p>
      <CaseList />
      </div> 
      : 
      <div>
        <Switch>
          <Route path={`${path}/:studyCaseIndex`}>
            <StudyCase />
          </Route>
        </Switch>
      </div>
      }
    </section>
  );
};

export default Works