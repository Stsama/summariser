import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="logo" className="w-28 object-contain" />
            <button
            type="button"
            onClick={() => {window.open('https://github.com/Stsama/summariser.git')}}
            className='black_btn'>
                View on GitHub
            </button>
        </nav>
        <h1 className="head_text">
            Summarize Articles with <br className='max-md:hidden' /> <span className="orange_gradient">EzoulsonAI</span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with sumz an AI-powered article summarizer
            that transforms lengthy articles into clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero