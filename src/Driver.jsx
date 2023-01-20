import React, {useEffect} from 'react';

const Driver = (props) => {
    const [speed, setSpeed] = React.useState(Math.ceil(1000 / props.textSpeed));
    const [rev, setRev] = React.useState(1);
    const [allDelete, setAllDelete] = React.useState(false);
    const frontSpeed = Math.ceil(1000 / props.textSpeed);
    const backSpeed = Math.ceil(1000 / 17);
    const [displayText, setDisplayText] = React.useState(props.text);
    const [curText, setCurText] = React.useState('');
    const loop = props.loop;
    const [endCursor,setEndCursor]=React.useState(false);

    useEffect(() => {

        setRev(1)
        setSpeed(frontSpeed)
        setDisplayText(props.text)
        setAllDelete(props.allDelete)
        setEndCursor(false)
        setCurText('') // updated
    }, [props.text]);

    useEffect(() => {

        const timer = setTimeout(() => {
            setCurText(displayText.slice(0, curText.length + rev))
            if (displayText.length === curText.length) {
                setRev(-1)
                setSpeed(backSpeed)
            }

        }, speed)
        if (curText.length === displayText.length && !allDelete) {
            if(props.endCursor) setEndCursor(true)
            clearTimeout(timer);
        }
        if (rev === -1 && curText.length === 0 && !loop) {
            if(props.endCursor) setEndCursor(true)
            clearTimeout(timer)
        }

        if (loop && curText.length === 0 && rev === -1) {
            if(props.endCursor) setEndCursor(true)
            clearTimeout(timer)
            const wait = setTimeout(() => {
                setSpeed(frontSpeed)
                setRev(1)
            }, props.waitTime)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [curText, rev, displayText])

    return (
        <div className={(props.cursor && !endCursor)? "blink":""}>
            {curText}
        </div>
    );
};

export default Driver;
