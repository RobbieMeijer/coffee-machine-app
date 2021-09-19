const useSessionStorage = () => {
  const setItem = (key: string, value: string) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key: string) => {
    const keyValue: string | null = sessionStorage.getItem(key);

    if (keyValue === null) {
      return keyValue;
    }

    return JSON.parse(keyValue);
  };

  return { setItem, getItem };
};

export default useSessionStorage;
