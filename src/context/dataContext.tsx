import React, {useCallback, useState} from 'react';
import { ContextType, CountryType } from '../types/types';

import { findNeighbor } from '../utils/findNeighbor';
import { convertCodeToCountry } from "../utils/convertCodeToCountry";
const DataContext = React.createContext<ContextType | null>(null);

type Props = {
    children: React.ReactNode;
};

export const DataProvider = ({children}: Props) => {
    // Created country's color
    const [color, handleColorChange] = useState('#2c3e50');
    // Clicked country
    const [country, handleCountryChange] = useState('');
    // Clicked country's neighbors
    const [neighbors, setNeighbors] = useState<string[]>([]);
    // Created country's name
    const [name, setName] = useState<string>('');
    // Created countrys
    const [createdCountryList, setCreatedCountryList] = useState<CountryType[]>([]);
    const [createdCountry, setCreatedCountry] = useState<CountryType | null>(null);

    const handleCountryNeighbors = useCallback((countryName: string) => {
        const neighborCodes = findNeighbor(countryName);
        const neighborNames = neighborCodes.map((code: string) => {
            return convertCodeToCountry(code);
        });

        setNeighbors(neighborNames);
    }, [setNeighbors]);

    return (
        <DataContext.Provider value={{country, color, neighbors, name, createdCountryList, createdCountry, setCreatedCountry, handleCountryChange, handleColorChange, handleCountryNeighbors, setName, setCreatedCountryList}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;