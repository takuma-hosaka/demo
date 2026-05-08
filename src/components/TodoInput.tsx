import { useState } from 'react'

interface Props {
  onAdd: (text: string) => void
}

export function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('')

  const submit = () => {
    onAdd(value)
    setValue('')
  }

  return (
    <div className="todo-input-row">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && submit()}
        autoFocus
      />
      <button className="add-btn" onClick={submit}>
        Add
      </button>
    </div>
  )
}
