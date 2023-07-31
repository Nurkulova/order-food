import React, { useRef } from 'react';
import styled  from 'styled-components';
export const MealItemForm = () => {
  const amountInputRef = useRef();

  const focusInput = () => {
    amountInputRef.current.focus();
  };

  return (
      <FormWrapper>
        <InputWrapper>
        {/* <label htmlFor="amount"></label>  */} 
        <button type="button" onClick={focusInput}>
          Amount
        </button>
        <AmountInput
          ref={amountInputRef}
          type="number"
          id="amount"
          min="1"
          step="1"
          defaultValue="1"
        /> </InputWrapper>
      <button type="button">Add</button>
      </FormWrapper>
  );
};

const FormWrapper = styled('div')`
display:flex;
flex-direction:column;
gap:10px;
`
const InputWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  & > button {
    border:none;
    background-color:rgba(255, 255, 255, 1);
    font-weight:600;
}
`;

const AmountInput = styled('input')`
  width:60px;
  border-radius: 6px;
`