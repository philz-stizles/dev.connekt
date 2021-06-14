import React from 'react';
import { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CustomInput } from '..';
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
      [name]: name === 'current' ? !value : value,
    });
  };

  return (
    <Fragment>
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

        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={handleInputChange}
            />{' '}
            Current Job
          </p>
        </div>

        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={handleInputChange}
            disabled={current}
          />
        </div>

        <CustomInput
          type="textarea"
          name="description"
          cols="30"
          rows="5"
          placeholder="Job Description"
          value={description}
          onChange={handleInputChange}
        />

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default ExperienceForm;
