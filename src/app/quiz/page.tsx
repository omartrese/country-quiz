'use client'

import { useEffect } from "react"
import { type Quiz } from "../../../types"

export default function QuizPage() {

    useEffect(()=> {
        console.log("hasta los coyons de next")
    }, [])

    return <h1>esto es el quiz</h1>
}