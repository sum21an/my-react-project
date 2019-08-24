import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';

const SamplePage = withRouter(
  lazy(() => import('../components/Home')),
);

const CountAsString = withRouter(
  lazy(() => import('../components/Project/CountAsString')),
);

const ViewPortHeightWidth = withRouter(
  lazy(() => import('../components/Practice/ViewPortHeightWidth')),
);

const Accordion = withRouter(
  lazy(() => import('../components/Practice/Accordion')),
);

const CardEmoji = withRouter(
  lazy(() => import('../components/Practice/CardEmoji')),
);

const ListCard = withRouter(
  lazy(() => import('../components/Practice/ListCard')),
);

const LabelInput = withRouter(
  lazy(() => import('../components/Practice/LabelInput'))
);

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback='Suman'>
        <Switch>
          <Route exact path="/" component={SamplePage} />
          <Route exact path="/count-as-string" component={CountAsString} />
          <Route exact path="/viewport-height-width" component={ViewPortHeightWidth} />
          <Route exact path="/accordion" component={Accordion} />
          <Route exact path="/card-emoji" component={CardEmoji} />
          <Route exact path="/list-card" component={ListCard} />
          <Route exact path="/label-input" component={LabelInput} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
export default MyRouter;
