import React, { Component } from 'react';
import './style.scss';
import {renderRoutes} from "react-router-config"
import {BrowserRouter} from 'react-router-dom';
import { allRoutes } from './routes';

interface Props{}
// function App<Props>() {
//     return (
//         <div className="container">Hello,React!</div>
//     );  
// }
class App extends Component<Props>{
    render(){
        return(
            <BrowserRouter>
            {
                renderRoutes(allRoutes)
            }
            </BrowserRouter>
        )
    }
}
export default App;
