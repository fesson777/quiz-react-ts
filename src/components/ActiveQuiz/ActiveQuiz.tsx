import clsx from "clsx";
import { questions } from "containers/Quiz/data";
import AnswerList, { AnswerListProps } from "./AnswerList";
import styles from "./ActiveQuiz.module.scss";

export interface ActiveQuizProps extends AnswerListProps {
  ask: string;
  answerNumber: number;
}

export default function ActiveQuiz(props: ActiveQuizProps) {
  const { answers, ask, answerNumber, answerState, onAnswerClick } = props;

  return (
    <div className={clsx(styles.root)}>
      <p className={clsx(styles.question)}>
        <span>
          <strong> {answerNumber}.</strong>&nbsp;
          {ask}
        </span>

        <small>
          {answerNumber} из {questions.length}
        </small>
      </p>

      <AnswerList
        answers={answers}
        onAnswerClick={onAnswerClick}
        answerState={answerState}
      />
    </div>
  );
}
