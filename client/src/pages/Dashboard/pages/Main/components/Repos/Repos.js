import React from 'react';
import { Doughnut2D, Pie2D } from '../../../../../../components/Charts';
// import ExampleChart from '../../../../components/Charts/ExampleChart';
import { GithubContext } from '../../../../../../context/githubContext';
import { ReposWrapper } from './Repos.styles';

const Repos = () => {
  const { githubUserRepos } = React.useContext(GithubContext);

  // STEP 2 - Chart Data
  let languages = githubUserRepos.reduce((acc, repo) => {
    const { language } = repo;
    if (!language) return acc;
    if (!acc[language]) {
      acc[language] = { label: language, value: 1 };
    } else {
      acc[language] = { ...acc[language], value: acc[language].value + 1 };
    }

    return acc;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <ReposWrapper>
      {/*<ExampleChart data={chartData} /> */}
      <Pie2D data={languages} />
      <Doughnut2D data={languages} />
    </ReposWrapper>
  );
};

export default Repos;
