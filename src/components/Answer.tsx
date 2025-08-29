'use client'
import { IAnswer } from "@/types/types"
import { QUIZ_STYLES } from "@/constants/quiz"
import { useMemo } from "react"

interface AnswerProps {
    answer: IAnswer
    onClick: (answer: IAnswer) => void
    isSelected?: boolean
    isCorrect?: boolean
    showResult?: boolean
}

export default function Answer({ 
    answer, 
    onClick, 
    isSelected = false, 
    isCorrect = false, 
    showResult = false 
}: AnswerProps) {
    const buttonClassName = useMemo(() => {
        const { BASE, STATES } = QUIZ_STYLES.ANSWER_BUTTON
        const stateClass = !showResult 
            ? (isSelected ? STATES.SELECTED : STATES.DEFAULT)
            : (isCorrect ? STATES.CORRECT : (isSelected ? STATES.INCORRECT : STATES.DEFAULT))
        
        return `${BASE} ${stateClass}`
    }, [isSelected, isCorrect, showResult])

    return (
        <button
            onClick={() => onClick(answer)}
            disabled={showResult}
            className={buttonClassName}
        >
            {answer.showFlag !== false && answer.flag && 
                <span className="text-2xl">{answer.flag.toString()}</span>
            }
            <span>{answer.answer.toString()}</span>
        </button>
    )
}