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

const Progress = (currQuestion, numQuestions) => {
  let percentage = 100 * currQuestion / numQuestions;
  return (
    <div className="quiz-progress">
      <div className="progress" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax={numQuestions}>
        <div className="progress-bar progress-bar-striped">{percentage}%</div>
      </div>
    </div>
  );
}

export function Quiz(quizID) {
  const [allowPlayer, setAllowPlayer] = React.useState(false);
  const [currQuestion, setCurrQuestion] = React.useState(0);
  let quizQuestions = getQuizQuestions(quizID);
  //let correctAnswer = quizQuestions[{currQuestion}].correct;
  let numCorrectQuestions = 0;
  let selectedAnswer = "";
  
  return (
    <main className="container-fluid bg-secondary text-center" id="quizmain">
      <Progress 
        currQuestion={currQuestion} 
        numQuestions="5">
      </Progress>
      <QuestionBox 
        currQuestion={currQuestion}>
      </QuestionBox>
      <AnswerBox 
        quizQuestions={quizQuestions} 
        currQuestion={currQuestion}>
      </AnswerBox>
      <ConfirmationButton 
        selectedAnswer={selectedAnswer} 
        correctAnswer="quiero"
        numCorrectQuestions={numCorrectQuestions}>
      </ConfirmationButton>
    </main>
  );
}

const QuestionBox = ({currQuestion}) => {
  return (
      <div className="question-box">
        <div className="instruction">{currQuestion.instructions}</div>
        <div className="question">{currQuestion.question}</div>
      </div>
  );
}

const AnswerBox = ({quizQuestions}, {currQuestion}) => {
  return (
    <div className="answer-options">
      <AnswerButton position="1" quizQuestions={quizQuestions} currQuestion={currQuestion} selectedAnswer={selectedAnswer}></AnswerButton>
      <AnswerButton position="2" quizQuestions={quizQuestions} currQuestion={currQuestion} selectedAnswer={selectedAnswer}></AnswerButton>
      <AnswerButton position="3" quizQuestions={quizQuestions} currQuestion={currQuestion} selectedAnswer={selectedAnswer}></AnswerButton>
      <AnswerButton position="4" quizQuestions={quizQuestions} currQuestion={currQuestion} selectedAnswer={selectedAnswer}></AnswerButton>
    </div>
  );
}

const AnswerButton = (position, {quizQuestions}, {currQuestion}, {selectedAnswer}) => {
  return (
    <button className="btn btn-outline-primary option"
    onClick={() => onPressed({selectedAnswer}, quizQuestions[currQuestion].answers[position])}>
      {quizQuestions[currQuestion].answers[position]}
    </button>
  );
}

const ConfirmationButton = ({selectedAnswer}, correctAnswer, {numCorrectQuestions}) => {
  return (
    <button className="btn btn-primary confirm-answer"
    onClick={() => onConfirm({selectedAnswer}, correctAnswer, {numCorrectQuestions})}>
      Confirm Answer
    </button>
  );
}

function onPressed({selectedAnswer}, answer) {
  selectedAnswer = answer;
}

function onConfirm({selectedAnswer}, correctAnswer, {numCorrectQuestions}) {
  if (correctAnswer === selectedAnswer) {
    numCorrectQuestions++;
  }
  selectedAnswer = "";

  //move to next question, or end the quiz if done
  //if done, state final score with a "continue" button
  //when they press continue, go back to garden screen
}