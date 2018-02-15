import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {pNome:'',lNome:'', listPersons: [] };
  }
  getData = () => {
    fetch('http://localhost/api/people')
      .then((response) => response.json())
      .then((responseData) => {
        console.table(responseData);
        this.setState({
          listPersons: responseData
        });
      });
  }
  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 /* addPerson = (event) => {
    event.preventDefault();
    const newObject = {FirstName: this.state.pnome, LastName: this.state.lNome};
    this.setState({
      listPersons: [...this.state.listPersons, newObject]
    });
  }*/

  render() {

    const itemRows = this.state.listPersons.map((item) =>
      <tr key={item.name}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
      </tr>
    );

    return (
      <div>
        <h2>Persons</h2>
        <div>
          <form onSubmit={this.addPerson}>
            First Name:
            <input type="text" name="FirstName" onChange={this.inputChanged} value={this.state.pNome} />
            Last Name:
            <input type="text" name="LastName" onChange={this.inputChanged} value={this.state.lNome} />
            <input type="submit" value="Add" />
          </form>
        </div>

        <button type="button" onClick={this.getData}>CLICK ME</button>
        <table>
          <tbody>
            <tr><th>First Name</th><th>Last NAme</th></tr>
            {itemRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
