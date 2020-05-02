// Class component: chỉ là 1 class thông thường
import React from 'react';
import {Component} from 'react';
import './demo.css';
 class DemoComponent extends Component{
    render(){
        return(
            <h1 className='title'>My name is Cheng</h1>
        );
    }
}
// export const MyGirlName = "<h1>Le thi ngoc hang</h1>";

// import vào không cần đúng tên
export default DemoComponent;
 