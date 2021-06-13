import React from 'react';
import { USER_DATA, FOLLOWERS_DATA, REPOS_DATA } from './../mockData';

const GithubContext = React.createContext({});

const GithubContextProvider = ({ children }) => {
  const [githubUser, setUser] = React.useState(USER_DATA);
  const [githubUserFollowers, setUserFollowers] =
    React.useState(FOLLOWERS_DATA);
  const [githubUserRepos, setUserRepos] = React.useState(REPOS_DATA);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        githubUserFollowers,
        githubUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubContextProvider };
