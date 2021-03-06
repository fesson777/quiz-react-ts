export function validate(value, validation = null) {
  if (!validation) {
    return true
  }
  let isValid = true
  if (validation.required) {
    isValid = value.trim() !== '' && isValid
  }
  return isValid
}

export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: '',
  }
}

export function createOptionControl(number) {
  return createControl(
    {
      label: `Ответ: ${number}`,
      errorMessage: 'Значение не может быть пустым',
      id: number,
    },

    { required: true }
  )
}
