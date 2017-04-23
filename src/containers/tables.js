import React,{Component} from 'react';
import {recentTop, alltimeTop} from '../actions/action_creator';
import {connect} from 'react-redux';

class Table extends Component{
    constructor(props){
        super(props);

    this.showData = this.showData.bind(this);
    this.handleRecentClick = this.handleRecentClick.bind(this);
    this.handleAlltimeClick = this.handleAlltimeClick.bind(this);
    }

    componentWillMount(){
        this.props.recentTop();
    }

    handleRecentClick(e){
        this.props.recentTop();
        console.log('Sorting by recent');
    }

    handleAlltimeClick(e){
        this.props.alltimeTop();
        console.log('Sorting by alltime');
    }

    showData(item){
        // return(item.username)
        return(
            <tr key={item.username}>
                <td>
                    <img src={item.img}/>
                    <span id="username">
                    {item.username}
                    </span>
                </td>
                <td>{item.recent}</td>
                <td>{item.alltime}</td>
            </tr>
        )
    }

    render(){
        if(!this.props.data){
            return <div>
                loading...
            </div>
        }

        return(
            <div className="container">
                <table>
                <thead>
                    <tr>
                        <td>Camper</td>
                        <td onClick={this.handleRecentClick} id="recent">Recent</td>
                        <td onClick={this.handleAlltimeClick} id="alltime">All-Time</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(this.showData)}
                </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log("Recent: ",{data: state.recent_top[0]});
    return{data: state.recent_top[0]};
}


export default connect(mapStateToProps,{recentTop, alltimeTop})(Table);