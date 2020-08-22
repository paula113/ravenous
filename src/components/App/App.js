import React from 'react';
import logo from '../../../src/logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchingBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Luca Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  review: 90
}

const businesses = [business, business, business, business, business, business]; // our goal is to remove the repetition of components inside of the <BusinessList />

class App extends React.Component {
  searchYelp(term, location, sortBy) {
console.log(`Searching ${term}, ${location}, ${sortBy}`);
  };

  render() {
    return <div className="App">
            <h1>ravenous</h1>
            <SearchBar searchYelp={this.searchYelp}  />
            <BusinessList business={businesses}/>
            </div>
  };
}


export default App;
