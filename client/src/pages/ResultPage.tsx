import { useState, useEffect } from 'react'
import { useParams } from 'react-router';

export interface Results {
  id: string;
  userName: string;
  quizId: string;
  score: number;
}

const ResultPage = () => {
  let { user } = useParams();
  const [results, setResults] = useState<Results[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      await fetch(`http://localhost:5000/results/${user}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setResults(data));
    };

    fetchResults();
  }, [user]);

  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <div>{result.quizId}</div>
          <div>{result.score}</div>
        </div>
      ))}
    </div>
  )
}

export default ResultPage