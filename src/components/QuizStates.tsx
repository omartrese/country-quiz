'use client'

interface QuizLoadingProps {
    className?: string
}

export function QuizLoading({ className = 'min-h-screen flex items-center justify-center' }: QuizLoadingProps) {
    return (
        <div className={className}>
            <p className="text-xl">Loading quiz...</p>
        </div>
    )
}

interface QuizCompleteProps {
    score: number
    totalQuestions: number
    onRetry: () => void
    className?: string
}

export function QuizComplete({
    score,
    totalQuestions,
    onRetry,
    className = 'min-h-screen flex flex-col items-center justify-center space-y-6'
}: QuizCompleteProps) {
    return (
        <div className={className}>
            <h2 className="text-2xl font-bold">Quiz Complete!</h2>
            <p className="text-xl">Your score: {score}/{totalQuestions}</p>
            <button
                onClick={onRetry}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Try Again
            </button>
        </div>
    )
}

interface QuizProgressProps {
    current: number
    total: number
    score: number
    className?: string
}

export function QuizProgress({
    current,
    total,
    score,
    className = 'mb-6 flex justify-between items-center'
}: QuizProgressProps) {
    return (
        <div className={className}>
            <p className="text-lg">Question {current + 1}/{total}</p>
            <p className="text-lg">Score: {score}</p>
        </div>
    )
}
