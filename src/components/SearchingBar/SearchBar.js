import React from 'react';
import './SearchBar.css';


const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count ',
};
class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
  }
      handleSearch(e){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
      e.preventDefault();
    }

  handleTermChange(e){ //(11)
    this.setState({
      term: e.target.value,
    })
  };
  handleLocationChange(e){ //(11)
    this.setState({
      location: e.target.value,
    })
  };

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  };
    handleSortByChange(sortByOption) {
      this.setState({
        sortBy: sortByOption,
      })
  };
  
    renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
        let sortByOptionValue = sortByOptions[sortByOption];
    return <li key={sortByOptionValue}
    className={this.getSortByClass(sortByOptionValue)}
    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
    >{sortByOption}</li>
    });
    } 
    render () {
        return <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
        <a
        onClick={this.handleSearch}>Let's GOOO!! </a>
        </div>
      </div>
    }
};
export default SearchBar;

