import React , {useState} from 'react';
import './Room.css';


function Room(){

    const [isLit , setLit] = useState(true);
    const [classApplied , setClassApplied] = useState('light');
    let   [initTemp , setTemp] = useState(22);

    const lightOn = () => {
        setLit(!isLit ? true : false);
        setClassApplied('light');
    }
    const lightOff = () => {
        setLit(isLit? false : true);
        setClassApplied('dark');
    }

    const increasetemp = () => {
        ++initTemp
        setTemp(initTemp);
    }

    const decreaseTemp = () => {
        --initTemp;
        setTemp(initTemp);
    }

    return (
        <div className = {`room ${classApplied}`}>
            <h3>Temperature is { initTemp } </h3>
            <button onClick= { lightOn } >Turn On</button>
            <button onClick ={ lightOff } >Turn Off</button>
            <br /><br />
            <button onClick ={ increasetemp } >Increase +</button>
            <button onClick ={ decreaseTemp } >Decrease -</button>
        </div>
    );
}

export default Room;