import { useMutation } from '@tanstack/react-query';
import { TNote } from '../../types/notes';
import { api } from '../api';

interface CreateNoteResponse {
  message: string;
  data: TNote;
}

export const createNote = async (body: TNote): Promise<CreateNoteResponse> => {
  const response = await api.post('/note', body);

  return response.data;
};

export const useCreateMutation = () => {
  return useMutation({ mutationFn: createNote });
};

export const deleteNote = async (noteId: number) => {
  const response = await api.delete(`/note/${noteId}`);

  return response.data;
};

export const useDeleteMutation = () => {
  return useMutation({ mutationFn: deleteNote });
};

export const updateNote = async (body: TNote) => {
  const response = await api.put(`/note/${body.id}`, {
    bg_color: body.bgColor,
    description: body.description,
    is_favorite: body.isFavorite,
    title: body.title,
  });

  return response.data;
};

export const useUpdateMutation = () => {
  return useMutation({ mutationFn: updateNote });
};
