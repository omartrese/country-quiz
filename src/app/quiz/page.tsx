'use client'

import { useEffect } from "react"
import Quiz from "../logic/Quiz"


export default function QuizPage() {

    const newQuiz = new Quiz()


    useEffect(()=> {
        const response = newQuiz.getCountries();
        console.log(response)
    }, [])

    return <h1>esto es el quiz</h1>
}