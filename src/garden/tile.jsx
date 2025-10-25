import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import sprout from '/public/sprout.png';
import grown from '/public/grown.png';
import withered from '/public/withered.png';

export const Tile = ({id = 1, lessonName = "Untitled"}) => {
    const [plantState, setPlantState] = React.useState("sprout");
    const navigate = useNavigate();
    
    return (
        <div className="tile">
            {lessonName}
            <Plant className="plant" state={plantState} />
            <Button variant='primary' onClick={() => {
                    navigate(`quiz`, {state: {id: id}});
                    setPlantState("grown");
                }}>
                Start Quiz
            </Button>
        </div>
    );
}

const Plant = ({state}) => {
    if (state === "sprout") {
        return(<img src={sprout}/>);
    } else if (state === "grown") {
        return(<img src={grown}/>);
    } else if (state === "withered") {
        return(<img src={withered}/>);
    } 
}