import * as React from "react"
export const HISTORY_ID = 'CalculateCommentHistory';
function getHistory() {
	const history = (window.localStorage.getItem(HISTORY_ID));
	if (history) { return JSON.parse(history) }
	else { console.info("No history")}
	return null
}
export default function History() {
  const [state, setState] = React.useState(getHistory)
	if (!state) { return <div>No History</div> }
	return <div>
		History
	</div>
}
