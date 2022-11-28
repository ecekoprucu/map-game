import React, { useState, useEffect, useContext } from 'react';
import { ColorResult, SketchPicker } from 'react-color';

import DataContext from "../../context/dataContext";
import { ContextType } from "../../types/types";
import './ColorPicker.css';

const ColorPicker = () => {
    const { color, handleColorChange } = useContext(DataContext) as ContextType;
    
    return (
        <div className='pickerContainer'>
         <SketchPicker color={color} onChangeComplete={(color: ColorResult) => handleColorChange(color.hex)} />
        </div>
    );
};    

export default ColorPicker;