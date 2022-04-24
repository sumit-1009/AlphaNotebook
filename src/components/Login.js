import React, {useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""})
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      history.push("/notes");
      props.showAlert("You have successfully logged in", "success");

    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  }
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mt-3">
      <h2 className="mb-4">Login to use iNoteBook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={credentials.email} name="email" aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={credentials.password} name="password" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
