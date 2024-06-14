import { useState, useEffect } from 'react';

const usePersistedState = (initialState, sessionStorageKey) => {
 const [state, setState] = useState(() => {
  const persistedValue = sessionStorage.getItem(sessionStorageKey);

  return persistedValue ? JSON.parse(persistedValue) : initialState;
 });
 useEffect(() => {
  sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
 }, [state, sessionStorageKey]);
 return [state, setState];
};

export const useSearchShows = () => {
 return usePersistedState('', 'searchString');
};
