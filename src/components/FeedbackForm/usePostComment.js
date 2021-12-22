import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const postComment = async (formValues) => await axios.post(
  'http://localhost:3001/comments',
  { ...formValues }
);

export const usePostComment = () => {
  const queryClient = useQueryClient();

  const { mutate: addComment, isSuccess, isError } = useMutation(postComment, {
    onSuccess: () => queryClient.invalidateQueries('comments'),
  });

  return { addComment, isSuccess, isError };
};