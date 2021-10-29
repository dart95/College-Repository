export const perimeter = (a) => {
  return 4 * a;
};
export const square = (a) => {
  return a ** 2;
};

export const diameter = (a) => {
  return Math.sqrt(2 * a ** 2);
};

export const square_circle = (a) => {
  return Math.PI * a ** 2;
};

export const inscribed_circle = (a) => {
  return (Math.PI * a ** 2) / 2;
};

export const circumscribed_circle = (a) => {
  return (Math.PI * a ** 2) / 4;
};
