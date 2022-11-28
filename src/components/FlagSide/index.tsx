import React, { useContext } from "react";
import DataContext from "../../context/dataContext";
import { ContextType, CountryType } from "../../types/types";
import CountryBox from "../CountryBox";
import './FlagSide.css';

const FlagSide = () => {
    const { createdCountryList } = useContext(DataContext) as ContextType;

    return (
        <div className="flag-area-inner">
            {
                createdCountryList.map((country: CountryType, index: number) => {
                    return <CountryBox key={index} name={country.name} color={country.flagColor}/>
                })
            }
        </div>
    )
    
};

export default FlagSide;