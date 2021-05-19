import { Switch, Route } from "react-router-dom";
import Slavka from './slavka';
import Verca from './verca';
import Contact from './contact';
import Home from './home';
import NoMatch from './noMatch';

const MainContent = () => {

        return (
            <Switch>
                <Route exact path={`/slavka`}>
                    <Slavka />
                </Route>
                <Route exact path={`/verca`}>
                    <Verca />
                </Route>
                <Route exact path={`/contact`}>
                    <Contact />
                </Route>
                <Route exact path={`/`}>
                    <Home />
                </Route>
                <Route component={NoMatch} />
            </Switch>
        );

}

export default MainContent;
