import * as Dialog from '@radix-ui/react-dialog'
interface NoteCardProps {
    note: {
        date: Date
        content: string
    }
}

export function NoteCard({ note }: NoteCardProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger className='rounded-md text-left bg-slate-700 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-lime-400 outline-none'>

                <span className='text-sm font-medium text-slate-300'>{note.date.toISOString()}</span>
                <p className='leading-6 text-sm text-slate-400'>{note.content}</p>
                <div className='absolute bottom-0 left-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/50'>
                    <Dialog.Content className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
                        <div className='flex flex-1 flex-col gap-3 p-5'>
                            <span className='text-sm font-medium text-slate-300'>{note.date.toISOString()}</span>
                            <p className='leading-6 text-sm text-slate-400'>{note.content}</p>

                        </div>
                    </Dialog.Content>

                </Dialog.Overlay>

            </Dialog.Portal>
        </Dialog.Root>
    )

}