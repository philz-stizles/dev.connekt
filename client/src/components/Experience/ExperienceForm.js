import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CustomButton, CustomInput } from '..';
import { addExperience } from '../../redux/profile/profileActions';

const ExperienceForm = ({ initialState }) => {
  const [formData, setFormData] = React.useState(
    initialState || {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
    }
  );

  let history = useHistory();

  const { company, title, location, from, to, current, description } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'current' ? !current : value,
    });
  };

  return (
    <FormWrapper>
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <CustomInput
          type="text"
          placeholder="* Job Title"
          name="title"
          value={title}
          onChange={handleInputChange}
          required
        />

        <CustomInput
          type="text"
          placeholder="* Company"
          name="company"
          value={company}
          onChange={handleInputChange}
          required
        />

        <CustomInput
          type="text"
          placeholder="Location"
          name="location"
          value={location}
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
          label="Current Job"
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
          placeholder="Job Description"
          value={description}
          onChange={handleInputChange}
        />

        <CustomButton>Submit</CustomButton>
        <CustomButton outlined>Go back</CustomButton>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  padding: 3rem;
`;

export default ExperienceForm;
