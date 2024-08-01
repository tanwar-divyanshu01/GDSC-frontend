import React, { useState } from 'react';

export default function Fromsignup(props) {
  const [alertVisible, setAlertVisible] = useState(false);

  function samepasswordbro(e) {
    const { key, value } = e.target;
    if (props.pswrd === value) {
      setAlertVisible(false);
    } else {
      setAlertVisible(true);
    }
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="name"
            className="form-control"
            id="exampleInputName1"
            onChange={props.handletext}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            value={FormData.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={props.handletext}
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={FormData.password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={props.handletext}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            className="form-control"
            id="confirmPassword1"
            onChange={samepasswordbro}
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {(
          <div className="alert alert-primary" role="alert">
            {props.alert}
          </div>
        )
        }
        
      </form>
    </div>
  );
}
