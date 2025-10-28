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
    const ref = useRef(null);
    const storedState = typeof window !== 'undefined' ? localStorage.getItem(`tile${id}`) : null;
    const [plantState, setPlantState] = React.useState(storedState || 'sprout');

    //Plants wither over time. Will be implemented later with WebSocket
    const LIFETIME = 10 * 1000;
    const timerRef = React.useRef(null);
    React.useEffect(() => {
        try { if (typeof window !== 'undefined') localStorage.setItem(`tile${id}`, plantState); } catch (e) { }

        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        if (plantState !== 'grown') { return undefined; }

        timerRef.current = setTimeout(() => {
            setPlantState('withered');
            try { if (typeof window !== 'undefined') localStorage.setItem(`tile${id}`, 'withered'); } catch (e) { }
            timerRef.current = null;
        }, LIFETIME);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = null;
        };
    }, [plantState, id]);

    //stack tiles according to their id
    const numericId = Number(id) || 0;
    const baseZ = 100 - Math.floor(numericId / 5) - (numericId % 5);
    const tileStyle = { zIndex: baseZ };

    return (
        <div className="tile" style={tileStyle}>
            <div className="tile-debug" aria-hidden="true">{`id:${id} z:${baseZ}`}</div> {/* debug */}
            <div className="tile-contents" ref={ref}>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    container={typeof document !== 'undefined' ? document.body : ref}
                    popperConfig={{
                        strategy: 'fixed',
                        modifiers: [
                            { name: 'offset', options: { offset: [-25, 20] } },
                            { name: 'preventOverflow', options: { boundary: 'viewport' } }
                        ]
                    }}
                    overlay={<PopoverBottom lessonName={lessonName} id={id} />}
                    >
                    <div className="plant-anchor" style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Plant state={plantState} />
                    </div>
                </OverlayTrigger>
            </div>
        </div>
    );
}

const Plant = ({state}, ref) => {
    if (state === "sprout") {
        return(<img className="plant" ref={ref} src={sprout}/>);
    } else if (state === "grown") {
        return(<img className="plant" ref={ref} src={grown}/>);
    } else if (state === "withered") {
        return(<img className="plant" ref={ref} src={withered}/>);
    } 
}

const PopoverBottom = ({ lessonName, id, ...overlayProps }) => {
    const navigate = useNavigate();
    return (
        <Popover {...overlayProps} id={`popover-positioned-bottom-${id}`}>
            <Popover.Header>{lessonName}</Popover.Header>
            <Popover.Body>
                <Button variant='primary' className="start-button" onClick={() => {
                    navigate('quiz', { state: { id } });
                }}>
                    Start Quiz
                </Button>
            </Popover.Body>
        </Popover>
    );
};