import React, { useContext, useEffect } from "react";
import Routing from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "./components/DataProvider/DataProvider";
import { auth } from "./utility/firebase";
import { Type } from "./utility/action.type";

const App = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <Routing />
    </>
  );
};

export default App;
