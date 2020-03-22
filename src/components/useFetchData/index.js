import { useState, useEffect } from 'react';
import api from '../../Services/api';

const useFetchData = (url, type, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function() {
      try {
        setLoading(true);
        const response = await api.get(url);
        if (response.status === 200) {
          type == 'character' ? (
            setData(response.data[0])
          ) : (
            setData(response.data.sort((a, b) =>
              a.name.localeCompare(b.name)))
          )
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export default useFetchData;
