import React from 'react';
import {MealItemForm} from './MealItemForm'; // Path to the MealItemForm component
import  styled  from 'styled-components';

export const MealItem = ({title, description, price}) => {
  return (
    <MealCard>
      <div>
        <h3>{title}</h3>
        <i>{description}</i>
        <p>{price}</p>
      </div>
      <div>
        <MealItemForm />
      </div>
    </MealCard>
  );
};

const MealCard = styled('div')`
  max-width: 100%;
  width:960px;
  margin: 0 auto;
  padding: 16px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color:rgba(255, 255, 255, 1);
  & > div {
    display:flex;
    flex-direction:column;
  }
  & > div > p {
    color:rgba(173, 85, 2, 1);
    font-weight:600;
  }
`;
