import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './quiz.css';
import { QuizAnswers } from './quizAnswers';
import { Question } from './question.js';

function getQuizQuestions(quizID) {
  //for each Quiz, return an array containing each question, possible answers, and the correct answer
  if (quizID === 1) {
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

const Progress = (currQuestionNumber, numQuestions) => {
  let percentage = 100 * currQuestionNumber / numQuestions;
  return (
    <div className="quiz-progress">
      <div className="progress" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax={numQuestions}>
        <div className="progress-bar progress-bar-striped">{percentage}%</div>
      </div>
    </div>
  );
}

let quizQuestions;
let currQuestion;
let numCorrectQuestions = 0;
let selectedAnswer = "";

export function Quiz(quizID) {
  const [allowPlayer, setAllowPlayer] = React.useState(false);
  const [currQuestionNumber, setCurrQuestionNumber] = React.useState(0);
  quizQuestions = getQuizQuestions(quizID).questions;
  currQuestion = quizQuestions[currQuestionNumber];
  let quizLength = getQuizQuestions(quizID).quizLength;
  
  return (
    <main className="container-fluid bg-secondary text-center" id="quizmain">
      <Progress 
        currQuestionNumber={currQuestionNumber} 
        numQuestions={quizLength}>
      </Progress>
      <QuestionBox>
      </QuestionBox>
      <AnswerBox 
        currQuestionNumber={currQuestionNumber}>
      </AnswerBox>
      <ConfirmationButton>
      </ConfirmationButton>
    </main>
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

const AnswerBox = (currQuestionNumber) => {
  return (
    <div className="answer-options">
      <AnswerButton position="1"></AnswerButton>
      <AnswerButton position="2"></AnswerButton>
      <AnswerButton position="3"></AnswerButton>
      <AnswerButton position="4"></AnswerButton>
    </div>
  );
}

const AnswerButton = (position) => {
  let option = currQuestion.answers[position];
  return (
    <button className="btn btn-outline-primary option"
    onClick={() => onPressed({option})}>
      {option}
    </button>
  );
}

const ConfirmationButton = () => {
  return (
    <button className="btn btn-primary confirm-answer"
    onClick={() => onConfirm()}>
      Confirm Answer
    </button>
  );
}

function onPressed(answer) {
  selectedAnswer = answer;
}

function onConfirm() {
  if (currQuestion.correct === selectedAnswer) {
    numCorrectQuestions++;
  }
  selectedAnswer = "";

  //move to next question, or end the quiz if done
  //if done, state final score with a "continue" button
  //when they press continue, go back to garden screen
}