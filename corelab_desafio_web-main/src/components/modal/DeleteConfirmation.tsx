import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

interface DeleteConfirmationProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteNote(): void;
}

export function DeleteConfirmationModal({
  isOpen,
  setIsOpen,
  deleteNote,
}: DeleteConfirmationProps) {
  function close() {
    setIsOpen(false);
  }

  return (
    <Dialog
      open={isOpen}
      as='div'
      className='relative z-10 focus:outline-none'
      onClose={close}
    >
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 bg-black/30'>
          <DialogPanel
            transition
            className='w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
          >
            <DialogTitle as='h3' className='text-lg/6 font-bold text-text_text'>
              Excluir nota
            </DialogTitle>

            <p className='mt-2 text-sm/6 text-text_text'>
              Tem certeza que deseja excluir essa nota?
            </p>
            <div className='mt-4 w-full flex gap-2'>
              <Button
                className='inline-flex w-full items-center gap-2 rounded-md bg-white border-gray-700 border text-gray-700 py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:text-white data-[open]:bg-gray-700'
                onClick={close}
              >
                Cancelar
              </Button>

              <Button
                className='inline-flex w-full items-center gap-2 border rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700'
                onClick={deleteNote}
              >
                Confirmar
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
