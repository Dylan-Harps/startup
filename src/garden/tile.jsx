import React from 'react';
import Popover from 'react-bootstrap/Popover';
import { OverlayTrigger } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import sprout from '/public/sprout.png';
import grown from '/public/grown.png';
import withered from '/public/withered.png';

export const Tile = ({id, lessonName = "Untitled"}) => {
    const [plantState, setPlantState] = React.useState("sprout");
    console.log(`plantState${id}= ` + localStorage.getItem(`tile${id}`));
    if (localStorage.getItem(`tile${id}`)) {
        setPlantState(localStorage.getItem(`tile${id}`));
    }
    return (
        <div className="tile">
            <OverlayTrigger
                container={this}
                trigger="click"
                rootClose
                placement="bottom"
                overlay={popoverBottom({lessonName}, {id}, setPlantState)}
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

const popoverBottom = ({lessonName, id, setPlantState}) => {
    const navigate = useNavigate();
    return (
        <Popover className="popover" id="popover-positioned-bottom" title={lessonName}>
            <Button variant='primary' onClick={() => {
                    //{setPlantState}((plantState) => {"grown"});
                    if (!localStorage.getItem(`tile${id}`)) {localStorage.setItem(`tile${id}`, "grown");}
                    navigate(`quiz`, {state: {id: id}});
                }}>
                Start Quiz
            </Button>
        </Popover>
    );
};