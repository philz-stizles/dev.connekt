import React from 'react';
import { GoDashboard } from 'react-icons/go';
import { BsBag } from 'react-icons/bs';
import {
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineQuestionCircle,
  AiOutlinePicture,
  AiOutlineBook,
} from 'react-icons/ai';
import { MdPermContactCalendar } from 'react-icons/md';
import Nav from '../../components/Nav/Nav';
import SideNav from '../../components/SideNav/SideNav';
import { useDispatch } from 'react-redux';
import { setActiveMenuItem } from '../../redux/sidebar/sidebarActions';
import { Route, Switch } from 'react-router-dom';

// Nested pages => NESTED ROUTING
import Main from './pages/Main/Main';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
import QuizBuilder from './pages/QuizBuilder/QuizBuilder';
import StockPhotos from './pages/StockPhotos/StockPhotos';
import Projects from './pages/Projects/Projects';

// Styled Components
import { DashboardWrapper, ContentWrapper } from './Dashboard.styles';

const menuBlueprint = [
  {
    id: 'mng',
    items: [
      {
        id: '/dashboard',
        icon: <GoDashboard />,
        text: 'Dashboard',
      },
      {
        id: '/dashboard/developers',
        icon: <MdPermContactCalendar />,
        text: ' Developers',
      },
      {
        id: '/dashboard/contact',
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
        id: '/dashboard/quiz-builder',
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

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Nav />
      <main>
        <SideNav menuBlueprint={menuBlueprint} />
        <ContentWrapper>
          <Switch>
            <Route exact path="/dashboard" component={Main} />
            <Route exact path="/dashboard/contact" component={Contact} />
            <Route exact path="/dashboard/experience" component={Experience} />
            <Route exact path="/dashboard/education" component={Education} />
            <Route exact path="/dashboard/projects" component={Projects} />
            <Route
              exact
              path="/dashboard/quiz-builder"
              component={QuizBuilder}
            />
            <Route
              exact
              path="/dashboard/stock-photos"
              component={StockPhotos}
            />
          </Switch>
        </ContentWrapper>
      </main>
    </DashboardWrapper>
  );
};

export default Dashboard;
