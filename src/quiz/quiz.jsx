import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './quiz.css';
import { QuizAnswers } from './quizAnswers';

export function Quiz() {
  const [allowPlayer, setAllowPlayer] = React.useState(false);
  const [currQuestion, setCurrQuestion] = React.useState(0);
  numCorrectQuestions = 0;
  quizQuestions = [];
  
  return (
    <main className="container-fluid bg-secondary text-center" id="quizmain">
      <div className="quiz-progress">
        <p>Question 1/5 (20%)</p>
        <div className="progress" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="5">
          <div className="progress-bar progress-bar-striped">20%</div>
        </div>
      </div>

      <div className="question-box">
        <div className="instruction">Fill in the blank:</div>
        <div className="question">Yo ____ mejorar mi español.</div>
      </div>
      <div className="answer-options">
        <button className="btn btn-outline-primary option">Option 1</button>
        <button className="btn btn-outline-primary option">Option 2</button>
        <button className="btn btn-outline-primary option">Option 3</button>
        <button className="btn btn-outline-primary option">Option 4</button>
      </div>
      <button className="btn btn-primary confirm-answer">Confirm Answer</button>
    </main>
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
    //when quiz first loads up, get the list of questions prepared
}, []);

async function onPressed(answer) {
  if (allowPlayer) {
    setAllowPlayer(false);
    await buttons.get(answer).ref.current.press();

    if (questions[currQuestion].correct === answer) {
      numCorrectQuestions++;
    }

    //move to next question, or end the quiz if done
    //if done, state final score with a "continue" button
    //setAllowPlayer(true);
    //when they press continue, go back to garden screen
  }
}