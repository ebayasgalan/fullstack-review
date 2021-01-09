import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map((repo, i) => {
      return <div key={i}>{repo}</div>;
    })}
  </div>
)

export default RepoList;