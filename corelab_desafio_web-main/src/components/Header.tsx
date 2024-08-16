import { MagnifyingGlass, X } from 'phosphor-react';
import logo from '../assets/logo.svg';

interface HeaderProps {
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  filterValue: string;
}

export function Header({ filterValue, setFilterValue }: HeaderProps) {
  return (
    <div className='h-[57px] md:px-9 px-3 py-3 bg-white flex items-center mb-[25px] justify-between shadow-header'>
      <div className='flex items-center'>
        <img className='md:mr-0 mr-3' src={logo} alt='CoreNotes' />
        <h6 className='text-sm ml-[18px] mr-7 text-header hidden md:block'>
          CoreNotes
        </h6>
        <div className='relative'>
          <input
            onChange={(event) => setFilterValue(event.target.value)}
            value={filterValue}
            type='text'
            placeholder='Pesquisar notas'
            className='md:w-[531px] w-full h-7 rounded-[3px] text-[9px] outline-gray-300 text-gray-500 border border-border_input px-2.5 placeholder-placeholder placeholder:text-[9px] shadow-custom'
          />
          <MagnifyingGlass
            size={13}
            className='absolute right-2.5 top-1/4 text-icon_search'
          />
        </div>
      </div>
      <X
        onClick={() => setFilterValue('')}
        size={22}
        className='text-icon hover:cursor-pointer'
      />
    </div>
  );
}
