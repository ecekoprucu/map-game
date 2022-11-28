import { countryCodes } from "../data/country-codes";

export const convertCountryToCode = (country: string) => {
    const code = Object.keys(countryCodes).find(key => countryCodes[key as keyof typeof countryCodes] === country);

    if (!code) {
        throw new Error("Country not found");
    }

    return code;
}