import { useQuery } from '@tanstack/react-query';
import { TNote } from '../../types/notes';
import { api } from '../api';

export const getAllNotes = async (): Promise<TNote[]> => {
  const response = await api.get('/note');

  return response.data;
};

export const useNotesData = () => {
  return useQuery({
    queryKey: ['get-all-notes'],
    queryFn: getAllNotes,
  });
};
