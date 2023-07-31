import React from 'react'
import {MealItem} from './MealItem';
import styled from 'styled-components';

const DUMMY_MEALS = [
    {
      id: 1,
      title: "Sushi",
      description: "finest fish and veggies",
      price: '$22.99',
    },
    {
      id: 2,
      title: "Pizza",
      description: "finest fish and veggies",
      price: '$16.0',
    },
    {
      id: 3,
      title: "Barbecue",
      description: "finest fish and veggies",
      price: '$12.99',
    },
    {
      id: 4,
      title: "Green Bowl",
      description: "finest fish and veggies",
      price: '$19.99',
    },
   ]; 

export const Meals = () => {
  return (
    <StyledMeals>
      {DUMMY_MEALS.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          title={meal.title}
          description={meal.description}
          price={meal.price}
        />
      ))}
      </StyledMeals>
  )
}

const StyledMeals = styled('div')`
  width: 70%;
  margin: 20px auto;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction:column;
  background-color:rgba(255, 255, 255, 1);
  
`;