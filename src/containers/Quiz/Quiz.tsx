import clsx from "clsx";
import { useState } from "react";
import ActiveQuiz from "components/ActiveQuiz";
import FinishedQuiz from "components/FinishedQuiz";
import styles from "./Quiz.module.scss";

interface IBaseQuiz {
  isFinished: boolean;
  activeQuestion: number;
  answerState?: any;
  quiz: {
    question: string;
    rightAnswerId: number;
    id: number;
    answers: { text: string; id: number }[];
  }[];
}

export default function Quiz() {
  const [quizState, setquizState] = useState<IBaseQuiz>({
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Черный", id: 1 },
          { text: "Синий", id: 2 },
          { text: "Красный", id: 3 },
          { text: "Зеленый", id: 4 },
        ],
      },
      {
        question: "В каком году основали СПб?",
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: "1700", id: 1 },
          { text: "1705", id: 2 },
          { text: "1703", id: 3 },
          { text: "1803", id: 4 },
        ],
      },
    ],
  });

  const [result, setResult] = useState({});

  function onAnswerClickHandler(answerId: number) {
    const question = quizState.quiz[quizState.activeQuestion];
    if (question.rightAnswerId === answerId) {
      setResult({ ...result, [question.id]: "success" });
      setquizState({
        ...quizState,
        answerState: { [answerId]: "success" },
      });

      const timeout = setTimeout(() => {
        if (isQuizFinish()) {
          setquizState({ ...quizState, isFinished: true });
        } else {
          setquizState({
            ...quizState,
            activeQuestion: quizState.activeQuestion + 1,
            answerState: null,
          });
          clearTimeout(timeout);
        }
      }, 2000);
    } else {
      setResult({ ...result, [question.id]: "error" });

      setquizState({
        ...quizState,
        answerState: { [answerId]: "error" },
      });
    }
  }

  function isQuizFinish() {
    return quizState.activeQuestion + 1 === quizState.quiz.length;
  }

  function handleRetry() {
    setquizState({
      ...quizState,
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
    });
    setResult({});
  }

  return (
    <div className={clsx(styles.root)}>
      <div className={clsx(styles.quizWrapper)}>
        <h1>Вопросы, испытай себя!!</h1>

        {quizState.isFinished ? (
          <FinishedQuiz
            result={result}
            quiz={quizState.quiz}
            onRetry={handleRetry}
          />
        ) : (
          <ActiveQuiz
            answers={quizState.quiz[quizState.activeQuestion].answers}
            question={quizState.quiz[quizState.activeQuestion].question}
            onAnswerClick={onAnswerClickHandler}
            quizLength={quizState.quiz.length}
            answerNumber={quizState.activeQuestion + 1}
            stateAnswers={quizState.answerState}
          />
        )}
      </div>
    </div>
  );
}
