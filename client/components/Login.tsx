import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { loginRequest } from '../epics/loginEpic';


function LoginForm(props) {
  const { formValue, onChangeField, onSubmit } = props;
  return (
    <div className="ui container">
      <h2 className="ui header">Login</h2>
      <form className="ui form" onSubmit={onSubmit} >
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={formValue.username}
            onChange={onChangeField('username')}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formValue.password}
            onChange={onChangeField('password')}
            />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state)
  }

  handleChangeField = (fieldType) => (e) => {
    this.setState({
      [fieldType]: e.target.value
    })
  }

  render() {
    return <LoginForm
      onSubmit={this.handleSubmit}
      onChangeField={this.handleChangeField}
      formValue={this.state}
    />
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    login: loginRequest
  },
  dispatch
)

export default connect(null, mapDispatchToProps)(Login);
