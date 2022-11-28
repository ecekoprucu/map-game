import React, { useContext, useEffect, useState } from "react";

import './Map.css';
import DataContext from "../../context/dataContext";
import { ContextType, CountryType } from "../../types/types";
import MapDraw from "../MapDraw";

const MapComponent = () => {
    const { country, name, color, neighbors, createdCountry, createdCountryList, handleCountryChange, handleCountryNeighbors, setCreatedCountryList, setCreatedCountry } = useContext(DataContext) as ContextType;
   
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [createdCountryNeighbors, setCreatedCountryNeighbors] = useState<string[]>([]);


    const handleSelection = (countryName: string) => {
        if(!country.length) {
                handleCountryNeighbors(countryName);
                handleCountryChange(countryName);
                setSelectedCountries([...selectedCountries, countryName]);

                createdCountryList && setCreatedCountryList && setCreatedCountryList(createdCountryList.map((item) => {
                    if(item.name === countryName && createdCountry) {
                        return createdCountry
                    }
                    return item;
                }))

            } else {
                if(createdCountry?.neighbors.includes(countryName)) {
                    handleCountryNeighbors(countryName);
                    handleCountryChange(countryName);
                    setSelectedCountries([...selectedCountries, countryName]);

                    createdCountry && setCreatedCountry({
                        ...createdCountry,
                        neighbors: createdCountryNeighbors,
                        area: [
                            ...createdCountry.area,
                            ...selectedCountries
                        ]
                    })

                createdCountryList && setCreatedCountryList && setCreatedCountryList(createdCountryList.map((item) => {
                    if(item.name === countryName && createdCountry) {
                        return createdCountry
                    }
                    return item;
                }))
                }
            } 
    }

    useEffect(() => {
      const newCountryList = createdCountryList.map(item => {
            if(item.name === name && createdCountry) {
                return createdCountry
            }
            return item;
      })
      console.log(newCountryList);

        if(newCountryList) {
            setCreatedCountryList(newCountryList);
        }

    }, [createdCountry?.area, createdCountryNeighbors])

    useEffect(() => {
        setCreatedCountryNeighbors([...createdCountryNeighbors, ...neighbors]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [neighbors]);

    useEffect(() => {
        console.log(createdCountryNeighbors);
        createdCountry && setCreatedCountry({
            name,
            flagColor: color,
            neighbors: createdCountryNeighbors,
            area: [
                ...createdCountry.area,
                ...selectedCountries
            ]
        });
    }, [selectedCountries, createdCountryNeighbors])

    return (
       <>
        <MapDraw handleSelection={handleSelection} country={country} createdCountry={createdCountry}/>
       </>
    )
};

export default MapComponent;