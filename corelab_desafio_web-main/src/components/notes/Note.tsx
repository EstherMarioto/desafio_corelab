import { StarIcon } from '../icons/Star';
import { PaperPlaneRight, Pencil, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { TNote } from '../../types/notes';
import { PaintColors } from './PopoverColors';
import { getContrastColor } from '../../utils/getContrastColor';
import {
  useDeleteMutation,
  useUpdateMutation,
} from '../../services/mutations/notes';
import { toast } from 'react-toastify';
import { queryClient } from '../../main';
import { DeleteConfirmationModal } from '../modal/DeleteConfirmation';

interface NoteProps {
  note: TNote;
}

export function Note({ note }: NoteProps) {
  const { mutate: mutateUpdateNote } = useUpdateMutation();

  const [isModalToDeleteOpen, setIsModalToDeleteOpen] = useState(false);
  const { mutate: mutateDeleteNote } = useDeleteMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  function deleteNote() {
    mutateDeleteNote(note.id as number, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({ queryKey: ['get-all-notes'] });
        toast.success(response.message);
        setIsModalToDeleteOpen(false);
      },
      onError: () => {
        toast.error('Erro ao excluir nota!');
      },
    });
  }

  function handleOpenModalToDelete() {
    setIsModalToDeleteOpen(true);
  }

  function handleUpdateNote(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    mutateUpdateNote(
      { title, description, id: note.id },
      {
        onSuccess: (response) => {
          queryClient.invalidateQueries({ queryKey: ['get-all-notes'] });
          toast.success(response.message);
        },
        onError: () => {
          toast.error('Erro ao atualizar nota!');
        },
      }
    );

    setIsEditing(false);
  }

  function handleChangeFavorite() {
    mutateUpdateNote(
      { ...note, id: note.id, isFavorite: !note.isFavorite },
      {
        onSuccess: (response) => {
          queryClient.invalidateQueries({ queryKey: ['get-all-notes'] });
          toast.success(response.message);
        },
        onError: () => {
          toast.error('Erro ao atualizar nota!');
        },
      }
    );
  }

  useEffect(() => {
    setTitle(note.title);
    setDescription(note.description);
    setIsEditing(false);
  }, [note.description, note.title]);

  return (
    <>
      <DeleteConfirmationModal
        deleteNote={deleteNote}
        isOpen={isModalToDeleteOpen}
        setIsOpen={setIsModalToDeleteOpen}
      />

      <div
        style={{ background: note.bgColor }}
        className='bg-white w-[390px] h-full rounded-[25px] py-[17px] text-text_text shadow-notes'
      >
        <form onSubmit={(event) => handleUpdateNote(event)}>
          <div className='flex justify-between items-center pl-[22px] pr-[17px] mb-3.5'>
            {!isEditing ? (
              <>
                <h6
                  style={{ color: getContrastColor(note?.bgColor) }}
                  className='text-sm leading-[18px] font-bold'
                >
                  {note.title}
                </h6>
                <StarIcon
                  onClick={handleChangeFavorite}
                  fillColor={note.isFavorite ? '#FFA000' : '#FFFFFF'}
                  className='hover:cursor-pointer'
                />
              </>
            ) : (
              <>
                <input
                  style={{ color: getContrastColor(note?.bgColor) }}
                  autoFocus
                  required
                  onChange={(event) => setTitle(event.target.value)}
                  value={title}
                  type='text'
                  className='text-sm font-bold leading-[18px] placeholder:placeholder-placeholder_text_title outline-transparent bg-inherit outline-none'
                  placeholder='Título'
                />

                <StarIcon
                  onClick={handleChangeFavorite}
                  fillColor={note.isFavorite ? '#FFA000' : '#FFFFFF'}
                  className='hover:cursor-pointer'
                />
              </>
            )}
          </div>

          <hr className='my-3.5 border-border_input' />

          {!isEditing ? (
            <h6
              style={{ color: getContrastColor(note?.bgColor) }}
              className='text-[13px] leading-4 pl-[23px] pr-10 min-h-[438px] h-full'
            >
              {note.description}
            </h6>
          ) : (
            <div className='relative min-h-[438px]'>
              <div className='px-[22px] h-full mr-6'>
                <textarea
                  style={{ color: getContrastColor(note?.bgColor) }}
                  required
                  rows={26}
                  onChange={(event) => setDescription(event.target.value)}
                  value={description}
                  className='text-[13px] h-full thin leading-4 text-gray-500 placeholder:placeholder-placeholder_text_text w-full resize-none outline-none bg-inherit'
                  placeholder='Editar nota...'
                />
                <button type='submit'>
                  <PaperPlaneRight
                    style={{ color: getContrastColor(note?.bgColor) }}
                    weight='thin'
                    className='absolute hover:cursor-pointer right-4 top-0 text-header'
                    size={24}
                  />
                </button>
              </div>
            </div>
          )}
        </form>

        <div className='px-6 flex justify-between items-center'>
          <div className='flex gap-[15px] items-center'>
            <div
              className={`p-2 hover:cursor-pointer hover:bg-paint rounded-full transition-all ${
                isEditing ? 'bg-paint' : ''
              }`}
            >
              <Pencil
                onClick={() => setIsEditing((prev) => !prev)}
                style={{ color: getContrastColor(note?.bgColor) }}
                size={24}
              />
            </div>

            <PaintColors noteProps={note} />
          </div>
          <Trash
            style={{ color: getContrastColor(note?.bgColor) }}
            onClick={handleOpenModalToDelete}
            size={24}
            className='hover:cursor-pointer text-red-400'
          />
        </div>
      </div>
    </>
  );
}
