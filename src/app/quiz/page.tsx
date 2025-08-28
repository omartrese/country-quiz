'use client'

import { useEffect } from "react"
import Quiz from "../../logic/Quiz"


export default function QuizPage() {

    const newQuiz = new Quiz()
    let countries;
    let questions;

    useEffect(() => {
        const fetchQuiz = async () => {
            countries = await newQuiz.getCountries();
            questions = newQuiz.createQuiz(countries);
            console.log(questions);
        };
        fetchQuiz();
    }, [])

    return <h1>esto es el quiz</h1>
}