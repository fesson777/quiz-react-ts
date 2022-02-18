import clsx from 'clsx'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/Button'
import Input from '../../components/Navigation/Input/Input'
import { authAction } from '../../store/reducers/authReducer'
import styles from './Auth.module.scss'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export default function Auth() {
  const dispatch = useDispatch()
  const {auth} = useSelector(state => state.auth)
 
  const [formState, SetformState] = useState({
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный Email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Введите корректный Пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  })
  function loginHandler() {
    const {email, password} = formState.formControls
    if(auth.email === email.value && auth.password === password.value) {
      console.log('auth success');
    } else {console.log('false');}
  }
  function registerHandler() {   
    const {email, password} = formState.formControls
    const data = {
      email:email.value,
      password:password.value
    }    
    dispatch(authAction(data))    
  }
  function submitHandler(e) {
    e.preventDefault()
  }
  function validateControl(value, validation) {
    if (!validation) {
      return true
    }
    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (validation.email) {
      isValid = validateEmail(value) && isValid
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  function onChangeHandler(event, controlName) {
    const formControls = { ...formState.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach((name) => {
      isFormValid = isFormValid && formControls[name].valid
    })

    SetformState({ ...formState, formControls, isFormValid })
  }

  function renderInputs() {
    return Object.keys(formState.formControls).map((controlName, index) => {
      const control = formState.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => onChangeHandler(event, controlName)}
        />
      )
    })
  }
  return (
    <div className={clsx(styles.root)}>
      <div className="center">
        <h1>Авторизация</h1>

        <form action="" method="post" onSubmit={submitHandler}>
          {renderInputs()}

          <fieldset>
            <Button
              type="second"
              onClick={loginHandler}
              disabled={!formState.isFormValid}
            >
              Войти
            </Button>

            <Button
              type="primary"
              onClick={registerHandler}
              disabled={!formState.isFormValid}
            >
              Зарегистрироваться
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
