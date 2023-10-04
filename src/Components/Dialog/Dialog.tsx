import * as React from 'react';

/*
			<Dialog open right withPadding>
				<Selector value={count}/>
			</Dialog>
 */

const css = `
.Overlay {
	position: absolute;
	inset: 0 0 0 0;

	background-color: rgba(0,0,0,0.6);

	z-index: 9000;
}
.Overlay .close:hover {
	outline-width: 2px;
}
.Overlay .close {
	user-select: none;

	font-size: large;
	font-weight: 100;
	font-family: cursive;

	color: rgba(255,255,255,0.4);
	background-color: rgba(40,40,40,0.6);
	outline: 0px solid #4040EF;

	--size: 35px;

	border-radius: calc(var(--size) / 2);
	width: var(--size);
	height: var(--size);
	
	align-items: baseline;

	position: absolute;
	inset: 10px 0 0 10px

}

.ScaleUp{
animation: 200ms ScaleUp;
}

@keyframes ScaleUp {
		0% {
			scale: 0.5;
		}
		100%{
			scale: 1;
		}
}

.Paper {
	background-color: white;
}
`
function getClassesFromProps(props) {
	const allClasses = ['withPadding','open','right','left']
	return allClasses.filter(name=>Boolean(props[name])).join(" ")
}

export default function Dialog(props) {
	const [open, setOpen] = React.useState(true);
	function close() {
		console.log('close', props)
		if (!props.open) {
			setOpen(false)
		} else {
			props.onClose?.()
		}
	}

	function clickAway() {
		// animateShakeOnResist
		// props.resist === true
		close()
	}
	const classes = React.useMemo(()=>getClassesFromProps(props),[props])

	if (!open) return null;

	return (
		<div>
			<style> {css} </style> 

			<div className="Overlay GlobalFlex" onClick={clickAway}>
				<a role="button" onClick={close} className="GlobalFlex GlobalCubicQuad close">x</a>

				<div className={`Paper GlobalCubicQuad ${classes}`}>
					{props?.children}
				</div>
			</div>

		</div>
	)
}

