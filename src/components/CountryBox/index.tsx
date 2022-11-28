import React from "react";

type Props = {
    name: string;
    color: string;
}

const CountryBox = ({name, color} : Props) => {
    return (
        <div className='boxWrapper' style={{margin: 10, textAlign: 'center'}}>
            <div className='box' style={{backgroundColor: color, height: 50, width: 50}}></div>
            <h3>{name}</h3>
        </div>
    )
}

export default CountryBox;