import clsx from 'clsx'
import { useState } from 'react'
import { Button } from '../../components/Button'
import Input from '../../components/Navigation/Input/Input'
import { Select } from '../../components/Navigation/Select'
import styles from './QuizCreator.module.scss'

export default function QuizCreator() {
  const [quizForm, setquizForm] = useState({
    quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls(),
  })

  function createControl(config, validation) {
    return {
      ...config,
      validation,
      valid: !validation,
      touched: false,
      value: '',
    }
  }

  function validate(value, validation = null) {
    if (!validation) {
      return true
    }
    let isValid = true
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    return isValid
  }

  function validateForm(formControl) {
    let isFormValid = true

    for (let control in formControl) {
      isFormValid = formControl[control].valid && isFormValid
    }

    return isFormValid
  }

  function createOptionControl(number) {
    return createControl(
      {
        label: `Ответ: ${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number,
      },

      { required: true }
    )
  }

  function createFormControls() {
    return {
      question: createControl(
        {
          label: 'Введите вопрос:',
          errorMessage: 'Вопрос не может быть пустым',
        },
        { required: true }
      ),
      option1: createOptionControl(1),
      option2: createOptionControl(2),
      option3: createOptionControl(3),
      option4: createOptionControl(4),
    }
  }

  function submitHandler(event) {
    event.preventDefault()
  }

  function addAskHandler(event) {
    event.preventDefault()

    const quiz = quizForm.quiz.concat()
    const index = quiz.length + 1

    const { question, option1, option2, option3, option4 } =
      quizForm.formControls

    const quistionItem = {
      question: question.value,
      id: index,
      rightAnswerId: quizForm.rightAnswerId,
      answer: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option4.id },
        { text: option4.value, id: option4.id },
      ],
    }
    quiz.push(quistionItem)
    setquizForm({
      ...quizForm,
      quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    })
  }

  function createQuizHandler(event) {
    event.preventDefault()

    console.log(quizForm.quiz)
  }

  function selectChangeHandler(event) {
    setquizForm({ ...quizForm, rightAnswerId: event.target.value })
  }

  function chageHandler(value, controlName) {
    const formControls = { ...quizForm.formControls }
    const control = { ...formControls[controlName] }

    control.touched = true
    control.value = value
    control.valid = validate(control.value, control.validation)

    formControls[controlName] = control

    setquizForm({
      ...quizForm,
      formControls,
      isFormValid: validateForm(formControls),
    })
  }

  function renderControlsInput() {
    return Object.keys(quizForm.formControls).map((controlName, index) => {
      const control = quizForm.formControls[controlName]

      return (
        <div key={controlName + index}>
          <Input
            key={controlName + index}
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) => chageHandler(event.target.value, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </div>
      )
    })
  }
  return (
    <div className={clsx(styles.root)}>
      <div>
        <h1>Создание теста</h1>

        <form onSubmit={submitHandler}>
          {renderControlsInput()}

          <Select
            label="Выберите правильный ответ"
            value={quizForm.rightAnswerId}
            onChange={selectChangeHandler}
            options={[
              { text: 1, value: 1 },
              { text: 2, value: 2 },
              { text: 3, value: 3 },
              { text: 4, value: 4 },
            ]}
          />

          <fieldset>
            <Button
              type={'primary'}
              onClick={addAskHandler}
              disabled={!quizForm.isFormValid}
            >
              Добавить вопрос
            </Button>
            <Button
              type={'second'}
              onClick={createQuizHandler}
              disabled={quizForm.quiz.length === 0}
            >
              Создать тест
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
