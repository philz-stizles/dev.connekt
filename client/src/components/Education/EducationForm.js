import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// Redux actions
import { useDispatch } from 'react-redux';
import { addEducation } from './../../store/actions/profileActions';

// Custom components
import { CustomInput } from '..';

const EducationForm = ({ initialState }) => {
  const [formData, setFormData] = React.useState(
    initialState || {
      school: '',
      degree: '',
      fieldOfStudy: '',
      from: '',
      to: '',
      current: false,
      description: '',
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
      [name]: name === 'current' ? !value : value,
    });
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addEducation(formData, history));
        }}
      >
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

        <div className="input-wrapper">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-wrapper">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={handleInputChange}
            />{' '}
            Current School
          </p>
        </div>

        <div className="input-wrapper">
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
          placeholder="Program Description"
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

export default EducationForm;
