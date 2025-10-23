import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './quiz.css';
import { QuizAnswers } from './quizAnswers';

export function Quiz(quizID) {
  const [allowPlayer, setAllowPlayer] = React.useState(false);
  const [currQuestion, setCurrQuestion] = React.useState(0);
  quizQuestions = getQuizQuestions(quizID);
  numCorrectQuestions = 0;
  selectedAnswer = "";
  
  return (
    <main className="container-fluid bg-secondary text-center" id="quizmain">
      <Progress currQuestion="1" numQuestions="5"></Progress>
      <QuestionBox></QuestionBox>
      <AnswerBox></AnswerBox>
      <ConfirmationButton></ConfirmationButton>
    </main>
  );
}

const Progress = (currQuestion, numQuestions) => {
  percentage = 100 * currQuestion / numQuestions;
  return (
    <div className="quiz-progress">
        <p>`Question ${currQuestion}/${numQuestions} (${percentage}%)`</p>
        <div className="progress" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax={numQuestions}>
          <div className="progress-bar progress-bar-striped">{percentage}%</div>
        </div>
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
      <AnswerButton position="1"></AnswerButton>
      <AnswerButton position="2"></AnswerButton>
      <AnswerButton position="3"></AnswerButton>
      <AnswerButton position="4"></AnswerButton>
    </div>
  );
}

const AnswerButton = (position) => {
  return (
    <button className="btn btn-outline-primary option"
    onClick={() => onPressed(currQuestion.answers[position])}>
      {currQuestion.answers[position]}
    </button>
  );
}

const ConfirmationButton = () => {
  return (
    <button className="btn btn-primary confirm-answer"
    onClick={() => onConfirm(selectedAnswer)}>
      Confirm Answer
    </button>
  );
}

function getQuizQuestions(quizID) {
  //for each Quiz, return an array containing each question, possible answers, and the correct answer
  if (quizID === 1) {
    quesiton1 = new Question("Fill in the Blank:", "Yo ___ mejorar mi español.", ["querer","quieres","quiero","quieras"], "quiero");
    quesiton2 = new Question("Fill in the Blank:", "Yo ___ el mejor.", ["es","soy","so","eres"], "soy");
    quesiton3 = new Question("Fill in the Blank:", "Yo ___ un gato.", ["tengo","tienes","teno","tienen"], "tengo");
    quesiton4 = new Question("Fill in the Blank:", "Yo ___ estudiar más.", ["debe","debo","deba","deber"], "debo");
    quesiton5 = new Question("Fill in the Blank:", "Yo ___ cansado.", ["está","están","estás","estoy"], "estoy");
    return new QuizAnswers(quizID, 5, [question1, question2, question3, question4, question5]);
  } else {
    quesiton1 = new Question("Here is a placeholder:", "The answer is A.", ["A","B","C","D"], "A");
    quesiton2 = new Question("Here is a placeholder:", "The answer is B.", ["A","B","C","D"], "B");
    quesiton3 = new Question("Here is a placeholder:", "The answer is C.", ["A","B","C","D"], "C");
    quesiton4 = new Question("Here is a placeholder:", "The answer is D.", ["A","B","C","D"], "D");
    quesiton5 = new Question("Here is a placeholder:", "The answer is A.", ["A","B","C","D"], "A");
    return new QuizAnswers(quizID, 5, [question1, question2, question3, question4, question5]);
  }
}

React.useEffect(() => {
    //idk
}, []);

function onPressed(answer) {
  selectedAnswer = answer;
}

function onConfirm(answer) {
  if (questions[currQuestion].correct === answer) {
    numCorrectQuestions++;
  }
  selectedAnswer = "";

  //move to next question, or end the quiz if done
  //if done, state final score with a "continue" button
  //when they press continue, go back to garden screen
}