import { StarIcon } from '../icons/Star';

export function NoteSkeleton() {
  return Array.from({ length: 4 }).map((_, index) => (
    <div
      key={index}
      className='bg-gray-300 animate-pulse w-[390px] h-[561px] rounded-[25px] py-[17px] text-text_text shadow-notes'
    >
      <div className='flex justify-between items-center pl-[22px] pr-[17px] mb-3.5'>
        <div className='h-3 w-32 bg-gray-400 rounded-md'></div>

        <StarIcon className='' fillColor='#9A9A9A' />
      </div>

      <hr className='my-3.5 border-gray-400' />

      <div className='px-[22px] h-full mr-6 space-y-3'>
        <div className='h-3 w-80 bg-gray-400 rounded-md'></div>
        <div className='h-3 w-64 bg-gray-400 rounded-md'></div>
      </div>
    </div>
  ));
}
