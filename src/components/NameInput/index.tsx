import React, { useContext } from "react";
import { ContextType } from "../../types/types";
import DataContext from "../../context/dataContext";

const NameInput = () => {
    const { name, setName } = useContext(DataContext) as ContextType;

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Country Name' />
        </div>
    )
}

export default NameInput;