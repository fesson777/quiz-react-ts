import clsx from "clsx";
import type { Answer, AnswerState } from "types";
import AnswerItem, { AnswerItemProps } from "./AnswerItem";
import styles from "./AnswerList.module.scss";

export interface AnswerListProps {
  answers: Answer[];
  answerState: AnswerState;
  onAnswerClick: AnswerItemProps["onAnswerClick"];
}

export default function AnswerList(props: AnswerListProps) {
  const { answers, onAnswerClick, answerState } = props;

  return (
    <ul className={clsx(styles.root)}>
      <li>
        {answers.map((answer, i) => {
          return (
            <AnswerItem
              key={i}
              answer={answer}
              onAnswerClick={onAnswerClick}
              stateAnswersClass={answerState[answer.id]}
            />
          );
        })}
      </li>
    </ul>
  );
}
