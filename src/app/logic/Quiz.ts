import { Emoji } from "emojibase";
import {
    ICountry,
    IQuestion,
    type IQuiz
} from "../types/types";
import { fetchCountries } from "../services/countryService";



class Quiz implements IQuiz {
    questions: Array<IQuestion> = [];
    score: number = 0;

    countries: ICountry[] = [];

    getCountries = async () => {

        const data = await fetchCountries();

        data.map((country: any) => {
            const name = country.name?.common || "Unknown";
            const lang = country.languages
                ? Object.values(country.languages)[0] as string
                : "Unknown";
            const flag: Emoji = country.flag || "🏳️";

            this.countries.push({
                name,
                lang,
                flag
            })

        });
        return (this.countries);


    }

    #createQuestions = () => {
        let questionsList = new Set();
        for (let i = 0; i < 10; i++) {
        }
    }
}

export default Quiz