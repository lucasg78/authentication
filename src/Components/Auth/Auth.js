// 1) Importing the necessary dependencies:
// Here, we import the necessary modules from the React library.
// Specifically, we're using the useState hook from React, which allows us
// to add state to functional components.
import React, { useState } from "react";
import "./Auth.scss";

// 2) Defining the Auth component:
// This defines the Auth functional component,
// which encapsulates the logic for the authentication process and user interface.
function Auth() {
  // 3) Setting up component-level state:
  // Here, we use the useState hook to initialize three state variables:
  // 1. firstName (to store the user's first name input)
  // 2. lastName (to store the user's last name input)
  // 3. isSubmitted (to keep track of whether the form has been submitted).
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 4) Handling input change:
  // This function, handle...NameChange, is called whenever there is a change in the input field.
  // It updates the user´s first and last names states with the values entered by the user.
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  // 5) Handling form submission:
  // The handleSubmit function is called when the form is submitted.
  // It prevents the default form submission behavior, checks if the username is not empty
  // (after removing leading and trailing white spaces), and then sets the isSubmitted state to true.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add any validation logic here
    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setIsSubmitted(true);
    }
  };

  // 6) Rendering the component:
  // Here, we conditionally render either a welcome message with the entered first and last names
  // if the form has been submitted (isSubmitted is true) or the input form itself.
  // The input field captures the user´s first and last names values, and the submit button triggers
  // the handleSubmit function when clicked.
  return (
    <div className="App">
      {isSubmitted ? (
        <h1>
          Welcome {firstName} {lastName}!
        </h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Please enter your first name:
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            Please enter your last name:
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

// 7) Exporting the component:
// Finally, we export the Auth component so it can be imported
// and used in other parts of the application, as we did in App.js.
export default Auth;
