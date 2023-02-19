import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Bringing your favorite meals to you! </h2>
      <p>
       With just a few taps, you can browse menus, select dishes, customize your orders, and pay securely from your mobile device.
      </p>
      <p>
      Craving Italian? Mexican? Sushi? With our app, you have access to a wide variety of cuisines and restaurants in your area, so you can find exactly what you're in the mood for.
      </p>
    </section>
  );
};

export default MealsSummary;
