export const scrollTo = (x = 0, y = 0) => {
  window.scrollTo({ top: y, left: x, behavior: 'smooth' });
};
