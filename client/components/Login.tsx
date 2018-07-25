import * as React from 'react';
import { Button } from 'semantic-ui-react'


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
    console.log(e.target)
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

export default Login;
