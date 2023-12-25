import React, { Component } from 'react';
import './style.scss';
interface Props{}
// function App<Props>() {
//     return (
//         <div className="container">Hello,React!</div>
//     );
// }
class App extends Component<Props>{
    render(){
        return(
            <div className='container'>Hello,React!</div>
        )
    }
}
export default App;
