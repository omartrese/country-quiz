import Link from "next/link";


export default function Home() {
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
