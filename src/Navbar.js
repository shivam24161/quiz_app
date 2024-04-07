import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "./Mycontext";
import "./Navbar.css";
const Navbar = () => {
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

  return (
    <>
      <ul>
        <li>
          <a href="/" className="home">
            Quiz App
          </a>
        </li>
        {/* <li class="dropdown">
          <a href="/" class="dropbtn">
            Category
          </a>
          <div class="dropdown-content">
            <p>
              <Link to='/component'><Button id="js" onClick={javascriptQuiz}>
                JavaScript
              </Button></Link>
            </p>
            <p>
              <Link to='/component'><Button id="java" onClick={javaQuiz}>
                Java
              </Button></Link>
            </p>
            <p>
            <Link to='/component'><Button id="react" onClick={reactQuiz}>
                React
              </Button></Link>
              
            </p>
          </div>
        </li> */}
      </ul>
    </>
  );
};
export default Navbar;
