import { Emoji } from "emojibase"

type TypeOfQuestion = "lang" | "name" | "flag"

export interface ICountry {
    name: string
    lang: string
    flag: Emoji
}

export interface IQuiz {
    getCountries: () => Promise<ICountry[]>
    createQuiz: (countries: ICountry[]) => Array<IQuestion>
}

export interface IQuestion {
    question: string
    type: TypeOfQuestion
    answers: Array<IAnswer>
    correctAnswer: IAnswer
}

export interface IAnswer extends ICountry {
    answer: string | Emoji
    showFlag?: boolean
}