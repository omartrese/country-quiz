export interface Quiz {
    questions: Array<Question>
    score: number
}

export interface Question {
    question: string
    type: string
    answers: Array<Answer>
    correctAnswer: Answer
}

export interface Answer{
    answer: string
}