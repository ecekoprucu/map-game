import { convertCountryToCode } from "./convertCountryToCode";
import { countriesAndNeighbors } from "../data/neighboring";

type Neighbors = string[];

export const findNeighbor = (country: string) : Neighbors => {
    const code = convertCountryToCode(country);
    return countriesAndNeighbors[code as keyof typeof countriesAndNeighbors].neighbours;
}