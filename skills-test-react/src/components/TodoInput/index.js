import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { Actions } from '../../store';

import { CONSTANTS } from '../../constants';

import { 
  Button, 
  Input, 
  Typography 
} from '@mui/material';

const TodoInputComponent = ({ }) => {
  const dispatch = useDispatch();

  const todoForm = useFormik({
    initialValues: {
      todo: '',
    },
    onSubmit: (values, { resetForm }) => {
      const todo = values.todo;
      dispatch(Actions.todo.addTodo({ todo }))
      resetForm();
    },
  });

  return (
    <>
      <Typography variant="h3" sx={{marginBottom: '20px'}}>{CONSTANTS.header.logo}</Typography>
      <form onSubmit={(e) => {
        e.preventDefault();
        todoForm.handleSubmit(e);
      }}>
        <Input id="todo" name="todo" placeholder={CONSTANTS.general.addTodo} onChange={todoForm.handleChange} value={todoForm.values.todo} />
        <Button type="submit" variant="contained" sx={{marginLeft: '5px'}}>{CONSTANTS.general.submit}</Button>
      </form>
    </>
  )
};

export default TodoInputComponent;