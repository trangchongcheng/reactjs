import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DemoComponent, MyGirlName} from './demo/demo';
import Index1 from './baitap-1/index';
import Index from './baitap-2/Index';
// import {Index1} from './baitap-1/index/index'


class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Index1/> */}
        <Index/>
      </div>
    ) 
  }
}

// function App() {
//   return (
//     <div className="App">
     
//     <Demo/>
//     <Demo2/>
//     <Demo3/>
//     </div>
//   );
// }

export default App;
