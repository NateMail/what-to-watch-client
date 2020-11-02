import React, { useState } from "react";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { username, email, password } = formValues;

  const validation = (values) => {
    const regex = /\S+@\S+\.\S+/;
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.username.trim()) {
      console.log(errors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(formValues));
    if (errors) {
      console.log(errors);
    }
    console.log("submit");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="username"
            placeholder="name"
            id="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
