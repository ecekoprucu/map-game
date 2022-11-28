export type ContextType = {
    country: string;
    color: string;
    neighbors: string[];
    name: string;
    createdCountryList: CountryType[];
    createdCountry: CountryType | null;
    handleCountryChange: (country: string) => void;
    handleColorChange: (color: string) => void;
    handleCountryNeighbors: (countryName: string) => void;
    setName: (name: string) => void;
    setCreatedCountryList: (countryList: CountryType[]) => void;
    setCreatedCountry: (country: CountryType) => void;
}

export type CountryType = {
    name: string;
    flagColor: string;
    neighbors: string[];
    area: string[];
}