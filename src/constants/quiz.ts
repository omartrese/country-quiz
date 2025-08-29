export const QUIZ_CONSTANTS = {
    ANSWER_DELAY: 1500,
    MAX_QUESTIONS: 10
} as const

export const QUIZ_STYLES = {
    ANSWER_BUTTON: {
        BASE: 'w-full p-4 mb-4 rounded-lg shadow transition-colors duration-200 flex items-center gap-4',
        STATES: {
            DEFAULT: 'bg-white hover:bg-blue-100',
            SELECTED: 'bg-blue-200',
            CORRECT: 'bg-green-200',
            INCORRECT: 'bg-red-200'
        }
    },
    CONTAINER: 'w-full max-w-2xl mx-auto p-6',
    QUESTION_TEXT: 'text-xl font-semibold mb-6',
    ANSWERS_CONTAINER: 'space-y-4'
} as const
