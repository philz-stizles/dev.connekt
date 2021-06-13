import React from 'react';
import { GoRepo, GoGist, GoDashboard } from 'react-icons/go';
import { BsBag } from 'react-icons/bs';
import {
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineQuestionCircle,
  AiOutlinePicture,
  AiOutlineBook,
} from 'react-icons/ai';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { MdPermContactCalendar } from 'react-icons/md';
import Nav from '../../components/Nav/Nav';
import { GithubContext } from '../../context/githubContext';
import StatCard from '../../components/StatCard/StatCard';
import { DashboardWrapper } from './Dashboard.styles';
import SideNav from '../../components/SideNav/SideNav';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenuItem } from '../../redux/sidebar/sidebarActions';
import UserInfo from './components/UserInfo/UserInfo';
import FollowersInfo from './components/FollowersInfo/FollowersInfo';
import Repos from './components/Repos/Repos';

const menuBlueprint = [
  {
    id: 'mng',
    items: [
      {
        id: '/admin/dashboard',
        icon: <GoDashboard />,
        text: 'Dashboard',
      },
      {
        id: '/admin/categories',
        icon: <MdPermContactCalendar />,
        text: 'Contacts',
      },
      {
        id: '/dashboard/education',
        icon: <AiOutlineBook />,
        text: 'Education',
      },
      {
        id: '/dashboard/experience',
        icon: <BsBag />,
        text: 'Experience',
      },
      {
        id: '/dashboard/projects',
        icon: <AiOutlineFundProjectionScreen />,
        text: 'Projects',
      },
      {
        id: '/dashboard/quiz',
        icon: <AiOutlineQuestionCircle />,
        text: 'Quiz Builder',
      },
      {
        id: '/dashboard/stock-photos',
        icon: <AiOutlinePicture />,
        text: 'Stock Photos',
      },
    ],
  },
  {
    id: 'settings',
    items: [
      { id: '/dashboard/profile', icon: <AiOutlineUser />, text: 'Profile' },
      {
        id: '/dashboard/settings',
        icon: <AiOutlineSetting />,
        text: 'Settings',
      },
    ],
  },
];

const Dashboard = (props) => {
  const githubContext = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } =
    githubContext.githubUser;

  const { activeMenuItem } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  let mainContent;

  React.useEffect(() => {
    const stringifiedActiveMenuItem = localStorage.getItem('activeMenuItem');
    if (stringifiedActiveMenuItem) {
      const parsedActiveMenuItem = JSON.parse(stringifiedActiveMenuItem);
      if (parsedActiveMenuItem) {
        dispatch(setActiveMenuItem(parsedActiveMenuItem));
      } else {
        dispatch(setActiveMenuItem(['/admin/dashboard']));
      }
    } else {
      dispatch(setActiveMenuItem(['/admin/dashboard']));
    }
  }, []);

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
  return (
    <DashboardWrapper>
      <Nav />
      <main>
        <SideNav menuBlueprint={menuBlueprint} />
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
      </main>
    </DashboardWrapper>
  );
};

export default Dashboard;
