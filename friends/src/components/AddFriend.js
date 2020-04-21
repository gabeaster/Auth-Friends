import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = (props) => {
  const [name, setName] = useState({
    name: "",
    age: "",
    email: "",
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setName({ ...name, [e.target.name]: e.target.value });
  };

  function addFriend(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", name)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.response));
  }
  return (
    <div className="login">
      <form
        className="login-form"
        onSubmit={(event) => addFriend(event)}
        onKeyDown={props.closeLoginHandler2}
        tabIndex="0"
      >
        <h1 className="loginTitle">Add More Friends</h1>
        <div className="input-container">
          <p className="login-inputs">
            <label>
              Name:
              <input
                className="input-form"
                type="text"
                name="name"
                onChange={changeHandler}
                value={name.name}
              />
            </label>
          </p>

          <p className="login-inputs">
            <label>
              Age:
              <input
                className="input-form"
                type="age"
                name="age"
                onChange={changeHandler}
                value={name.age}
              />
            </label>
          </p>

          <p className="login-inputs">
            <label>
              Email:
              <input
                className="input-form"
                type="email"
                name="email"
                onChange={changeHandler}
                value={name.email}
              />
            </label>
          </p>
        </div>

        <button className="button-form" onClick={addFriend}>
          Add Friend !
        </button>
      </form>
    </div>
  );
};

export default AddFriend;
