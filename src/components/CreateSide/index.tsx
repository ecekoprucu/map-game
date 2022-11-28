import React, { useContext, useEffect } from "react";

import DataContext from "../../context/dataContext";
import { ContextType } from "../../types/types";
import ColorPicker from "../ColorPicker";
import NameInput from "../NameInput";

const CreateSide = () => {
    const { createdCountryList, setCreatedCountry, setCreatedCountryList, handleCountryChange, name, setName, color, neighbors} = useContext(DataContext) as ContextType;

    const handleCreateCountry = () => {
        if(!name || !name.length) {
            alert('Please enter a country name');
            return;
        }

        if(!color || !color.length) {
            alert('Please select a color');
            return;
        }

        const newCountry = {
            name,
            flagColor: color,
            neighbors: neighbors,
            area: [],
        }
        setName('');
        handleCountryChange('');
        setCreatedCountryList([...createdCountryList, newCountry]);
        setCreatedCountry(newCountry);
    }

    return (
        <div className="picking-area">
            <NameInput />
            <ColorPicker />
            <button onClick={handleCreateCountry}>Create Country</button>
        </div>
    );
}

export default CreateSide;