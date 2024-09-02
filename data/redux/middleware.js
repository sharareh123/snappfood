export const saveToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(state));
  return result;
};

export const loadFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const savedState = localStorage.getItem('reduxState');
    if (savedState) {
      return JSON.parse(savedState);
    }
  }
  return undefined;
}