import { Header } from './components/Header';
import { NewNote } from './components/notes/NewNote';
import { Notes } from './components/notes/Notes';
import { OpacityTransition } from './components/animations/OpacityTransition';
import { useNotesData } from './services/querys/notes';
import { useState } from 'react';

export function App() {
  const { data: notesData, isLoading } = useNotesData();
  const [filterValue, setFilterValue] = useState('');

  const filteredNotesData = notesData?.filter((note) => {
    const typedValue = filterValue.toLowerCase();

    if (typedValue.length <= 3) {
      return true;
    }

    if (
      note.title.toLowerCase().includes(typedValue) ||
      note.description.toLowerCase().includes(typedValue)
    ) {
      return true;
    }

    return false;
  });

  return (
    <OpacityTransition className='bg-background_gray h-screen overflow-auto'>
      <Header filterValue={filterValue} setFilterValue={setFilterValue} />

      <NewNote />

      <Notes isFetching={isLoading} notes={filteredNotesData} />
    </OpacityTransition>
  );
}
