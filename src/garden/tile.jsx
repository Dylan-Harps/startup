import React from 'react';
import Popover from 'react-bootstrap/Popover';
import { OverlayTrigger } from 'react-bootstrap';
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
            <OverlayTrigger
                container={this}
                trigger="click"
                placement="bottom"
                overlay={popoverBottom({lessonName})}
                >
                <div><Plant state={plantState} /></div>
            </OverlayTrigger>
        </div>
    );
}

const Plant = ({state}) => {
    if (state === "sprout") {
        return(<img className="plant" src={sprout}/>);
    } else if (state === "grown") {
        return(<img className="plant" src={grown}/>);
    } else if (state === "withered") {
        return(<img className="plant" src={withered}/>);
    } 
}

const popoverBottom = ({lessonName}) => {
    return (
        <Popover id="popover-positioned-bottom" title={lessonName}>
            <Button variant='primary' onClick={() => {
                    navigate(`quiz`, {state: {id: id}});
                    setPlantState("grown");
                }}>
                Start Quiz
            </Button>
        </Popover>
    );
};