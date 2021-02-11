import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Screen2 from '../src/pages/Screen2/index';
import App  from '../../entrega5/src/App';



export default function routes(params) {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/Screen2" component={Screen2} />

            </Switch>
        </BrowserRouter>

    );
    
}