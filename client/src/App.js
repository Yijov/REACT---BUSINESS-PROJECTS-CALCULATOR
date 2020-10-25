//Modules
import React, { useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { CurrentProjectContextProvider } from "./context/CurrentProjectContext";
import { AchivedProjectsContextProvider } from "./context/AchivedProjectsContext";
import "./css/App.css";

//Pages and Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import Planer from "./pages/Planer";
import BudgetPage from "./pages/BudgetPage";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Instructions from "./pages/Instructions";

function App() {
  const nodeRef = useRef(null);
  return (
    <div className="App">
      <CurrentProjectContextProvider>
        <AchivedProjectsContextProvider>
          <Header />
          <Nav />

          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={1300}
                  ref={nodeRef}
                >
                  <Switch>
                    <Route path={"/"} exact component={Dashboard} />
                    <Route path={"/project"} component={Project} />
                    <Route path={"/planer"} component={Planer} />
                    <Route path={"/budget"} component={BudgetPage} />
                    <Route path={"/settings"} component={Settings} />
                    <Route path={"/instructions"} component={Instructions} />
                    <Route path={"/about"} component={About} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </AchivedProjectsContextProvider>
      </CurrentProjectContextProvider>
    </div>
  );
}

export default App;
