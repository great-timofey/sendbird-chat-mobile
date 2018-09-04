import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createUser, fetchUser } from '../../redux/user/actions';
import AuthInput from '../../components/AuthInput';
import Spinner from '../../components/Spinner';
import styles from './styles';

type Props = {
  loading: Boolean,
  createUser: Function,
  fetchUser: Function,
};

class Auth extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  state = {
    isSingUp: false,
    username: 'tim2',
    email: '232323',
    password: '232323',
    hidePassword: true,
    // username: 'Asdf',
    // email: 'asdfasdf',
    // password: 'asdfasdf',
  };

  toggleMode = () => this.setState(({ isSingUp }) => ({
    isSingUp: !isSingUp,
    username: '',
    email: '',
    password: '',
    hidePassword: true,
  }));

  handleChange = type => (value) => {
    this.setState({ [type]: value }, () => {
      console.log(this.state);
    });
  };

  handleSignUp = () => {
    const { createUser } = this.props;
    const { username, email, password } = this.state;
    createUser(username, email, password);
  };

  handleSignIn = () => {
    const { fetchUser } = this.props;
    const { username, email, password } = this.state;
    fetchUser(username, email, password);
  };

  handleShowPassword = () => this.setState(({ hidePassword }) => ({
    hidePassword: !hidePassword,
  }));

  render() {
    const { loading } = this.props;
    const {
      hidePassword, isSingUp, username, email, password,
    } = this.state;
    return (
      <View style={styles.container}>
        {loading && <Spinner />}
        <Text style={styles.header}>{isSingUp ? 'Sign Up' : 'Sign In'}</Text>
        <View style={styles.form}>
          <AuthInput
            onInput={this.handleChange('username')}
            type="login"
            value={username}
            withImage
          />
          <AuthInput
            onInput={this.handleChange('email')}
            type="mail"
            value={email}
            withImage
          />
          <AuthInput
            onInput={this.handleChange('password')}
            handleShowPassword={this.handleShowPassword}
            hidePassword={hidePassword}
            type="password"
            value={password}
            withImage
          />
        </View>
        <TouchableOpacity
          style={styles.signButton}
          onPress={isSingUp ? this.handleSignUp : this.handleSignIn}
        >
          <Text style={styles.signText}>
            {isSingUp ? 'Sign Up' : 'Sign In'}
          </Text>
        </TouchableOpacity>
        <View style={styles.toggleModeSection}>
          <Text style={styles.toggleModeText}>
            {isSingUp
              ? 'Already have an account? '
              : 'Don’t have an account yet? '}
          </Text>
          <TouchableOpacity onPress={this.toggleMode}>
            <Text style={styles.toggleModeButton}>
              {isSingUp ? 'Sign In' : 'Sing Up'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(
  ({ user }) => ({ loading: user.loading }),
  { createUser, fetchUser },
)(Auth);
