import React from 'react';


import DataBox from './Components/DataBox'
import Badge from "react-bootstrap/Badge";
import data from './data.json';


import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
// Object.key(data) = "1", "2", "3" etc.
      data: Object.values(data)
    }

    this.sortBy = this.sortBy.bind(this)
  }

  sortBy() {
    this.setState({
      data: Object.values(data).sort(function(a, b) {
        if(a.date === b.date) {
          // Schedules[0][0] - Array of Array -> Access to the starting time of the delivery schedule
          return parseInt(a.schedules[0][0]) - parseInt(b.schedules[0][0]);
        } else {
          return (
            // Convert the string to numbers to appropriately compare
          parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
        );
        }  
      })
    })
  }


  render() {

    return (
      <div className="container">
        <h1>Vonzu Tech Challenge - <Badge variant="dark">Valentin Müller</Badge></h1>
        <p>As a User by clicking on the ID's, I can access the belonging information to that practicular Expedition.</p>
        <p>As a User by clicking on the 'Sort' button, I can sort the expeditions by ascending date. When the date matches with another, the function sorts in ascending order based on the delivery schedule starting date.</p>
        <DataBox 
        data={this.state.data} 
        sortBy={this.sortBy}
        />
      </div>
    );
  }
}

export default App;
