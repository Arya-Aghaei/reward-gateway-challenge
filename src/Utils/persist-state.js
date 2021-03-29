export const persistState = (storageKey, state) => {
  sessionStorage.setItem(storageKey, JSON.stringify(state));
};

export const getInitialState = (storageKey) => {
  const savedState = sessionStorage.getItem(storageKey);
  try {
    if (!savedState) {
      return undefined;
    }
    return JSON.parse(savedState ?? "{}");
  } catch (e) {
    console.error("Error loading state :" + storageKey);
    return undefined;
  }
};
