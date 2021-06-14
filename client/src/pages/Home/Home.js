import React from 'react';
import { HomeWrapper } from './Home.styles';
import Header from '../../components/Header/Header';
import Features from './components/Features/Features';
import { CustomButton } from '../../components';

const HomePage = (props) => {
  return (
    <HomeWrapper>
      <section>
        <Header />
        <div className="cta">
          <div className="cta-inner">
            <p className="intro">Introducing Wrk</p>
            <h1>Hiring made simple</h1>
            <p className="sub-intro">
              Ramp up your hiring process with a ready-made job board and our
              feature-packed applicant tracking system.
            </p>
            <div className="actions">
              <CustomButton link="" size="large">
                Sign up for free
              </CustomButton>
              <CustomButton link="" size="large" outlined>
                Contact us
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </HomeWrapper>
  );
};

export default HomePage;
