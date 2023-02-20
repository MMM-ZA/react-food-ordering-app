import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [enteredAmount, setEnteredAmount] = useState('1');
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const amountInputChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id:'amount' + props.id,
          type:'number',
          min:'1',
          max:'5',
          step:'1',
          defaultValue:'1'
        }}
        onChange={amountInputChangeHandler}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount 1-5 </p>}
    </form>
  );
};

export default MealItemForm;
