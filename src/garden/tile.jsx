import React from 'react';
import { useState, useRef } from 'react';
import Popover from 'react-bootstrap/Popover';
import { OverlayTrigger } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import sprout from '/public/sprout.png';
import grown from '/public/grown.png';
import withered from '/public/withered.png';

export const Tile = ({id, lessonName = "Untitled"}) => {
    const [plantState, setPlantState] = React.useState("sprout");
    const ref = useRef(null);
    const storedState = localStorage.getItem(`tile${id}`);
    console.log(`tile${id}=` + storedState);
    if (plantState != storedState) {
        setPlantState(storedState);
    }
    return (
        <div className="tile">
            <div className="tile-contents" ref={ref}>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    container={ref}
                    overlay={popoverBottom({lessonName}, {id})}
                    >
                    <div><Plant state={plantState} ref={ref} /></div>
                </OverlayTrigger>
            </div>
        </div>
    );
}

const Plant = ({state}, ref) => {
    if (state === "sprout") {
        return(<img className="plant" ref={ref} src={sprout}/>);
    } else if (state === "grown") {
        return(<img className="plant" src={grown}/>);
    } else if (state === "withered") {
        return(<img className="plant" src={withered}/>);
    } 
}

const popoverBottom = ({lessonName}, {id}) => {
    const navigate = useNavigate();
    return (
        /*<div className="popover">*/
            <Popover id="popover-positioned-bottom">
                <Popover.Header>{lessonName}</Popover.Header>
                <Popover.Body>
                    <Button variant='primary' className="startButton" onClick={(e) => {
                        navigate(`quiz`, {state: {id: id}});
                    }}>
                        Start Quiz
                    </Button>
                </Popover.Body>
            </Popover>
        /*</div>*/
    );
};