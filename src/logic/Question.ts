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

function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Generate a question's answers for the quiz
 * @param  {IAnswer} correctAnswer Needed to know which one of the 4 generated answers is correct.
 * @param  {ICountry} countryToQuestion The country needed to know the question's answer
 * @return {string} The question text for the IQuestion.
 */
export function generateAnswers(questionType: TypeOfQuestion, correctAnswer: IAnswer, countries: ICountry[]): IAnswer[] {
    const wrongAnswers: IAnswer[] = [];
    const usedAnswers = new Set([correctAnswer.answer]);

    for (let i = 0; i < 3; i++) {
        let generatedCountry: ICountry = countries[Math.floor(Math.random() * countries.length)];
        let answer = countryToAnswer(generatedCountry, questionType);

        // Make sure we don't use the same answer twice and it's not the correct answer
        while (!generatedCountry || usedAnswers.has(answer.answer)) {
            generatedCountry = countries[Math.floor(Math.random() * countries.length)];
            answer = countryToAnswer(generatedCountry, questionType);
        }
        
        usedAnswers.add(answer.answer);
        wrongAnswers.push(answer);
    }
    
    // Combine and shuffle all answers
    return shuffleArray([correctAnswer, ...wrongAnswers]);
}