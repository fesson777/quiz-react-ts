import clsx from 'clsx'
import styles from './Select.module.scss'

export default function Select(props) {
  const { label, value, onChange, options, ...rest } = props

  const htmlFor = `${label}-${Math.random()}`
  return (
    <div className={clsx(styles.root)}>
      <label htmlFor={htmlFor}>{label}</label>
      <select id={htmlFor} value={value} onChange={onChange} {...rest}>
        {options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          )
        })}
      </select>
    </div>
  )
}
