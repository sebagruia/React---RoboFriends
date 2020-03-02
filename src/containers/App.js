import React, {Component} from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {setSearchField, requestRobots }from '../actions';
import './App.css'; 

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPanding,
        error:state.requestRobots.error
    }
}

const mapDispachToProps = (dispatch)=>{
   return{
    onSearchChange: (event) =>dispatch(setSearchField(event.target.value)),
    onRequestRobots: ()=>dispatch(requestRobots()) 
   } 
} 

class App extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: []
    //     }
    // }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=>response.json())
    //     .then(users=>this.setState({robots:users}));
    // }

    componentDidMount() {
        this.props.onRequestRobots();
    }


    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;

        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());

     });

     if(isPending){
        return <h1>Loading</h1>
     }
     else{
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                <ErrorBoundry>
                    <Cardlist robots={filteredRobots}/>
                </ErrorBoundry>
                </Scroll>

            </div>
        );
     }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(App);