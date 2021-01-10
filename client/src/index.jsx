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
      repos: []
    }
    this.search = this.search.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  getRepos() {
    axios.get(`/repos`)
      .then(result => {
        this.setState({
          repos: result.data
        })
      })
      .catch(err => {
        console.log('err: ', err.message);
      });
  }

  search(term) {
    axios.post(`/repos`, { name: term })
      .then(result => {
        console.log('result: ', result.data);
      })
      .catch(err => {
        throw Error('error: ', err);
      });
    console.log(`${term} was searched`);
  }

  componentDidMount() {
    this.getRepos();
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