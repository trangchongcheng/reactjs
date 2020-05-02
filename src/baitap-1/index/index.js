import React from 'react';
import {Component} from 'react';
import Header from '../Header/header';
import Content from '../Content/content';
import Sidebar from '../Sidebar/sidebar';
import Footer from '../Footer/footer';
import './index.css'
class Index1 extends Component{
    render(){
        return(
            <div>
                    <Header/>
                <div className="container1">
                    <Content/>
                    <Sidebar/>
                </div>
                    <Footer/>
            </div>
        );
    }
}
export default Index1;