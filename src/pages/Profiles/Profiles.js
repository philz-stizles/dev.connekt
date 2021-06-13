import React from 'react';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';
import User from './components/User/User';
import Repos from './components/Repos/Repos';
import Info from './components/UserInfo/UserInfo';
import { GithubContext } from '../../context/githubContext';

const Profiles = (props) => {
  const githubContext = React.useContext(GithubContext);
  console.log(githubContext);
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Profiles;
