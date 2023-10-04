function add(callback, addFactor = 1){
	if (typeof callback === 'function') {
		return () => callback(prevState => prevState + addFactor)
	}
}
export default function AddCount(props) {
	console.log(props)
		return <div className="fancyText"><a onClick={add(props.setCount)}>ADD</a></div>
}
