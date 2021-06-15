import React, { useEffect } from 'react';
import axios from 'axios';
import { USER_DATA, FOLLOWERS_DATA, REPOS_DATA } from './../mockData';

const GithubContext = React.createContext({});

const GithubContextProvider = ({ children }) => {
  const [githubUser, setGithubUser] = React.useState(USER_DATA);
  const [githubUserFollowers, setUserFollowers] =
    React.useState(FOLLOWERS_DATA);
  const [githubUserRepos, setUserRepos] = React.useState(REPOS_DATA);
  const [githubRateLimit, setGithubRateLimit] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getGithubRateLimit = () => {
    axios
      .get(`${process.env.REACT_APP_GITHUB_ROOT_URL}/rate_limit`)
      .then(
        ({
          data: {
            rate: { remaining },
          },
        }) => {
          if (remaining === 0) {
            setError(true, 'Sorry. you have exceeded your hourly rate limit');
          } else {
            setGithubRateLimit(remaining);
          }
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const searchGithubUser = async (user) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios(
        `${process.env.REACT_APP_GITHUB_ROOT_URL}/users/${user}`
      );
      if (response) {
        setGithubUser(response.data);
        const { login, followers_url } = response.data;

        await Promise.allSettled([
          axios(
            `${process.env.REACT_APP_GITHUB_ROOT_URL}/users/${login}/repos?per_page=100`
          ),
          axios(`${followers_url}?per_page=100`),
        ])
          .then((results) => {
            console.log(results);
            const [repos, followers] = results;
            if (repos.status === 'fulfilled') {
              setUserRepos(repos.value.data);
            }

            if (followers.status === 'fulfilled') {
              setUserFollowers(followers.value.data);
            }
          })
          .catch((error) => console.log(error));
      } else {
        setError(true, 'There is no user with that user name');
      }
    } catch (error) {
      console.log(error);
    }

    getGithubRateLimit();
    setIsLoading(false);
  };

  useEffect(getGithubRateLimit, []);

  return (
    <GithubContext.Provider
      value={{
        githubRateLimit,
        githubUser,
        githubUserFollowers,
        githubUserRepos,
        isLoading,
        error,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubContextProvider };
