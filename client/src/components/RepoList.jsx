import React from 'react';

const List = (props) => {
  return (
    <div>
      {props.repos.map((repo, i) => (
        <p key={i}>{repo}</p>
      ))}
    </div>
  )
}

const RepoList = (props) => {
  let repos = [];
  return (
    <div>
      <h4> Repo List Component </h4>
      {props.repos.map((repo, i) => {
        return (
          <div key={i}>
            <List repos={repo.repos} />
          </div>
        )
      })}
    </div>
  )
}

export default RepoList;