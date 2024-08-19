import ListGroup from './components/ListGroup';

function App() {
	let items = ["red", "blue", "green", "yellow", "orange"];

	return <div><ListGroup items={items} heading='Colors' /></div>
}

export default App;

// hmr: Hot Module replacement.