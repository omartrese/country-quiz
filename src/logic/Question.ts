import { ICountry, IAnswer, TypeOfQuestion } from "@/types/types";
import { countryToAnswer } from "./Answer";
/**
 * Generate a new question for the quiz
 * @param  {TypeOfQuestion} questionType Needed to know how the question text must ask.
 * @param  {ICountry} countryToQuestion The country needed to know the question's answer
 * @return {string} The question text for the IQuestion.
 */
export function generateQuestion(questionType: TypeOfQuestion, countryToQuestion: ICountry): string {
    let result = "";
    switch (questionType) {
        case "lang":
            result = `Which language is spoken in  ${countryToQuestion.name}`
            break;
        case "name":
            result = `Which country has this flag ${countryToQuestion.flag}`
            break;
        case "flag":
            result = `Which one is the flag of ${countryToQuestion.name}`
            break;

        default:
            console.log("what the helllllll omaigaaaaaa no wayayayayayyy");
            break;
    }
    return result;
}

/**
 * Generate a new question for the quiz
 * @param  {IAnswer} correctAnswer Needed to know which one of the 4 generated answers is correct.
 * @param  {ICountry} countryToQuestion The country needed to know the question's answer
 * @return {string} The question text for the IQuestion.
 */
export function generateAnswers(correctAnswer: IAnswer, countries: ICountry[]): IAnswer[] {

    const wrongAnswers: IAnswer[] = []

    for (let i = 0; i < 3; i++) {
        let generatedCountry: ICountry = countries[Math.floor(Math.random() * countries.length)];
        while (!generatedCountry || countryToAnswer(generatedCountry) === correctAnswer) {
            generatedCountry = countries[Math.floor(Math.random() * countries.length)];
        }
        wrongAnswers.push(countryToAnswer(generatedCountry));
    }
    return [correctAnswer, ...wrongAnswers];
}