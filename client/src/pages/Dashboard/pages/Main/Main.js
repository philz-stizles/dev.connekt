import React from 'react';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { GoRepo, GoGist } from 'react-icons/go';
import StatCard from '../../../../components/StatCard/StatCard';
import UserInfo from './components/UserInfo/UserInfo';
import FollowersInfo from './components/FollowersInfo/FollowersInfo';
import Repos from './components/Repos/Repos';
import { GithubContext } from '../../../../context/githubContext';

const Main = () => {
  const githubContext = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } =
    githubContext.githubUser;
  const statItems = [
    {
      id: 1,
      color: 'pink',
      icon: <GoRepo />,
      label: 'repos',
      stat: public_repos,
    },
    {
      id: 2,
      color: 'green',
      icon: <FiUsers />,
      label: 'following',
      stat: following,
    },
    {
      id: 3,
      color: 'purple',
      icon: <FiUserPlus />,
      label: 'followers',
      stat: followers,
    },
    {
      id: 4,
      color: 'yellow',
      icon: <GoGist />,
      label: 'gists',
      stat: public_gists,
    },
  ];

  // if (githubContext.isLoading) {
  //   return;
  // }

  return (
    <div>
      <section className="stat-grid">
        {statItems.map(({ id, ...rest }) => (
          <StatCard key={id} {...rest} />
        ))}
      </section>
      <section className="user-grid">
        <UserInfo />
        <FollowersInfo />
      </section>
      <Repos />
    </div>
  );
};

export default Main;
