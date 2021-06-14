import React from 'react';
import { GithubContext } from '../../../../../../context/githubContext';
import DataCard from '../../../../../../components/DataCard/DataCard';
import { FollowersInfoWrapper } from './FollowersInfo.styles';

const FollowersInfo = () => {
  const { githubUserFollowers } = React.useContext(GithubContext);

  return (
    <FollowersInfoWrapper>
      <DataCard label="Followers">
        <div className="followers">
          {githubUserFollowers.map((follower, i) => {
            const { avatar_url: img, login } = follower;
            return (
              <article key={i}>
                <img src={img} alt={login} />
                <div>
                  <h4>{login}</h4>
                </div>
              </article>
            );
          })}
        </div>
      </DataCard>
    </FollowersInfoWrapper>
  );
};

export default FollowersInfo;
