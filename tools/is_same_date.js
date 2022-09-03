module.exports = (d1, d2) => {
  const _d1 = new Date(d1);
  const _d2 = new Date(d2);

  return _d1.getTime() === _d2.getTime();
};