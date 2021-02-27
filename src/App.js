import { Route, Switch } from "react-router-dom";
import { routes } from "./routing/router";

function App() {
  return (
    <div>
      <Switch>
        {routes.map((rt, rtInd) => {
          return (
            rtInd===0?
            <Route key={rtInd} exact path={rt.path} component={rt.component} />:
            <Route key={rtInd} path={rt.path} component={rt.component} />
          )
        })}
      </Switch>
    </div>
  );
}

export default App;
