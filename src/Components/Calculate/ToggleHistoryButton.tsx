const css=`
.NiceOutLine {
  border: none;
  
	background-color: rgba(10,20,90,0.2);
  outline: 1px solid rgba(10,20,90,1);

  border-radius: 12px;
	padding: 8px 24px;
`
export default function ToggleHistoryButton({ setHistory }) {
	return (
		<button 
			className="NiceOutLine GlobalFancyBox" 
			type="button" 
			onClick={()=>{setHistory(c=>!c)}} 
			role="button"
		>
			<style>{css}</style>

			Toggle History
		</button>
	)
}
