import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: ['name1', 'name2']
    }
    this.search = this.search.bind(this);
  }

  search(term) {
    axios.get(`https://api.github.com/repos/${term}`)
      .then(data => {
        console.log('data: ', data);
      })
      .catch(err => {
        throw Error('error: ', err);
      });
    console.log(`${term} was searched`);
    // TODO
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));