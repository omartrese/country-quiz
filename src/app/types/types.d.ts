import { Emoji } from "emojibase"

type QuestionType = "lang" | "flag" | "name";

export interface ICountry {
    name: string
    lang: string
    flag: Emoji
}

export interface IQuiz {
    questions: Array<IQuestion>
    score: number
    getCountries: () => void
}

export interface IQuestion {
    question: string
    type: string
    answers: Array<IAnswer>
    correctAnswer: IAnswer
}

export interface IAnswer {
    answer: string
}