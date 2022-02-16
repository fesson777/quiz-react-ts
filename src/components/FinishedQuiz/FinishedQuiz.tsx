import clsx from "clsx";
import Button from "components/Button";
import type { AnswerState } from "types";
import { questions } from "containers/Quiz/data";
import styles from "./FinishedQuiz.module.scss";

interface FinishedQuizProps {
  result: AnswerState;
  onRetry: Fn;
}

export default function FinishedQuiz(props: FinishedQuizProps) {
  const { result, onRetry } = props;

  const countScore = Object.values(result).reduce((acc, it) => {
    if (it === "success") acc++;
    return acc;
  }, 0);
  return (
    <div className={clsx(styles.root)}>
      <ul>
        {questions.map((item, index) => {
          let QuizIco =
            result[questions[item.id - 1].id] === "success" ? (
              <i className={clsx(styles.success)}>OK</i>
            ) : (
              <i className={clsx(styles.error)}>X</i>
            );
          return (
            <li key={index}>
              <strong>{index + 1}.</strong>&nbsp;
              <p>{item.ask}</p>
              {QuizIco}
            </li>
          );
        })}
      </ul>
      <p>
        Правильно {countScore} из {questions.length} ответов
      </p>

      <div>
        <Button type="primary" onClick={onRetry}>
          Повторить
        </Button>
        <Button type="second">Перейти в список тестов</Button>
      </div>
    </div>
  );
}

// {/* <li>
//           <strong>1. </strong>
//           <p>How are you?</p>
//           <i className={clsx(styles.success)}>OK</i>
//         </li>
//         <li>
//           <strong>2. </strong>
//           <p>How are you?</p>
//           <i className={clsx(styles.error)}>X</i>
//         </li> */}
