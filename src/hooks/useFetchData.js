import { useEffect, useState } from 'react';

const useFetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // added an error state to return
  const [data, setData] = useState(null); // added data stateto also return

  useEffect(() => {
    fetch(`${url}`, { method: 'GET' })
      .then((response) => {
        // added a check if response did not go well
        if (!response.ok) {
          throw Error('No coffee beans left, need to go to store...');
        }

        // return response.json(); // only needed with remote endpoint
        setData(url);
        setLoading(false);
        setError(null);
      })
      // only needed with remote endpoint:
      // .then((data) => {
      //   setData(data);
      //   setLoading(false);
      //   setError(null);
      // })
      .catch((error) => {
        setError(error.message); // changed from oldschool alert() to error to state
      });
  }, [url]);

  return { loading, error, data }; // return these values from the custom hook
};

export default useFetchData;
