import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Redux actions
import { useDispatch } from 'react-redux';
import { addEducation } from './../../redux/profile/profileActions';

// Custom components
import { CustomButton, CustomInput } from '..';
import styled from 'styled-components';

const EducationForm = ({ initialState, onClick }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [formData, setFormData] = React.useState(
    initialState || {
      school: 'Obafemi Awolowo University',
      degree: 'M sc',
      fieldOfStudy: 'Tech management',
      from: '',
      to: '',
      current: false,
      description: '3 year tech training',
    }
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const { school, degree, fieldOfStudy, from, to, description, current } =
    formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'current' ? !current : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addEducation(getAccessTokenSilently, formData, history));
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          placeholder="* School or Bootcamp"
          name="school"
          value={school}
          onChange={handleInputChange}
          required
        />

        <CustomInput
          type="text"
          placeholder="* Degree or Certificate"
          name="degree"
          value={degree}
          onChange={handleInputChange}
          required
        />

        <CustomInput
          type="text"
          placeholder="Field of Study"
          name="fieldOfStudy"
          value={fieldOfStudy}
          onChange={handleInputChange}
        />

        <CustomInput
          label="From Date"
          type="date"
          name="from"
          value={from}
          onChange={handleInputChange}
        />

        <CustomInput
          label="Current School"
          type="checkbox"
          name="current"
          checked={current}
          value={current}
          onChange={handleInputChange}
        />

        <CustomInput
          label="To Date"
          type="date"
          name="to"
          value={to}
          onChange={handleInputChange}
          disabled={current}
        />

        <CustomInput
          type="textarea"
          name="description"
          cols="30"
          rows="5"
          placeholder="Program Description"
          value={description}
          onChange={handleInputChange}
        />

        <CustomButton>Submit</CustomButton>
        <CustomButton outlined onClick={onClick}>
          Go back
        </CustomButton>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  padding: 3rem;
  background: #fff;
  box-shadow: 0 2px 4px 0 hsla(198, 45%, 10%, 0.12);
`;

export default EducationForm;
