import React, { useContext, useEffect, useState } from "react";
import quiz from "./Data";
import "./Component1.css";
import { Button } from "@mui/material";
import { userContext } from "./Mycontext";
import { Navigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Component1 = () => {
  const [flag, setflag] = useState(false);

  const obj = useContext(userContext);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      setflag(true);
      return <div className="timer">Time Up</div>;
    }
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  // Submit quiz
  const submitQuiz = (event) => {
    setflag(true);
  };

  useEffect(() => {
    obj.answers.map((i) => {
      if (i.answered === "true") {
        obj.setcount((c) => c + 1);
      } else if (i.answered === "false") {
        obj.setwrong((d) => d + 1);
      }
    });
  }, [flag]);

  // Save Answer
  const saveAnswer = (event, id) => {
    let answer = event.target.value;
    let option_id=event.target.id;
    let temp = { id: id, answered: answer,option:option_id};
    if (obj.quizId.includes(id)) {
      obj.answers.map((i) => {
        if (i.id === id) {
          i.answered = answer;
          i.option = option_id;
          obj.setanswers([...obj.answers]);
        }
      });
    } else {
      obj.setquizId([...obj.quizId, id]);
      obj.setanswers([...obj.answers, temp]);
    }
  };

  return (
    <>
      {flag && <Navigate to="/score" replace={true} />}
      <h1 className="quiz_heading">{obj.quiztype} Quiz</h1>
      <div className="main_div_component">
        <form>
          {quiz.map((i, index) => {
            if (i.category === obj.quiztype) {
              return (
                <>
                  <div className="main_div">
                    <div className="sub_div">
                      {i.a}. {i.question}
                    </div>
                    {i.answers.map((j) => {
                      var a=Object.keys(i.correct_answers)
                      return (
                        <>
                          <div className="option_div">
                            <div className="options">
                              <input
                                type="radio"
                                id={a[0]}
                                value={i.correct_answers.answer_a_correct}
                                onChange={(event) => saveAnswer(event, i.id)}
                                name={i.name}
                              />
                              {j.answer_a}
                            </div>
                            <div className="options">
                              <input
                                type="radio"
                                id={a[1]}
                                value={i.correct_answers.answer_b_correct}
                                onChange={(event) => saveAnswer(event, i.id)}
                                name={i.name}
                              />
                              {j.answer_b}
                            </div>
                            <div className="options">
                              <input
                                type="radio"
                                id={a[2]}
                                value={i.correct_answers.answer_c_correct}
                                onChange={(event) => saveAnswer(event, i.id)}
                                name={i.name}
                              />
                              {j.answer_c}
                            </div>
                            <div className="options">
                              <input
                                type="radio"
                                id={a[3]}
                                value={i.correct_answers.answer_d_correct}
                                onChange={(event) => saveAnswer(event, i.id)}
                                name={i.name}
                              />
                              {j.answer_d}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            }
          })}
          <Button variant="contained" id="submit_btn" onClick={submitQuiz}>
            Submit
          </Button>
        </form>
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={50}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: obj.start, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      </div>
    </>
  );
};
export default Component1;
