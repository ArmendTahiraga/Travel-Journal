import Header from "./Components/Header";
import Section from "./Components/Section";
import data from "../data/data";
import "./App.css";

export default function App() {
	let key = 1;
	const locationsArray = data.map((location) => {
		return <Section key={key} {...location} />;
	});
	return (
		<>
			<Header />
			{locationsArray}
		</>
	);
}
