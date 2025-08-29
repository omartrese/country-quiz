'use client'

import { memo } from 'react'
import Question from '@/components/Question'
import { QuizLoading, QuizComplete, QuizProgress } from '@/components/QuizStates'
import { useQuiz } from '@/hooks/useQuiz'

function QuizPage() {
    const {
        questions,
        currentQuestionIndex,
        score,
        isLoading,
        isFinished,
        resetQuiz,
        handleAnswer
    } = useQuiz()

    if (isLoading) {
        return <QuizLoading />
    }

    if (isFinished) {
        return (
            <QuizComplete 
                score={score} 
                totalQuestions={questions.length} 
                onRetry={resetQuiz} 
            />
        )
    }

    return (
        <div className="min-h-screen p-6">
            <QuizProgress 
                current={currentQuestionIndex}
                total={questions.length}
                score={score}
            />
            <Question 
                question={questions[currentQuestionIndex]} 
                onAnswer={handleAnswer}
            />
        </div>
    )
}

export default memo(QuizPage)
