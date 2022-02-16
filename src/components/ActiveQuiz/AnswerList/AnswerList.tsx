import clsx from "clsx";
import AnswerItem from "./AnswerItem";
import styles from "./AnswerList.module.scss";

export default function AnswerList(props: any) {
  const { answers, onAnswerClick, stateAnswers } = props;

  return (
    <ul className={clsx(styles.root)}>
      <li>
        {answers.map((answer: any, index: number) => {
          return (
            <AnswerItem
              key={index}
              answer={answer}
              onAnswerClick={onAnswerClick}
              stateAnswersClass={stateAnswers ? stateAnswers[answer.id] : null}
            />
          );
        })}
      </li>
    </ul>
  );
}
