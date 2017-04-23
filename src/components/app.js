import React, {Component} from 'react';
import Table from '../containers/tables'
import App_Bar from './app_bar.js'

export default class App extends Component{
    render(){
        return(
            <div>
                <App_Bar/>
                <Table/>
            </div>
        )
    }
}