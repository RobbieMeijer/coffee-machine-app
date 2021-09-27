import { useEffect, useState } from 'react';

const useFetchData = (theData: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    getData(); // moved fetching data to seperate function
  }, []);

  // cleaned up function
  const getData = async () => {
    try {
      const response = await fetch(theData);
      if (response.ok) {
        setData(theData);
        setLoading(false);
        setError('');
      }
    } catch (error) {
      setError(`${error}`);
    }
  };

  return { loading, error, data }; // return these values from the custom hook
};

export default useFetchData;
