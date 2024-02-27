import logo from './assets/Logo.svg'

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
          <div className='rounded-md bg-slate-700 p-5 space-y-3'>

            <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
            <p className='leading-6 text-sm text-slate-400'>Grave uma nota em áudio que será convertido para texto automaticamente</p>
          </div>

          <div className='rounded-md bg-slate-700 p-5 space-y-3'>

            <span className='text-sm font-medium text-slate-300'>há 2 dis</span>
            <p className='leading-6 text-sm text-slate-400'>Grave uma nota em áudio que será convertido para texto automaticamente</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
