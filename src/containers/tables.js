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
        // e.target.className = "box-shadow-inset";
        document.getElementById('recent').classList.add('box-shadow-inset')
        document.getElementById('alltime').classList.remove('box-shadow-inset')
    }

    handleAlltimeClick(e){
        this.props.alltimeTop();
        console.log('Sorting by alltime');
        document.getElementById('alltime').classList.add('box-shadow-inset')
        document.getElementById('recent').classList.remove('box-shadow-inset')
    }

    showData(item){
        // return(item.username)
        //console.log(item)
        let url = `https://www.freecodecamp.com/${item.username}`
        console.log(url)
        return(
            <tr key={item.username}>
                <td>
                    <a href={url} target="_blank">
                        <img src={item.img}/>
                        <span id="username">
                        {item.username}
                        </span>
                    </a>
                </td>
                <td>{item.recent}</td>
                <td>{item.alltime}</td>
            </tr>
        )
    }

    render(){
        if(!this.props.data){
            return <div className="container">
                <table>
                    <thead>
                        <tr>
                            <td id="spinner">Loading..</td>
                        </tr>
                    </thead>
                </table>
            </div>
        }

        return(
            <div className="container">
                <table>
                <thead>
                    <tr>
                        <td>Camper</td>
                        <td onClick={this.handleRecentClick} id="recent" className="box-shadow-inset">Recent</td>
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