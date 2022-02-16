import type { Question } from "types";

export const questions: Question[] = [
  {
    ask: "Какого цвета небо?",
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
    ask: "В каком году основали СПб?",
    rightAnswerId: 3,
    id: 2,
    answers: [
      { text: "1700", id: 1 },
      { text: "1705", id: 2 },
      { text: "1703", id: 3 },
      { text: "1803", id: 4 },
    ],
  },
];
