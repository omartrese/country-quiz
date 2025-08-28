import { ICountry } from "@/types/types";
import { Emoji } from "emojibase";


export async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,languages,flag");

    const data = await response.json();
    return data;
}

export async function organiseCountries(data: any[]): Promise<ICountry[]> {
    const countries: ICountry[] = [];

    data.map((country: any) => {
        const name = country.name?.common || "Unknown";
        const lang = country.languages
            ? Object.values(country.languages)[0] as string
            : "Unknown";
        const flag: Emoji = country.flag || "🏳️";
        
        countries.push({
            name,
            lang,
            flag
        })

    });
    return countries;
}