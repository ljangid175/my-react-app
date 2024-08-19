import Button from "./components/Button";

function App() {
	return (
		<div>
			<Button onClick={()=> {console.log('jai shree ram');
			}}>
				My Button
			</Button>
		</div>
	);
}

export default App;

// hmr: Hot Module replacement.
