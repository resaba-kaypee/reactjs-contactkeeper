import React from "react";
import RepoItem from "./RepoItem";

function Repos({ repos }) {
  return repos.map(repo => <RepoItem key={repo.id} repo={repo} />);
}

export default Repos;
