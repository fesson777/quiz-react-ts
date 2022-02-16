import clsx from "clsx";
import { useState } from "react";
import ActiveQuiz from "components/ActiveQuiz";
import FinishedQuiz from "components/FinishedQuiz";
import type { AnswerState } from "types";
import { questions } from "./data";
import styles from "./Quiz.module.scss";

type State = {
  isFinished: boolean;
  activeQuestion: number;
  answerState: AnswerState;
};

const initState: State = {
  isFinished: false,
  activeQuestion: 0,
  answerState: {},
};

export default function Quiz() {
  const [quizState, setQuizState] = useState<State>(initState);

  const [result, setResult] = useState<AnswerState>({});

  function handleAnswerClick(id: number) {
    const question = questions[quizState.activeQuestion];
    if (question.rightAnswerId === id) {
      setResult({ ...result, [question.id]: "success" });
      setQuizState({
        ...quizState,
        answerState: { [id]: "success" },
      });

      const timeout = setTimeout(() => {
        if (isQuizFinish()) {
          setQuizState({ ...quizState, isFinished: true });
        } else {
          setQuizState({
            ...quizState,
            activeQuestion: quizState.activeQuestion + 1,
            answerState: {},
          });
          clearTimeout(timeout);
        }
      }, 2000);
    } else {
      setResult({ ...result, [question.id]: "error" });

      setQuizState({
        ...quizState,
        answerState: { [id]: "error" },
      });
    }
  }

  function isQuizFinish() {
    return quizState.activeQuestion + 1 === questions.length;
  }

  function handleRetry() {
    setQuizState(initState);
    setResult({});
  }

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.quizWrapper)}>
        <h1>Вопросы, испытай себя!!</h1>

        {quizState.isFinished ? (
          <FinishedQuiz result={result} onRetry={handleRetry} />
        ) : (
          <ActiveQuiz
            ask={questions[quizState.activeQuestion].ask}
            answers={questions[quizState.activeQuestion].answers}
            answerNumber={quizState.activeQuestion + 1}
            answerState={quizState.answerState}
            onAnswerClick={handleAnswerClick}
          />
        )}
      </div>
    </div>
  );
}
