import React, { createContext, useState } from 'react';
export const userContext=createContext();
const Mycontext = (props) => {
    const [quiztype,setquiztype]=useState('javascript');
    const [count, setcount] = useState(0);
    const [answers, setanswers] = useState([]);
    const [wrong,setwrong]=useState(0);
    const [quizId,setquizId]=useState([]);
    const [start, setstart] = useState(false);
  return (
    <>
    <userContext.Provider value={{quiztype,setquiztype,count,setcount,answers, setanswers,wrong,setwrong,quizId,setquizId,start, setstart}}>
    {props.children}
    </userContext.Provider>
    </>
  )
}
export default Mycontext;
