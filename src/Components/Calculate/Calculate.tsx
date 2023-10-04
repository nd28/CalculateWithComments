import * as React from "react"
import SaveToHistoryButton from "./SaveToHistoryButton"

const css=`
.ExpressionInput {
	outline: none;
	border: none;
	background-color: transparent;
	font-size: 3em;
	padding: 10px 20px;

}
.Field {
	flex-direction: column;
}
.FlexStart {
	align-items: start;
}
.CommentField {
	align-items: end;
}
.CommentTextArea {
	font-family: cursive;
	background-color: rgb(32 70 135 / 11%);

	outline: none;
	border: none;

	border-radius: 12px;
	padding: 12px 24px
}
`

export default function Calculate(props) {
	// states
	const [tempAnswer, setTempAnswer] = React.useState(null);

	// refs
	const clearTimeoutRef = React.useRef([]);
	const commentInputRef = React.useRef(null);
	const expressionInputRef = React.useRef(null);
	const saveButtonRef = React.useRef(null);


	// handle fns
	// clear the input fields on saved
	function clear () {
		console.log({expressionInputRef,commentInputRef})
		// return;
		commentInputRef.current.value = '';
		expressionInputRef.current.value = '';
	}
	function expression(event) {
		// console.log({ clearTimeoutRef });
		// clear out previously registered task
		if (clearTimeoutRef.current.length > 0) {
			// clear and remove
			for(let timeoutId of clearTimeoutRef.current) {
				clearTimeout(timeoutId)
			}
			clearTimeoutRef.current = [];
		}
		// register new task
		clearTimeoutRef.current.push(
			setTimeout(() => {
				try {
					const tempAnswer = eval(event.target.value)
					console.log({ tempAnswer })
					setTempAnswer(tempAnswer)
				} catch (e) { console.log(e) }
			} ,1000 / 2)
		)
		// debug purpose only
		// console.log({ clearTimeoutRef });
	}
	// this will create and send data to be used for history
	const getHistory = cb => {
		console.log({ expressionInputRef, tempAnswer, commentInputRef, })
		const data = {
			expression: expressionInputRef.current.value,
			evaluation: tempAnswer,
			comment: commentInputRef.current.value,
			createdAt: new Date().toLocaleDateString()
		}
		// in case the evaludation is null
		if (!data.evaluation) {
			data.evaluation = eval(data.expression)
		}
		console.log({ data })
		return data;
	}
	// Ctrl+Enter will save the entry
	function onTextAreaKeyPress(event) {
		if (!event.ctrlKey) return;
		if (!event.code === "Enter") return;
		console.log( {saveButtonRef})
	}
	
	return <div>

		<h2>Calculate</h2>

		<style>{css}</style>
	
		<div className="GlobalFlex Field FlexStart">
			<label htmlFor="expression">Expression: </label>
			<input 
			  ref={expressionInputRef}
				className="ExpressionInput" 
				type="text" 
				placeholder="Write expression"
				// defaultValue={"1+2"} 
				onChange={expression} 
				name="expression" 
				id="expression"
			/>
			<span className="ExpressionInput"> = {tempAnswer}</span>
		</div>
	
		<div className="GlobalFlex Field CommentField">
			<label htmlFor="comment">Comment: </label>
			<textarea 
				ref={commentInputRef}
				className="CommentTextArea"
				type="text" 
				placeholder="Enter comment related"
				// defaultValue={"What happens when I add 1 into 2?"} 
				// onChange={comment} 
				name="comment" 
				id="comment"
				onKeyPress={onTextAreaKeyPress}
			/>
		</div>

		<SaveToHistoryButton 
			outerRef={saveButtonRef.current} 
			getHistory={getHistory} 
			onSuccess={clear}
		/>
	</div>
}

