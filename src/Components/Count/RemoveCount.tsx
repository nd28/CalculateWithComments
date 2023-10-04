function remove(callback, removeFactor = 1){
	if (typeof callback === 'function') {
		return () => callback(prevState => prevState - removeFactor)
	}
}
export default function RemoveCount(props) {
	console.log(props);
	return <div className="fancyText"><a onClick={remove(props.setCount)}>REMOVE</a></div>
}
