import React, { useState, useRef } from 'react'



interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleClick: (e: React.FormEvent) => void;
}


const InputField: React.FC<Props> = ({ todo, setTodo, handleClick }) => {
  // const InputField = ({todo , setTodo}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form className='input'
      onSubmit={(e) => {
        handleClick(e)
        inputRef.current?.blur()
      }}
    >
      <input type='text'
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter the task' />
      <button type='submit'>
        Go
      </button>
    </form>
  )
}

export default InputField
