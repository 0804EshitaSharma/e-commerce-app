import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Navbar.js";
import Form from "../Customcomponents/Form";
import "./Login.css";
function Login() {
  //  const [user, setUser] = useState("");
  //  const [password, setPassword] = useState("");
  //  const [email, setEmail] = useState("");
  //  const [error, setError] = useState("");
  //  const [loggedIn, setLoggedIn] = useState(false);
  //  const auth = getAuth();
  //  const verifyUser = () => {
  //    signInWithEmailAndPassword(auth, email, password)
  //      .then((userCredential) => {
  //        // Signed in
  //        const user = userCredential.user;
  //        // ...
  //      })
  //      .catch((error) => {
  //        const errorCode = error.code;
  //        const errorMessage = error.message;
  //        setError(errorMessage);
  //      });
  //  };
  //  const addUser = () => {
  //    createUserWithEmailAndPassword(auth, email, password)
  //      .then((userCredential) => {
  //        // Signed in
  //        const user = userCredential.user;
  //        // ...
  //      })
  //      .catch((error) => {
  //        const errorCode = error.code;
  //        const errorMessage = error.message;
  //        // ..
  //      });
  //  };
  //   const loggout = () => {
  //     app.auth.signOut();
  //   };
  //   const onAuthenticationState = () => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // User is signed in, see docs for a list of available properties
  //         // https://firebase.google.com/docs/reference/js/auth.user
  //         const uid = user.uid;
  //         setUser(user);
  //         // ...
  //       } else {
  //         // User is signed out
  //         // ...
  //         setUser("");
  //       }
  //     });
  //   };
  //   useEffect(() => {
  //     onAuthenticationState();
  //   }, []);
  return (
    <div >
      <Navbar />
      <Form />
    </div>
  );
}

export default Login;
