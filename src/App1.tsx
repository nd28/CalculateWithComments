import { useState } from 'react'
import './App.css'
import { Calculate, 
History, 
ToggleHistoryButton } from "./Components/Calculate"
import { Dialog } from "./Components/Dialog"
import { Selector } from "./Components/Selector"

// History is reading purpose, I wouldn't wanna lose my calculations
// import { History } from "./Components/Calculate"
function App() {
  const [history, setHistory] = useState(false)
  const [calculate, setCalculate] = useState({expression:null, evalResult: null})

	return (
		<div className="Practice">

			<Calculate state={calculate} setState={setCalculate}/>

			<ToggleHistoryButton setHistory={setHistory} />

			<Dialog
				open={history}
				right withPadding 
				onClose={()=>setHistory(!history)}
			>
				<History />
			</Dialog>

		</div>
	)
}

export default App
