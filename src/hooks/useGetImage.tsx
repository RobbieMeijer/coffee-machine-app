const useGetImage = () => {
  const getImage = (name: string) => {
    const imageObject = require(`../assets/${name}.svg`);
    return imageObject.default;
  };

  return { getImage };
};

export default useGetImage;
