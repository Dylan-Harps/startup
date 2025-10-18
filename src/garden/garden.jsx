import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './garden.css';

export function Garden() {
  return (
    <main className="container-fluid bg-secondary text-center">
        <h1>Your Garden</h1>
        <div className="garden-grid">
            <div className="garden-row">
                <div className="tile" onclick="startLesson(1)">Lesson Name<br></br>Start Lesson</div>
                <div className="tile" onclick="startLesson(2)">Start Lesson</div>
                <div className="tile" onclick="startLesson(3)">Start Lesson</div>
                <div className="tile" onclick="startLesson(4)">Start Lesson</div>
                <div className="tile" onclick="startLesson(5)">Start Lesson</div>
            </div>
            <div className="garden-row">
                <div className="tile" onclick="startLesson(6)">Start Lesson</div>
                <div className="tile" onclick="startLesson(7)">Start Lesson</div>
                <div className="tile" onclick="startLesson(8)">Start Lesson</div>
                <div className="tile" onclick="startLesson(9)">Start Lesson</div>
                <div className="tile" onclick="startLesson(10)">Start Lesson</div>
            </div>
            <div className="garden-row">
                <div className="tile" onclick="startLesson(11)">Start Lesson</div>
                <div className="tile" onclick="startLesson(12)">Start Lesson</div>
                <div className="tile" onclick="startLesson(13)">Start Lesson</div>
                <div className="tile" onclick="startLesson(14)">Start Lesson</div>
                <div className="tile" onclick="startLesson(15)">Start Lesson</div>
            </div>
            <div className="garden-row">
                <div className="tile" onclick="startLesson(16)">Start Lesson</div>
                <div className="tile" onclick="startLesson(17)">Start Lesson</div>
                <div className="tile" onclick="startLesson(18)">Start Lesson</div>
                <div className="tile" onclick="startLesson(19)">Start Lesson</div>
                <div className="tile" onclick="startLesson(20)">Start Lesson</div>
            </div>
            <div className="garden-row">
                <div className="tile" onclick="startLesson(21)">Start Lesson</div>
                <div className="tile" onclick="startLesson(22)">Start Lesson</div>
                <div className="tile" onclick="startLesson(23)">Start Lesson</div>
                <div className="tile" onclick="startLesson(24)">Start Lesson</div>
                <div className="tile" onclick="startLesson(25)">Start Lesson</div>
            </div>
        </div>  
    </main>
  );
}