import {
    IAnswer,
    ICountry,
    IQuestion,
    TypeOfQuestion,
    type IQuiz
} from "../types/types";
import { fetchCountries, organiseCountries } from "../services/countryService";
import { generateQuestion, generateAnswers } from "./Question";
import { countryToAnswer } from "./Answer";



class Quiz implements IQuiz {


    getCountries = async (): Promise<ICountry[]> => {

        const countriesString = localStorage.getItem('countries');
        if(countriesString) return JSON.parse(countriesString);

        const data = await fetchCountries();

        const countries: ICountry[] = await organiseCountries(data);

        localStorage.setItem('countries', JSON.stringify(countries));

        return countries;
    }

    createQuiz = (countries: ICountry[]): IQuestion[] => {
        let questions: Array<IQuestion> = [];
        let countryQuestion: ICountry; //country that will be used as the question topic
        let newQuestionType: TypeOfQuestion; //type of question between guessing lang, name or flag
        let newCorrectAnswer: IAnswer; // correct answer = countryQuestion
        const questionTypes = ["lang", "name", "flag"];

        for (let i = 0; i < 10; i++) {

            countryQuestion = countries.at(Math.floor(Math.random() * countries.length)) as ICountry;

            newQuestionType = questionTypes[Math.floor(Math.random() * questionTypes.length)] as TypeOfQuestion;

            newCorrectAnswer = countryToAnswer(countryQuestion, newQuestionType); 

            questions.push({
                question: generateQuestion(newQuestionType, countryQuestion),
                type: newQuestionType,
                answers: generateAnswers(newQuestionType, newCorrectAnswer, countries),
                correctAnswer: newCorrectAnswer 
            })
        }

        return questions;


    }
}

export default Quiz