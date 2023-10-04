const css = `
.DisplayCount {
	font-size: 3em;
	font-family: monospace;
	letter-spacing: -0.05rem;
}
`
export default function DisplayCount(props) {
	console.log(props);
	return <div className="DisplayCount fancyText">
		<style>
			{css}
		</style>
		{props.count}
	</div>
}
