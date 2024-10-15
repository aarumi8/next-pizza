export const mapPizzaSize = {
    20: 'Small',
    30: 'Medium',
    40: 'Big',
  } as const;
  
  export const mapPizzaType = {
    1: 'classic',
    2: 'thin',
  } as const;
  
  export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
    name,
    value,
  }));
  
  export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
    name,
    value,
  }));
  
  export type PizzaSize = keyof typeof mapPizzaSize;
  export type PizzaType = keyof typeof mapPizzaType;