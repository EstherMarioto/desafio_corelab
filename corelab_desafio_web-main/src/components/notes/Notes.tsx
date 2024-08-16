import { TNote } from '../../types/notes';
import { NoteSkeleton } from '../skeleton/noteSkeleton';
import { Note } from './Note';

interface NotesProps {
  notes: TNote[] | undefined;
  isFetching: boolean;
}

export function Notes({ notes, isFetching }: NotesProps) {
  const favoriteNotes = notes?.filter((note) => note.isFavorite);
  const otherNotes = notes?.filter((note) => !note.isFavorite);

  return (
    <>
      <div className='lg:mx-[106px] mx-6 mb-6'>
        {favoriteNotes?.length === 0 && otherNotes?.length === 0 ? (
          <p className='text-center text-gray-400 font-medium'>
            Nenhuma nota encontrada!
          </p>
        ) : (
          <>
            {favoriteNotes?.length === 0 ? (
              <p className='text-center text-gray-400 font-medium'>
                Nenhuma nota favorita encontrada!
              </p>
            ) : (
              <p className='text-text_title text-sm mb-2 pl-6 lg:text-left text-center'>
                Favoritas
              </p>
            )}

            <div className='flex gap-[34px] flex-wrap lg:justify-normal justify-center'>
              {isFetching ? (
                <NoteSkeleton />
              ) : (
                <>
                  {favoriteNotes?.map((note, index) => (
                    <Note note={note} key={index} />
                  ))}
                </>
              )}
            </div>

            {otherNotes?.length === 0 ? (
              <p className='text-center text-gray-400 font-medium'>
                Nenhuma nota encontrada!
              </p>
            ) : (
              <p className='text-text_title text-sm mb-2 mt-6 pl-6 lg:text-left text-center'>
                Outras
              </p>
            )}
          </>
        )}

        <div className='flex gap-[34px] flex-wrap lg:justify-normal justify-center'>
          {isFetching ? (
            <NoteSkeleton />
          ) : (
            <>
              {otherNotes?.map((note, index) => (
                <Note note={note} key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
