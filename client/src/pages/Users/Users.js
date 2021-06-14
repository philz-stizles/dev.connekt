import React, { Component } from 'react';
import axios from 'axios';
import UserItem from '../../components/UserItem';
import Spinner from '../../components/Spinner';

export default class Users extends Component {
  state = {
    users: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const response = await axios.get('hhttps://api.github.com/users');
      console.log(response);
      this.setState({ users: response.data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) return <Spinner />;

    if (error) return <div>An error occured</div>;

    return (
      <section style={UsersStyle}>
        <div className="container">
          <div className="row">
            {users.map((item) => (
              <div className="col s12 m3">
                <UserItem key={item.id} user={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

const UsersStyle = {
  margin: '3rem 0 0 0',
};
