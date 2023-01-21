import React, {useEffect, useState} from 'react';
import Driver from './Driver';

const TextAnime = props => {
    const [sflag, setSflag]=useState(false)
    const [pseudoText,] = useState(()=>{
        if (typeof (props.text) === 'object' && props.text.length > 1) return props.text
        if (typeof (props.text) === 'object') {
            return props.text
        }
        return [props.txt]

    });
    const [cursor,]=useState(()=>{
        if (props.cursor!==undefined) return props.cursor;
        return true
    })

    const [textSpeed,] = useState(() => {
        if (props.textSpeed !== undefined) return props.textSpeed;
        return 7
    });
    const [startTime,] = useState(() => {
        if (props.startTime !== undefined) return props.startTime;
        return 0
    })
    const [loaded, setLoaded] = useState(false);
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [waitTime] = useState(() => {
        let temp = 0
        if (textSpeed === 1) temp = 2000
        else if (textSpeed === 2) temp = 600
        else if (textSpeed >= 20) temp = 100
        else if (textSpeed >= 10) temp = 200
        else if (textSpeed >= 3) temp = 400
        if (props.waitTime !== undefined) return props.waitTime + temp
        return temp
    })
    const [loop,] = React.useState(() => {
        if (typeof (pseudoText) === 'object' && pseudoText.length > 1) return false
        return props.loop
    })
    const [endCursor,]=React.useState(()=>{
        if(props.endCursor!==undefined){
            if(cursor===false) return false
            else return !loop
        }
        return false
    })
    const [allDelete, setAllDelete] = React.useState(() => {
        if (props.allDelete !== undefined) {
            if (typeof (pseudoText) === 'object' && pseudoText.length > 1) return true
            return props.allDelete
        }
        return typeof (pseudoText) === 'object' && pseudoText.length > 1;

    });

    useEffect(() => {
        if (typeof (props.text) === 'object' && props.text.length > 1) {
            setAllDelete(true)
            if (index < pseudoText.length) {


                const timer = setTimeout(() => {

                    setIndex(index + 1)
                    setText(pseudoText[index])
                    if (index === pseudoText.length - 1 && !props.loop) {
                        setAllDelete(props.allDelete !== undefined ? props.allDelete : false)
                        clearTimeout(timer)
                    }

                    if (index === pseudoText.length - 1 && props.loop) {
                        const timer2 = setTimeout(() => {
                            setIndex(0)
                            setText('')
                        }, waitTime + (text.length * Math.ceil(1000 / textSpeed)) + (text.length * Math.ceil(1000 / 17)))

                    }


                }, (waitTime + (text.length * Math.ceil(1000 / textSpeed)) + (text.length * Math.ceil(1000 / 17))) * (loaded ? 1 : 0) + startTime * (!loaded ? 1 : 0))

                setLoaded(true)
            }
        }
        else{
            let wtime=(waitTime + (pseudoText[0].length * Math.ceil(1000 / textSpeed)) + (pseudoText[0].length * Math.ceil(1000 / 17)))
            setSflag(false)

            const timer=setTimeout(()=>{

                setText(pseudoText[0])
                setLoaded(true)
            },startTime*(!loaded ? 1 : 0))
            if(loop){

                const w1=setTimeout(()=>{
                    setIndex(index+1)
                    setText('')
                },wtime+startTime*(!loaded ? 1 : 0) -(pseudoText[0].length * Math.ceil(1000 / 17))*(!allDelete?1:0))

            }
        }

    }, [index,sflag]);

    return <div className={props.styling!==undefined?props.styling:""}>
        <Driver
            text={text}
            textSpeed={textSpeed}
            waitTime={waitTime}
            loop={loop}
            allDelete={allDelete}
            cursor={cursor}
            endCursor={endCursor}
        />
    </div>
};

export default TextAnime;
