const useSessionStorage = () => {
  const setItem = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
  };

  return { setItem, getItem };
};

export default useSessionStorage;
