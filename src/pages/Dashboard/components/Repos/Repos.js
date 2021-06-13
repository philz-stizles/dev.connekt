import React from 'react';
import { Pie2D } from '../../../../components/Charts';
// import ExampleChart from '../../../../components/Charts/ExampleChart';
//import { GithubContext } from '../../../../context/githubContext';
import { ReposWrapper } from './Repos.styles';

const Repos = () => {
  // const { githubUserRepos } = React.useContext(GithubContext);
  // STEP 2 - Chart Data
  const chartData = [
    {
      label: 'Venezuela',
      value: '290',
    },
    {
      label: 'Saudi',
      value: '260',
    },
    {
      label: 'Canada',
      value: '180',
    },
    {
      label: 'Iran',
      value: '140',
    },
    {
      label: 'Russia',
      value: '115',
    },
    {
      label: 'UAE',
      value: '100',
    },
    {
      label: 'US',
      value: '30',
    },
    {
      label: 'China',
      value: '30',
    },
  ];
  return (
    <ReposWrapper>
      {/*<ExampleChart data={chartData} /> */}
      <Pie2D data={chartData} />
    </ReposWrapper>
  );
};

export default Repos;
