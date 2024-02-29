import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export function NewCard() {
    return (
        <Dialog.Root>
            <Dialog.Trigger className='rounded-md flex flex-col gap3 bg-slate-700 p-5 text-left'>

                <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
                <p className='leading-6 text-sm text-slate-400'>Grave uma nota em áudio que será convertido para texto automaticamente</p>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/50'>
                    <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
                        <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400  hover:text-slate-100'>
                            <X className='size-5' />
                        </Dialog.Close>
                        <div className='flex flex-1 flex-col gap-3 p-5'>
                            <span className='text-sm font-medium text-slate-300'>

                            </span>
                            <p className='leading-6 text-sm text-slate-400'>

                            </p>

                        </div>
                        <button type='button'
                            className='w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group'>
                            Deseja <span className='text-red-400 group-hover:underline'>apagar esta nota</span>?
                        </button>
                    </Dialog.Content>

                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root >
    )
}