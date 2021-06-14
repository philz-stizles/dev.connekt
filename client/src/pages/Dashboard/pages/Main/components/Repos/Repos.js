import React from 'react';
import { Doughnut2D, Pie2D } from '../../../../../../components/Charts';
// import ExampleChart from '../../../../components/Charts/ExampleChart';
import { GithubContext } from '../../../../../../context/githubContext';
import { ReposWrapper } from './Repos.styles';

const Repos = () => {
  const { githubUserRepos } = React.useContext(GithubContext);

  // STEP 2 - Chart Data
  let languages = githubUserRepos.reduce((acc, repo) => {
    const { language, stargazers_count } = repo;
    if (!language) return acc;
    if (!acc[language]) {
      acc[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      acc[language] = {
        ...acc[language],
        value: acc[language].value + 1,
        stars: acc[language].stars + stargazers_count,
      };
    }

    return acc;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => ({ ...item, value: item.stars }))
    .slice(0, 5);

  return (
    <ReposWrapper>
      {/*<ExampleChart data={chartData} /> */}
      <Pie2D data={mostUsed} />
      <Doughnut2D data={mostPopular} />
    </ReposWrapper>
  );
};

export default Repos;
