import clsx from "clsx";
import type { Answer } from "types";
import styles from "./AnswerItem.module.scss";

export interface AnswerItemProps {
  answer: Answer;
  stateAnswersClass?: string;
  onAnswerClick: (id: number) => void;
}

export default function AnswerItem(props: AnswerItemProps) {
  const { answer, stateAnswersClass, onAnswerClick } = props;

  function handleClick() {
    onAnswerClick(answer.id);
  }

  return (
    <li
      className={clsx(styles.root, {
        [styles.success]: stateAnswersClass === "success",
        [styles.error]: stateAnswersClass === "error",
      })}
      onClick={handleClick}
    >
      {answer.text}
    </li>
  );
}
