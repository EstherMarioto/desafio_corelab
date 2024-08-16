import { useState } from 'react';
import { StarIcon } from '../icons/Star';
import { PaperPlaneRight } from 'phosphor-react';
import { useCreateMutation } from '../../services/mutations/notes';
import { queryClient } from '../../main';
import { toast } from 'react-toastify';

export function NewNote() {
  const { mutate: mutateCreateNote, isPending } = useCreateMutation();

  const [isFavorite, setIsFavorite] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function createNewNote(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const newNote = {
      title,
      description,
      isFavorite,
    };

    mutateCreateNote(newNote, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({ queryKey: ['get-all-notes'] });
        toast.success(response.message);
      },
      onError: () => {
        toast.error('Erro ao criar nota!');
      },
    });

    setTitle('');
    setDescription('');
    setIsFavorite(false);
  }

  return (
    <div className='flex justify-center mb-10'>
      <fieldset disabled={isPending}>
        <form
          onSubmit={(event) => createNewNote(event)}
          className={`md:w-[531px] w-full min-h-[104px] h-full rounded-[3px] border border-border_input py-3.5 shadow-custom ${
            isPending ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          <div className='flex items-center justify-center h-full relative z-50'>
            {isPending && <div className='loader absolute top-6' />}
          </div>

          <div className='flex justify-between items-center pl-[22px] pr-[17px] mb-3.5'>
            <input
              required
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              type='text'
              className='text-sm font-bold leading-[18px] placeholder:placeholder-placeholder_text_title outline-transparent bg-inherit'
              placeholder='Título'
            />

            <StarIcon
              onClick={() => setIsFavorite((prev) => !prev)}
              fillColor={isFavorite ? '#FFA000' : '#FFFFFF'}
              className='hover:cursor-pointer'
            />
          </div>

          <hr className='border_input mb-[15px]' />

          <div className='relative'>
            <div className='px-[22px] h-full mr-6'>
              <textarea
                required
                rows={4}
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                className='text-[13px] h-full thin leading-4 text-gray-500 placeholder:placeholder-placeholder_text_text w-full resize-none bg-inherit outline-transparent'
                placeholder='Criar nota...'
              />
              <button type='submit'>
                <PaperPlaneRight
                  weight='thin'
                  className='absolute hover:cursor-pointer right-4 top-0 text-header'
                  size={24}
                />
              </button>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
