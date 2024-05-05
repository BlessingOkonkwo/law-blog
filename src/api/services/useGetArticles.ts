import { useState, useEffect } from 'react';
import axiosArticles from '../axios';
import { IArticle } from '@/components/types';

const useGetArticles = () => {
  const [data, setData] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axiosArticles.get('posts');
        if (isMounted) {
          setData(response.data);
          console.log(response.data);
        }
      } catch (error) {
        // @ts-ignore
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
};

export default useGetArticles;