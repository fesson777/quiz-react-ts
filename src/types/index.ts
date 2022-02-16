export type Answer = {
  id: number;
  text: string;
};

export type AnswerState = Record<number, string>;

export type Question = {
  id: number;
  rightAnswerId: number;
  ask: string;
  answers: Answer[];
};
