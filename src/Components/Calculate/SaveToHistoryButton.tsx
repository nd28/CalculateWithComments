import * as React from 'react'
import { HISTORY_ID } from "./History"

const css=`
.NiceOutLine {
  border: none;

	background-color: rgba(10,20,90,0.2);
  outline: 1px solid rgba(10,20,90,1);

  border-radius: 12px;
	padding: 8px 24px;
`
export default function SaveToHistoryButton({ 
	outerRef, 
	getHistory,
	onSuccess
}) {
	const ref = React.useRef(null)
	outerRef = { click() { ref.current?.click() } }
	console.log({ outerRef, ref })
	return (
		<button 
			ref={ref}
			className="NiceOutLine GlobalFancyBox" 
			type="button" 
			onClick={()=>{
				let data = "";
				console.log("hello")
				try {
				  data = (getHistory());
					console.log(data)
					// append to history
					const history = JSON.parse(
					window.localStorage.getItem(HISTORY_ID)
					) ?? [];
					const newHistory = JSON.stringify([...history, data])
					window.localStorage.setItem(HISTORY_ID, newHistory)
				} catch(e) {
					console.log(e)
					return;
				}
				// at this point everything went as expected, lets run the success callback
				onSuccess()
			}} 
			role="button"
		>
			<style>{css}</style>

			Save
		</button>
	)
}
