const isNumberValid = num => Number.isFinite(num);

const maybe = (predicate) => x => predicate(x) ? [x] : [];

const compose = (...fns) => x => {
  return fns.reduce((acc, fn) => fn(acc), x)
};

export const maybeisNumberValid = x => maybe(isNumberValid)(x);
