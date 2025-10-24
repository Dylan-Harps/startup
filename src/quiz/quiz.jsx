import React from 'react';
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './quiz.css';
import { QuizAnswers } from './quizAnswers';
import { Question } from './question.js';
import { useLocation } from 'react-router-dom';

function getQuizQuestions(quizID) {
  //for each Quiz, return an array containing each question, possible answers, and the correct answer
  if (quizID == 1) {
    const question1 = new Question("Fill in the Blank:", "Yo ___ mejorar mi español.", ["querer","quieres","quiero","quieras"], "quiero");
    const question2 = new Question("Fill in the Blank:", "Yo ___ el mejor.", ["es","soy","so","eres"], "soy");
    const question3 = new Question("Fill in the Blank:", "Yo ___ un gato.", ["tengo","tienes","teno","tienen"], "tengo");
    const question4 = new Question("Fill in the Blank:", "Yo ___ estudiar más.", ["debe","debo","deba","deber"], "debo");
    const question5 = new Question("Fill in the Blank:", "Yo ___ cansado.", ["está","están","estás","estoy"], "estoy");
    return new QuizAnswers(quizID, 5, [question1, question2, question3, question4, question5]);
  } else {
    const question1 = new Question("Here is a placeholder:", "The answer is A.", ["A","B","C","D"], "A");
    const question2 = new Question("Here is a placeholder:", "The answer is B.", ["A","B","C","D"], "B");
    const question3 = new Question("Here is a placeholder:", "The answer is C.", ["A","B","C","D"], "C");
    const question4 = new Question("Here is a placeholder:", "The answer is D.", ["A","B","C","D"], "D");
    const question5 = new Question("Here is a placeholder:", "The answer is A.", ["A","B","C","D"], "A");
    return new QuizAnswers(quizID, 5, [question1, question2, question3, question4, question5]);
  }
}

let myQuiz;
let quizQuestions;
let currQuestion;
let numCorrectQuestions = 0;
let selectedAnswer = "";

export function Quiz() {
  const location = useLocation();
  const quizID = location.state.id;
  const [currQuestionNumber, setCurrQuestionNumber] = React.useState(0);
  myQuiz = getQuizQuestions(quizID);
  quizQuestions = myQuiz.questions;
  currQuestion = quizQuestions[currQuestionNumber];
  
  return (
    <main className="container-fluid bg-secondary text-center" id="quizmain">
      <Progress 
        curr={currQuestionNumber}
        numQuestions={myQuiz.quizLength}>
      </Progress>
      <QuestionBox></QuestionBox>
      <AnswerBox></AnswerBox>
      <ConfirmationButton
        curr = {currQuestionNumber}
        setCurr = {setCurrQuestionNumber}>
      </ConfirmationButton>
    </main>
  );
}

const Progress = ({curr} = 1, numQuestions = 5) => {
  let percentage = 100 * parseInt(curr) / parseInt(numQuestions);
  return (
    <div className="quiz-progress">
      <ProgressBar animated now={percentage} label={`${percentage}%`}/>
    </div>
  );
}
const QuestionBox = () => {
  return (
      <div className="question-box">
        <div className="instruction">{currQuestion.instructions}</div>
        <div className="question">{currQuestion.question}</div>
      </div>
  );
}

const AnswerBox = () => {
  return (
    <div className="answer-options">
      <AnswerButton position="0"></AnswerButton>
      <AnswerButton position="1"></AnswerButton>
      <AnswerButton position="2"></AnswerButton>
      <AnswerButton position="3"></AnswerButton>
    </div>
  );
}

const AnswerButton = ({position}) => {
  let option = currQuestion.answers[position];
  return (
    <button className="btn btn-outline-primary option"
    onClick={() => onPressed({option})}>
      {option}
    </button>
  );
}

function onPressed({option}) {
  selectedAnswer = option;
  console.log("onPressed: selectedAnswer= " + selectedAnswer);
}

const ConfirmationButton = ({curr, setCurr}) => {
  return (
    <button className="btn btn-primary confirm-answer"
    onClick={() => onConfirm(curr, setCurr)}>
      Confirm Answer
    </button>
  );
}

function onConfirm(curr, setCurr) {
  console.log("onConfirm: correctAnswer= " + currQuestion.correct);
  console.log("onConfirm: curr= " + curr);
  if (currQuestion.correct === selectedAnswer) {
    numCorrectQuestions++;
  }
  console.log("onConfirm: numCorrectQuestions= " + numCorrectQuestions);
  selectedAnswer = "";
  if (curr + 1 === myQuiz.quizLength) {
    //finsihed quiz!
    //show final score and a continue button which returns them to the garden
  } else {
    setCurr(curr + 1); //move on to the next question
  }
}