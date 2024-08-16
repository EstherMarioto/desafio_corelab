import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { PaintIcon } from '../icons/Paint';
import { TNote } from '../../types/notes';
import { Palette } from 'phosphor-react';
import { createElement } from 'react';
import React from 'react';
import { getContrastColor } from '../../utils/getContrastColor';
import { useUpdateMutation } from '../../services/mutations/notes';
import { queryClient } from '../../main';
import { toast } from 'react-toastify';

const bols = [
  '#BAE2FF',
  '#B9FFDD',
  '#FFE8AC',
  '#FFCAB9',
  '#F99494',
  '#9DD6FF',
  '#ECA1FF',
  '#DAFF8B',
  '#FFA285',
  '#CDCDCD',
  '#979797',
  '#A99A7C',
  Palette,
];

interface PaintColorProp {
  noteProps: TNote;
}

export function PaintColors({ noteProps }: PaintColorProp) {
  const { mutate: mutateUpdateColor } = useUpdateMutation();

  function changeBgNoteColor(bgColor: string) {
    mutateUpdateColor(
      { ...noteProps, bgColor },
      {
        onSuccess: (response) => {
          queryClient.invalidateQueries({ queryKey: ['get-all-notes'] });
          toast.success(response.message);
        },
        onError: () => {
          toast.error('Erro ao alterar cor da nota!');
        },
      }
    );
  }

  return (
    <Popover>
      <PopoverButton className='p-2 hover:cursor-pointer hover:bg-paint rounded-full transition-all data-[open]:bg-paint data-[open]:outline-paint outline-paint'>
        <PaintIcon
          fillColor={getContrastColor(noteProps.bgColor)}
          className='size-6'
        />
      </PopoverButton>

      <PopoverPanel
        anchor='bottom start'
        className='flex items-center flex-wrap min-h-12 max-h-36 rounded-[9px] bg-white border shadow-custom px-2 gap-2 py-2'
      >
        {bols.map((color, index) => (
          <React.Fragment key={index}>
            {bols.length - 1 === index ? (
              <div className='relative overflow-hidden'>
                {createElement(color, {
                  size: 32,
                  onClick: () => document.getElementById('colorInput')?.click(),
                })}

                <input
                  onChange={(event) => changeBgNoteColor(event.target.value)}
                  className='absolute opacity-0 cursor-pointer'
                  id='colorInput'
                  type='color'
                  onInput={(e) => e.stopPropagation()} // Para evitar fechamento do input ao clicar
                />
              </div>
            ) : (
              <div
                onClick={() => changeBgNoteColor(color as string)}
                className='size-9 rounded-full hover:brightness-90 transition-all cursor-pointer'
                style={{ backgroundColor: color as string }}
                key={index}
              />
            )}
          </React.Fragment>
        ))}
      </PopoverPanel>
    </Popover>
  );
}
// setNotes((prev) => {
//   const newList = prev.map((note) => {
//     if (note.id === noteProps.id) {
//       return { ...note, bgColor };
//     } else {
//       return note;
//     }
//   });

//   return newList;
// });
