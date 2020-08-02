import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component.jsx";
import {SearchBox} from "./components/search-box/search-box.component.jsx";

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchfield: ""
    }

  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  handleChange = e => {
    this.setState({searchfield: e.target.value});
  };

  render(){
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLocaleLowerCase()))
  
    return (
    <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchBox placeholder="search monster" handleChange={this.handleChange} />
    <CardList monsters={filteredMonsters} />
    
    </div>
  );
}
}

export default App;
