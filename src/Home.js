import { Button } from "@mui/material";
import React, { useContext, useEffect} from "react";
import "./Home.css";
import { userContext } from "./Mycontext";
import { Link } from "react-router-dom";

const Home = () => {
  const obj = useContext(userContext);

  // Javascript Quiz
  const javascriptQuiz = () => {
    obj.setquiztype("javascript");
    obj.setstart(true);
  };

  // JavaQuiz
  const javaQuiz = () => {
    obj.setquiztype("java");
    obj.setstart(true);
  };
  // React Quiz
  const reactQuiz = () => {
    obj.setquiztype("react");
    obj.setstart(true);
  };
  useEffect(()=>{
    obj.setquizId([]);
    obj.setanswers([]);
    obj.setcount(0);
    obj.setwrong(0);
  },[])
  return (
    <>
      <div className="home_main_div">
        <div className="quiz_heading">Select Quiz Category</div>
        <p>
          <Link to="/component" id="js">
            <Button onClick={javascriptQuiz} variant="contained" id="js">
              JavaScript
            </Button>
          </Link>
        </p>
        <p>
          <Link to="/component" id="java" >
            <Button onClick={javaQuiz} variant="contained" id="java">
              Java
            </Button>
          </Link>
        </p>
        <p>
          <Link to="/component" id="react">
            <Button onClick={reactQuiz} variant="contained" id="react">
              React
            </Button>
          </Link>
        </p>
        <p className="note">Note: Timer will get started as you click on any category...</p>
      </div>
    </>
  );
};
export default Home;
