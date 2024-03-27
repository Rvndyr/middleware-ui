import React from 'react'
import styled from 'styled-components'


const Login = () => {
  return (
    <LoginContainer>
    <div className="container center-align">
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Login</span>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Login
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </LoginContainer>
  )
}

const LoginContainer = styled.div`
margin-top: 25%;
`
export default Login