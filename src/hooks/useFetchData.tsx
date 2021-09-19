import { useEffect, useState } from 'react';

const useFetchData = (theData: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // added an error state to return
  const [data, setData] = useState(null); // added data stateto also return

  useEffect(() => {
    fetch(theData, { method: 'GET' })
      .then((response) => {
        // added a check if response did not go well
        if (!response.ok) {
          throw Error('No coffee beans left, need to go to store...');
        } else {
          setData(theData);
          setLoading(false);
          setError(null);
        }

        // return response.json(); // only needed with remote endpoint
      })
      /* only needed with remote endpoint: */
      // .then((data) => {
      //   setData(data);
      //   setLoading(false);
      //   setError(null);
      // })
      .catch((error) => {
        setError(error.message); // changed from oldschool alert() to error to state
      });
  }, [theData]);

  return { loading, error, data }; // return these values from the custom hook
};

export default useFetchData;
