import { useState } from "react";
import axios from "axios";
// import { PictureOutlined } from "@ant-design/icons";

import Logo from "../assets/FauxCoChat4b.png";

const SignUpForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState("");

  const formIsValid = () => password === passwordConfirmation;

  const submitSignUp = async (e) => {
    e.preventDefault();
    if (!formIsValid()) {
      setError("Passwords do not match!");
      return;
    }

    const data = {
      username: username,
      secret: password,
      email: email,
      first_name: firstName,
      last_name: lastName,
      // avatar: avatar,
    };

    const config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "{{068f540a-e315-46e6-8c3d-5822c4094790}}",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        props.setSignUp("");
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(data);
  };

  const userTyping = (type, e) => {
    switch (type) {
      case "username":
        setUsername(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;

      case "passwordConfirmation":
        setPasswordConfirmation(e.target.value);
        break;

      case "email":
        setEmail(e.target.value);
        break;

      case "firstName":
        setFirstName(e.target.value);
        break;

      case "lastName":
        setLastName(e.target.value);
        break;

      // case "avatar":
      //   setAvatar(e.target.value);
      //   break;

      default:
        break;
    }
  };

  const goToLogInHandler = () => {
    props.setSignUp("");
    console.log(props.signUp);
  };

  return (
    <div className="wrapper">
      <main>
        <img
          src={Logo}
          alt="FauxCoChat Logo"
          style={{
            width: "300px",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "15px",
            marginTop: "15px",
            borderRadius: "30px",
          }}
        />
        <h1 className="title">Sign Up</h1>
        <form className="form" onSubmit={(e) => submitSignUp(e)}>
          <input
            type="username"
            placeholder="Username"
            autoComplete="username"
            onChange={(e) => userTyping("username", e)}
            autoFocus
            id="signup-username-input"
            className="input-signup"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => userTyping("password", e)}
            id="signup-password-input"
            className="input-signup"
            required
          />
          <input
            type="password"
            placeholder="Confirm Your Password"
            onChange={(e) => userTyping("passwordConfirmation", e)}
            id="signup-password-confirmation-input"
            className="input-signup"
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => userTyping("email", e)}
            id="signup-email-input"
            className="input-signup"
          />
          <input
            type="first_name"
            placeholder="First Name"
            onChange={(e) => userTyping("firstName", e)}
            id="signup-first-name-input"
            className="input-signup"
          />
          <input
            type="last_name"
            placeholder="Last Name"
            onChange={(e) => userTyping("lastName", e)}
            id="signup-last-name-input"
            className="input-signup"
          />

          {/* <div>
            <label htmlFor="upload-button">
              <span className="image-button">
                <PictureOutlined className="picture-icon" />
              </span>
            </label>
            <input
              type="file"
              multiple={false}
              id="upload-button"
              style={{ display: "none" }}
              onChange={(e) => userTyping("avatar", e)}
              accept="img/x-png, img/gif, img/jpeg"
              className="input-signup"
            />
          </div> */}

          <div align="center">
            <button type="submit" className="button">
              Sign Up
            </button>
          </div>
        </form>
        {error && <h5>{error}</h5>}
        <div
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            marginTop: "15px",
          }}
        >
          <span className="sign-in" style={{ color: "white" }}>
            Already a member?{" "}
            <span
              className="sign-uin-link"
              style={{ color: "blue" }}
              onClick={goToLogInHandler}
            >
              Sign In
            </span>
          </span>
        </div>
      </main>
    </div>
  );
};

export default SignUpForm;
