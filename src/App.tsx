import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DisplayCount, AddCount, RemoveCount } from "./Components/Count"
import { Dialog } from "./Components/Dialog"
import { Selector } from "./Components/Selector"

function App() {
  const [count, setCount] = useState(0)

	return (
		<div className="Practice">

			<DisplayCount count={count} />
			<AddCount setCount={setCount}/>
			<RemoveCount setCount={setCount}/>

			<Dialog right withPadding>
				<Selector value={count}/>
			</Dialog>

		</div>
	)
}

export default App
