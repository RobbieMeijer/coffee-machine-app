import { useEffect, useState } from 'react';

const useFetchData = (theData: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // added an error state to return
  const [data, setData] = useState(null); // added data stateto also return

  useEffect(() => {
    getData(); // moved fetching data to seperate function
  }, []);

  // cleaned up function
  const getData = async () => {
    try {
      const response = await fetch(theData);
      setData(theData);
      setLoading(false);
      setError(null);
    } catch (error) {
      throw Error('No coffee beans left, need to go to store...');
    }
  };

  return { loading, error, data }; // return these values from the custom hook
};

export default useFetchData;
