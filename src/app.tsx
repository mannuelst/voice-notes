import logo from './assets/Logo.svg'
import { NewCard } from './components/new-note'
import { NoteCard } from './components/note-card'


function App() {
  return (
    <>
      <div className='mx-auto max-w-6xl my-12 space-y-6 '>
        <img src={logo} alt='nlw-expert' />
        <form className='w-full'>
          <input type="text" name="" id="" placeholder='Busque em suas notas...'
            className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
          />
        </form>
        <div className='h-px bg-slate-700' />
        <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
          <NewCard />
          <NoteCard note={{ date: new Date(), content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }} />
        </div>


      </div>

    </>
  )
}

export default App
