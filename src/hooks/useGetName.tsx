const useGetName = () => {
  const getName = (array: object[], id: string) => {
    const ArrayObject: any = array.find((item: any) => {
      return item._id === id;
    });

    return ArrayObject.name;
  };

  return { getName };
};

export default useGetName;
