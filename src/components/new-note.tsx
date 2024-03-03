import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'
interface NewNoteCardProps {
    onNoteCreated: (content: string) => void
}
export function NewCard({ onNoteCreated }: NewNoteCardProps) {
    const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true)
    const [content, setContent] = useState('')
    const [isRecording, setIsRecording] = useState(false)
    function handleStartEditor() {
        setShouldShowOnBoarding(false)
    }
    function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)

        if (event.target.value === '') {
            setShouldShowOnBoarding(true)
        }
    }
    function handleSaveNote(event: FormEvent) {
        event.preventDefault()
        // console.log(content)
        if (content === '') {
            return
        }

        onNoteCreated(content)
        setContent('')
        setShouldShowOnBoarding(true)
        toast.success('Nota criada!')
    }

    function handleStartRecording() {
        setIsRecording(true)

        const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window
            || 'webkitSpeechRecognition' in window
        if (!isSpeechRecognitionAPIAvailable) {
            alert('Infelizmente seu navegador não suporta a API de gravação!')
            return
        }
        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
        const speechRecognition = new SpeechRecognitionAPI()
        speechRecognition.continuous = true
        speechRecognition.maxAlternatives = 1
        speechRecognition.interimResults = true
        speechRecognition.onresult = (event) => {
            console.log(event.results)
        }
        speechRecognition.onerror = (event) => {
            console.log(event)

        }
        speechRecognition.start()
    }
    function handleStopRecording() {
        setIsRecording(false)
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger className='rounded-md flex flex-col gap3 bg-slate-700 p-5 text-left  outline-none over:ring-2 hover:ring-slate-600 focus-visible:ring-lime-400'>

                <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
                <p className='leading-6 text-sm text-slate-400'>Grave uma nota em áudio que será convertido para texto automaticamente</p>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/50'>
                    <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>
                        <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400  hover:text-slate-100'>
                            <X className='size-5' />
                        </Dialog.Close>
                        <form className='flex-1 flex flex-col'>

                            <div className='flex flex-1 flex-col gap-3 p-5'>
                                <span className='text-sm font-medium text-slate-300'>
                                    Adicionar Nota
                                </span>
                                {
                                    shouldShowOnBoarding ? (
                                        <p className='leading-6 text-sm text-slate-400'>
                                            Comece <button className='font-medium text-lime-400 hover:underline' type='button' onClick={handleStartRecording}>gravando um áudio</button> ou  <button type='button' className='font-medium text-lime-400 hover:underline' onClick={handleStartEditor}>adicionar um texto</button>.
                                        </p>

                                    ) : (
                                        <textarea
                                            autoFocus
                                            className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                                            onChange={handleContentChanged}
                                            value={content}
                                        />
                                    )
                                }
                            </div>
                            {
                                isRecording ? (
                                    <button type='button'
                                        className='w-full flex items-center justify-center gap-3 bg-slate-900 py-4 text-center text-sm text-slate-300 outline-none font-medium hover:text-slate-100'
                                        onClick={handleStopRecording}>
                                        <div className='size-3 rounded-full bg-red-500 animate-pulse' />
                                        Gravando, clique para interromper...
                                    </button>


                                ) : (
                                    <button type='button'
                                        className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500'
                                        onClick={handleSaveNote}>
                                        Salvar nota
                                    </button>

                                )
                            }


                        </form>
                    </Dialog.Content>

                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root >
    )
}