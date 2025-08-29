import { IAnswer, IQuestion } from "@/types/types"
import { QUIZ_CONSTANTS, QUIZ_STYLES } from "@/constants/quiz"
import Answer from "./Answer"
import { useState, useCallback, memo } from "react"

interface QuestionProps {
    question: IQuestion
    onAnswer: (isCorrect: boolean) => void
}

function QuestionComponent({ question, onAnswer }: QuestionProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | null>(null)
    const [showResult, setShowResult] = useState(false)

    const handleAnswerClick = useCallback((answer: IAnswer) => {
        if (showResult) return
        setSelectedAnswer(answer)
        setShowResult(true)
        onAnswer(answer === question.correctAnswer)
        
        setTimeout(() => {
            setSelectedAnswer(null)
            setShowResult(false)
        }, QUIZ_CONSTANTS.ANSWER_DELAY)
    }, [showResult, question.correctAnswer, onAnswer])

    return (
        <div className={QUIZ_STYLES.CONTAINER}>
            <h2 className={QUIZ_STYLES.QUESTION_TEXT}>{question.question}</h2>
            <div className={QUIZ_STYLES.ANSWERS_CONTAINER}>
                {question.answers.map((answer, index) => (
                    <Answer
                        key={`${answer.answer}-${index}`}
                        answer={answer}
                        onClick={handleAnswerClick}
                        isSelected={selectedAnswer?.answer === answer.answer}
                        isCorrect={showResult && answer.answer === question.correctAnswer.answer}
                        showResult={showResult}
                    />
                ))}
            </div>
        </div>
    )
}

export default memo(QuestionComponent)
