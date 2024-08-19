import ListGroup from './components/ListGroup';

function App() {
	let items = ["red", "blue", "green", "yellow", "orange"];
	const handleSelectItem = (item: string) => {
		console.log(item);
	}

	return <div><ListGroup items={items} heading='Colors' onSelectItem={handleSelectItem} /></div>
}

export default App;

// hmr: Hot Module replacement.