import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Tile = ({id = 1, lessonName = "Untitled"}) => {
    const [plantState, setPlantState] = React.useState('sprout');
    const navigate = useNavigate();
    
    return (
        <div className="tile">
            {lessonName}
            <br></br>
            <Button variant='primary' onClick={() => navigate(`quiz`, {state: {id: id}})}>
                Start Quiz
            </Button>
        </div>
    );
}