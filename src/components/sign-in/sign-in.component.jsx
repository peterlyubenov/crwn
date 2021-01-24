import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Submit form</CustomButton>
            <CustomButton
              onClick={(event) => {
                event.preventDefault();
                signInWithGoogle();
              }}
              isGoogleSignIn={true}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
