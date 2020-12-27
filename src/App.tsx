import { ThemeProvider } from 'styled-components';
import 'modern-normalize';

import Button from './components/Button';
import { theme } from './theme';
import Card from './components/Card';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App" style={{ padding: '40px' }}>
				<h1>Here goes our components</h1>
				<h3>Button</h3>
				<Button type="primary" onClick={() => {}}>
					Hello Button
				</Button>
				<h3>Card</h3>
				<Card
					heading="Hello World"
					image="https://images.unsplash.com/photo-1608831381472-3c4d35601ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1685&q=80"
				>
					<div>
						<h2>So this is subheading</h2>
						<div className="image">
							<img src="https://images.unsplash.com/photo-1608831381472-3c4d35601ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1685&q=80" />
						</div>
						<p>Some text stuff.</p>
					</div>
				</Card>
			</div>
		</ThemeProvider>
	);
}

export default App;
