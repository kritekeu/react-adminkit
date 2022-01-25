import React , {useState}from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import imgLogo from '../../adminkit/src/img/avatars/avatar.jpg';
import Home from '../../pages/Home';


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
 
    .then(data => data.json())

 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
   
    setToken(token);
 
  }

  return(

<main className="d-flex w-100">
  <div className="container d-flex flex-column">
    <div className="row vh-100">
      <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div className="d-table-cell align-middle">
          <div className="text-center mt-4">
            <h1 className="h2">Welcome back, Charles</h1>
            <p className="lead">
              Sign in to your account to continue
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="m-sm-4">
                <div className="text-center">
                  <img src={imgLogo} alt="Charles Hall" className="img-fluid rounded-circle" width={132} height={132} />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control form-control-lg" type="email" name="email" onChange={e => setUserName(e.target.value)} defaultValue="eve.holt@reqres.in" placeholder="eve.holt@reqres.in" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control form-control-lg" type="password" name="password" onChange={e => setPassword(e.target.value)} defaultValue="cityslicka" placeholder="cityslicka" />
                    <small>
                      <a href="index.html">Forgot password?</a>
                    </small>
                  </div>
                  <div>
                    <label className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue="remember-me" name="remember-me" defaultChecked />
                      <span className="form-check-label">
                        Remember me next time
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-3">
                  <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
  )

}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
