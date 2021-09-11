const useGetImage = () => {
  const getImage = (name) => {
    const imageObject = require(`../assets/${name}.svg`);
    return imageObject.default;
  };

  return { getImage };
};

export default useGetImage;
