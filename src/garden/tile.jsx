import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Tile = (quizID, lessonName) => {
    const [plantState, setPlantState] = React.useState('sprout');
    const navigate = useNavigate();
    
    return (
        <div className="tile">
            {lessonName}
            <br></br>
            <Button variant='primary' onClick={() => navigate('/quiz', quizID)}>
                Start Quiz
            </Button>
        </div>
    );
}