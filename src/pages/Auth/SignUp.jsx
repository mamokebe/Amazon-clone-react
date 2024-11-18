import React, { useContext, useState } from "react";
import classes from "./SignUp.module.css";
import logo from "../../assets/amazon-logo-png.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../utility/action.type";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const SignUp = () => {
  const [currentState, setCurrentState] = useState("Sign In");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [loading, SetLoading] = useState(false);

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData);

  // console.log(userName, email, password);
  // console.log(user);

  const authHandler = async (event) => {
    event.preventDefault();
    // console.log(event);
    try {
      if (currentState === "Sign In") {
        // console.log(event);
        //firebase Auth (method)
        SetLoading(true);
        const res = await signInWithEmailAndPassword(auth, email, password);
        // console.log(res);
        dispatch({
          type: Type.SET_USER,
          user: res.user,
        });
        SetLoading(false);
        navigate(navStateData?.state?.redirect || "/");
      } else {
        // console.log(event);
        SetLoading(true);
        const res = await createUserWithEmailAndPassword(auth, email, password);
        // console.log(res);
        dispatch({
          type: Type.SET_USER,
          user: res.user,
        });
        SetLoading(false);
        navigate(navStateData?.state?.redirect || "/");
      }
    } catch (error) {
      // setError(err.message);
      toast.error(error.code.split("/")[1].split("-").join(" "));
      SetLoading(false);
    }
  };

  return (
    <div className={classes.login_Container}>
      <div className={classes.login_top}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={classes.login_form}>
          <form onSubmit={authHandler} className={classes.login_form_container}>
            <div className={classes.login_form_title}>
              <h2>{currentState}</h2>
            </div>
            {navStateData?.state?.msg && (
              <small
                style={{
                  padding: "5px",
                  textAlign: "center",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {navStateData?.state?.msg}{" "}
              </small>
            )}
            <div className={classes.login_form_inputs}>
              {currentState === "Sign In" ? (
                <></>
              ) : (
                <div className={classes.inputs}>
                  <label htmlFor="name"> Your name</label> <br />
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    type="text"
                    id="name"
                    placeholder="First and last name"
                    required
                  />
                </div>
              )}
              <div className={classes.inputs}>
                {/* <p>Mobile number or email</p> */}
                <label htmlFor="email"> Mobile number or email</label> <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className={classes.inputs}>
                {/* <p>Password</p> */}
                <label htmlFor="password"> Password </label> <br />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  id="password"
                  placeholder="At least 6 character"
                  required
                />
              </div>
            </div>
            {/* <button>{currentState === "Sign Up" ? "Continue" : "Login"}</button> */}
            <button type="submit">
              {loading ? <ClipLoader color="#000" size={15} /> : "Continue"}
            </button>

            <div className={classes.login_form_condition}>
              {/* <input type="checkbox" required /> */}
              <p>
                By Continuing, you agree to the Amazon's{" "}
                <span>conditions of use</span> & <span>privacy Notice</span>
              </p>
            </div>
            {currentState === "Sign In" ? (
              <div className={classes.form_new}>
                <div className={classes.form_new_hr}>
                  <hr />
                  <p> New to Amazon?</p>
                  <hr />
                </div>
                <button onClick={() => setCurrentState("Sign Up")}>
                  Create your Amazon account
                </button>
              </div>
            ) : (
              <p>
                Already have an account?
                <span onClick={() => setCurrentState("Sign In")}> Sign in</span>
              </p>
            )}
          </form>
          {/* {error && <small>{error}</small>} */}
        </div>
      </div>
      <div className={classes.login_footer_container}>
        <div className={classes.login_footer_title}>
          <p>
            <a href="">
              <span>Condition of use</span>
            </a>
          </p>
          <p>
            <a href="">
              <span>Privacy Notice</span>
            </a>
          </p>
          <p>
            <a href="">
              <span>Help</span>
            </a>
          </p>
        </div>
        <div className={classes.login_footer_copy}>
          <p> &copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
