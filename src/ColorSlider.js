import React from 'react';

const ColorSlider = ({name, value, changeSlider}) => {

    let setColor = ()=>{
        switch (name){
            case 'red': return `rgb(${value},0,0)`;
            case 'green':  return `rgb(0,${value},0)`;
            case 'blue':  return `rgb(0,0,${value})`;
            case 'opacity': return `rgba(0,0,0,${value})`
            default : return `rgb(0,0,0,1)`;
        }
    }
   
    let styles = {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), ${setColor()})`
    };

    if (name === 'opacity'){
        return (
            <div className="slider" style={styles}>
                <label className={name} htmlFor={name}>{name}</label>
                <input type="range" id={name} className={name} min="0" max="1" step=".01" value={value} onChange={(event) => changeSlider(name, event.target.value)}/>
                <label className="white" htmlFor={name}>{value}</label>
            </div>
        );
    }
    else{
        return (
            <div className="slider" style={styles}>
                <label className={name} htmlFor={name}>{name}</label>
                <input type="range" id={name} className={name} min="0" max="255" value={value} onChange={(event) => changeSlider(name, event.target.value)}/>
                <label className="white" htmlFor={name}>{value}</label>
            </div>
        );
    }
    
};

export default ColorSlider;