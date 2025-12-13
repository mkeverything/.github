import Link from 'next/link'
import '../styles/globals.css'

const App = () => (
	<div className='h-[100dvh] w-full relative flex flex-col justify-center items-center'>
		<p className='text-4xl select-none'>
			mk means make<span className='animate-logo-pulse'>_</span>
		</p>
		<Link
			href='https://github.com/mkeverything'
			className='text-2xl absolute bottom-16 underline underline-offset-2 hover:opacity-50'
		>
			github
		</Link>
	</div>
)

export default App
