import React from 'react';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { GithubContext } from '../../../../../../context/githubContext';
import DataCard from '../../../../../../components/DataCard/DataCard';
import { UserInfoWrapper } from './UserInfo.styles';

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);

  console.log();
  const {
    name,
    twitter_username,
    bio,
    blog,
    company,
    location,
    avatar_url,
    html_url,
  } = githubUser;

  return (
    <UserInfoWrapper>
      <DataCard label="User">
        <header>
          <img src={avatar_url} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>@{twitter_username || 'john doe'}</p>
          </div>
          <a href={html_url}>follow</a>
        </header>
        <p className="bio">{bio}</p>

        <div className="links">
          <p>
            <MdBusiness /> {company}
          </p>
          <p>
            <MdLocationOn /> {location || 'earth'}
          </p>
          <a href={`https://${blog}`}>
            <MdLink />
            {blog}
          </a>
        </div>
      </DataCard>
    </UserInfoWrapper>
  );
};

export default UserInfo;
