import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { createUser } from '../../redux/user/actions';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';
import styles from './styles';

type Props = {
  navigation: Object,
  loading: Boolean,
  createUser: Function,
  error?: Object,
};

class SignUp extends Component<Props> {
  static defaultProps = {
    error: null,
  };

  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    email: '',
    password: '',
    hidePassword: true,
  };

  handleChange = type => (value) => {
    this.setState({ [type]: value }, () => {
      console.log(this.state);
    });
  };

  handleSignUp = () => {
    const { username, email, password } = this.state;
    this.props.createUser(username, email, password);
  };

  handleShowPassword = () => this.setState({
    hidePassword: !this.state.hidePassword,
  });

  render() {
    const { navigation, loading, error } = this.props;
    const { hidePassword } = this.state;
    return (
      <View style={styles.container}>
        {loading && <Spinner error={error} />}
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Sign Up</Text>
        <View style={styles.form}>
          <Input onInput={this.handleChange('username')} type="login" />
          <Input onInput={this.handleChange('email')} type="mail" />
          <Input
            onInput={this.handleChange('password')}
            handleShowPassword={this.handleShowPassword}
            hidePassword={hidePassword}
            type="password"
          />
        </View>
        <TouchableOpacity style={styles.signButton} onPress={this.handleSignUp}>
          <Text style={styles.signText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.toSignUp}>
          <Text style={styles.toSignUpText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.toSignUpLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(
  ({ user }) => ({ loading: user.loading, error: user.error }),
  { createUser },
)(SignUp);
