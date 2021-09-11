const useGetName = () => {
  const getName = (array, id) => {
    const object = array.find((item) => {
      return item._id === id;
    });
    return object.name;
  };

  return { getName };
};

export default useGetName;
