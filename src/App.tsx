import Button from './components/Button';
// import 'modern-normalize';

function App() {
	return (
		<div className="App">
			<h1>Here goes our components</h1>
			<h3>Button</h3>
			<Button type="primary" onClick={() => {}}>
				Hello Button
			</Button>
		</div>
	);
}

export default App;
