import { useState, useCallback, useEffect } from 'react'
import { IQuestion } from '@/types/types'
import Quiz from '@/logic/Quiz'
import { QUIZ_CONSTANTS } from '@/constants/quiz'

export interface QuizState {
    questions: IQuestion[]
    currentQuestionIndex: number
    score: number
    isLoading: boolean
    isFinished: boolean
}

export const useQuiz = () => {
    const [state, setState] = useState<QuizState>({
        questions: [],
        currentQuestionIndex: 0,
        score: 0,
        isLoading: true,
        isFinished: false
    })
    const quiz = new Quiz()


    // Reiniciar quiz
    const resetQuiz = useCallback(() => {
        setState(prev => ({
            ...prev,
            currentQuestionIndex: 0,
            score: 0,
            isFinished: false
        }))
    }, [])

    // Manejar respuestas
    const handleAnswer = useCallback((isCorrect: boolean) => {
        setState(prev => ({
            ...prev,
            score: isCorrect ? prev.score + 1 : prev.score
        }))

        setTimeout(() => {
            setState(prev => ({
                ...prev,
                currentQuestionIndex: 
                    prev.currentQuestionIndex < prev.questions.length - 1 
                        ? prev.currentQuestionIndex + 1 
                        : prev.currentQuestionIndex,
                isFinished: prev.currentQuestionIndex === prev.questions.length - 1
            }))
        }, QUIZ_CONSTANTS.ANSWER_DELAY)
    }, [])

    //crear un nuevo Quiz
    useEffect(() => {
        const fetchQuiz = async () => {
            const countries = await quiz.getCountries()
            const quizQuestions = quiz.createQuiz(countries)
            setState(prev => ({
                ...prev,
                questions: quizQuestions,
                isLoading: false
            }))
        }
        fetchQuiz()
    }, [])

    return {
        ...state,
        resetQuiz,
        handleAnswer
    }
}
