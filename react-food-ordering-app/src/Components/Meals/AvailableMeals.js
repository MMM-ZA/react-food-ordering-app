import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Red Ramen',
    description: 'A Japanese specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Margherita Pizza',
    description: 'Fresh tomato sauce, mozzarella cheese, and basil',
    price: 14.99,
  },
  {
   id: 'm6',
  name: 'Hamburger',
  description: 'Juicy beef patty with lettuce, tomato, and cheese',
   price: 12.99,
  },
{
  id: 'm7',
  name: 'Chicken Tikka Masala',
  description: 'Tender chicken in a spicy tomato-based sauce',
  price: 18.99,
}

]

const AvailableMeals = () => {
 const mealsList = DUMMY_MEALS.map((meal) => <MealItem
  key={meal.id}
  id={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price}
   /> );

 return (
<section className={classes.meals}>
  <Card>
   <ul>{mealsList}</ul>
   </Card>
</section>
 );
};

export default AvailableMeals;
