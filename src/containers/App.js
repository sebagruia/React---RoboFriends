import React, {Component} from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {setSearchField }from '../actions';
import './App.css'; 

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispachToProps = (dispach)=>{
   return{
    onSearchChange: (event) =>dispach(setSearchField(event.target.value))
   } 
} 

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));

    }


    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;

        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());

     });

     if(this.state.robots.length===0){
        return <h1>Loading</h1>
     }else{
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