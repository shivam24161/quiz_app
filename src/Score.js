import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "./Mycontext";
import "./Score.css";
import * as React from "react";
import quiz from "./Data";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Score = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const obj = useContext(userContext);
  const [flag, setflag] = useState(false);
  const back = () => {
    setflag(true);
    obj.setcount(0);
    obj.setwrong(0);
    obj.setanswers([]);
  };
  return (
    <>
      {flag && <Navigate to="/" replace={true} />}
      <div>
        <h1>Your Score: {obj.count}/5</h1>
        <h1>correct Answers: {obj.count}</h1>
        <h1>Incorrect Answer: {obj.wrong}</h1>
        <h1>Not Answered: {5 - obj.count - obj.wrong}</h1>
        <h1>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#926DDE" }}
            onClick={back}
          >
            Back to HomePage
          </Button>
          <Button
            variant="contained"
            id="see_answers"
            onClick={handleClickOpen}
          >
            See Answers
          </Button>
        </h1>
      </div>
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "sticky",backgroundColor:"#926DDE" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Answers
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
          <div>
            <div className="score_answer_div">
              {quiz.map((i, index) => {
                if (i.category === obj.quiztype) {
                  return (
                    <>
                      <div className="">
                        <div className="question">
                          {i.a}. {i.question}
                        </div>
                        {i.answers.map((j) => {
                          return (
                            <>
                              <div className="options_div">
                                <div
                                  className={i.correct_answers.answer_a_correct}
                                >
                                  {" "}
                                  A: {j.answer_a}
                                </div>
                                <div
                                  className={i.correct_answers.answer_b_correct}
                                >
                                  {" "}
                                  B: {j.answer_b}
                                </div>
                                <div
                                  className={i.correct_answers.answer_c_correct}
                                >
                                  {" "}
                                  C: {j.answer_c}
                                </div>
                                <div
                                  className={i.correct_answers.answer_d_correct}
                                >
                                  {" "}
                                  D: {j.answer_d}
                                </div>
                              </div>
                              {obj.answers.map((k) => {
                                var a = k.option.slice(7, 8);
                                if (i.id === k.id)
                                  return (
                                    <>
                                      <div className="answer">
                                        <p id={k.answered}>
                                          Your answer is : Option: {a}
                                        </p>
                                      </div>
                                    </>
                                  );
                              })}
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};
export default Score;
