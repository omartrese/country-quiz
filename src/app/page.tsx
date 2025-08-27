'use client'
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main>
      <div>
        <h1>
          Country Quiz
        </h1>
        <h2>By Ody</h2>
      </div>

      <div>
        <Link href="/quiz">Start Quiz</Link>
      </div>
    </main>
  );
}
