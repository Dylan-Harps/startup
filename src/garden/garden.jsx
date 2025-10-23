import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './garden.css';
import { Tile } from './tile.jsx';

export function Garden() {
  return (
    <main className="container-fluid bg-secondary text-center">
        <h1 className="garden-title">Your Garden</h1>
        <div className="garden-grid">
            <div className="garden-row">
                <Tile quizID="1" lessonName='Present "Yo" form'></Tile>
                <Tile quizID="2" lessonName='Lesson Name'></Tile>
                <Tile quizID="3" lessonName='Lesson Name'></Tile>
                <Tile quizID="4" lessonName='Lesson Name'></Tile>
                <Tile quizID="5" lessonName='Lesson Name'></Tile>
            </div>
            <div className="garden-row">
                <Tile quizID="6" lessonName='Lesson Name'></Tile>
                <Tile quizID="7" lessonName='Lesson Name'></Tile>
                <Tile quizID="8" lessonName='Lesson Name'></Tile>
                <Tile quizID="9" lessonName='Lesson Name'></Tile>
                <Tile quizID="10" lessonName='Lesson Name'></Tile>
            </div>
            <div className="garden-row">
                <Tile quizID="11" lessonName='Lesson Name'></Tile>
                <Tile quizID="12" lessonName='Lesson Name'></Tile>
                <Tile quizID="13" lessonName='Lesson Name'></Tile>
                <Tile quizID="14" lessonName='Lesson Name'></Tile>
                <Tile quizID="15" lessonName='Lesson Name'></Tile>
            </div>
            <div className="garden-row">
                <Tile quizID="16" lessonName='Lesson Name'></Tile>
                <Tile quizID="17" lessonName='Lesson Name'></Tile>
                <Tile quizID="18" lessonName='Lesson Name'></Tile>
                <Tile quizID="19" lessonName='Lesson Name'></Tile>
                <Tile quizID="20" lessonName='Lesson Name'></Tile>
            </div>
            <div className="garden-row">
                <Tile quizID="21" lessonName='Lesson Name'></Tile>
                <Tile quizID="22" lessonName='Lesson Name'></Tile>
                <Tile quizID="23" lessonName='Lesson Name'></Tile>
                <Tile quizID="24" lessonName='Lesson Name'></Tile>
                <Tile quizID="25" lessonName='Lesson Name'></Tile>
            </div>
        </div>
    </main>
  );
}