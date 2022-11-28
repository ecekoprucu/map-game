import { countryCodes } from "../data/country-codes";

export const convertCodeToCountry = (code: string) => {
    const country = countryCodes[code as keyof typeof countryCodes];

    if (!country) {
        throw new Error("Country code not found");
    }

    return country;
};