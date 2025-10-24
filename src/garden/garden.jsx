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
                <Tile id="1" lessonName='Present "Yo" form'></Tile>
                <Tile id="2" lessonName='Lesson Name'></Tile>
                <Tile id="3" lessonName='Lesson Name'></Tile>
                <Tile id="4" lessonName='Lesson Name'></Tile>
                <Tile id="5" lessonName='Lesson Name'></Tile>
            </div>
            <div className="garden-row">
                <Tile id="6" lessonName='Lesson Name'></Tile>
                <Tile id="7" lessonName='Lesson Name'></Tile>
                <Tile id="8" lessonName='Lesson Name'></Tile>
                <Tile id="9" lessonName='Lesson Name'></Tile>
                <Tile id="10" lessonName='Lesson Name'></Tile>
            </div>
            <div className="garden-row">
                <Tile id="11" lessonName='Lesson Name'></Tile>
                <Tile id="12" lessonName='Lesson Name'></Tile>
                <Tile id="13" lessonName='Lesson Name'></Tile>
                <Tile id="14" lessonName='Lesson Name'></Tile>
                <Tile id="15" lessonName='Lesson Name'></Tile>
            </div>
            <div className="garden-row">
                <Tile id="16" lessonName='Lesson Name'></Tile>
                <Tile id="17" lessonName='Lesson Name'></Tile>
                <Tile id="18" lessonName='Lesson Name'></Tile>
                <Tile id="19" lessonName='Lesson Name'></Tile>
                <Tile id="20" lessonName='Lesson Name'></Tile>
            </div>
            <div className="garden-row">
                <Tile id="21" lessonName='Lesson Name'></Tile>
                <Tile id="22" lessonName='Lesson Name'></Tile>
                <Tile id="23" lessonName='Lesson Name'></Tile>
                <Tile id="24" lessonName='Lesson Name'></Tile>
                <Tile id="25" lessonName='Lesson Name'></Tile>
            </div>
        </div>
    </main>
  );
}