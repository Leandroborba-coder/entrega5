import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Screen2 from '../src/pages/Screen2/index';
import Main  from '../../entrega5/src/pages/Main';



export default function routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/Screen2" component={Screen2} />
                

            </Switch>
        </BrowserRouter>

    );
    
}