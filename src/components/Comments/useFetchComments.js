import { useQuery } from 'react-query';
import axios from 'axios';

const fetchComments = async () => await axios.get('http://localhost:3001/comments');

export const useFetchComments = (setComments) => {
  const {
    isLoading,
    isError,
  } = useQuery('comments', fetchComments, {
    retry: 1,
    onSuccess: (comments) => setComments([...comments.data.reverse()]),
  });

  return { isLoading, isError };
};