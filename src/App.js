import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
	const [mark, setMark] = useState('X');
	const resultText = useRef(null);
	useEffect(() => {
		rowControl();
	}, [mark]);
	const rowControl = () => {
		for (let i = 1; i <= 3; i++) {
			const tdElements = document.querySelectorAll(`tr[id^="${i}"] td`);
			if (
				tdElements[0].innerHTML === tdElements[1].innerHTML &&
				tdElements[1].innerHTML === tdElements[2].innerHTML &&
				tdElements[0].innerHTML !== '' &&
				tdElements[1].innerHTML !== '' &&
				tdElements[2].innerHTML !== ''
			) {
				console.log('winnn');
				resultText.current.innerHTML =
					tdElements[0].innerHTML === 'X' ? 'you win' : 'computer win';
				return;
			}
		}
	};
	const writeMark = (e) => {
		e.target.innerHTML = mark;
		setMark((prevState) => {
			return prevState === 'X' ? 'O' : 'X';
		});
	};
	return (
		<div className='App'>
			<h3 ref={resultText}></h3>
			<table>
				<tbody>
					<tr id='1'>
						<td onClick={(e) => writeMark(e)}></td>
						<td onClick={(e) => writeMark(e)}></td>
						<td onClick={(e) => writeMark(e)}></td>
					</tr>
					<tr id='2'>
						<td onClick={(e) => writeMark(e)}></td>
						<td onClick={(e) => writeMark(e)}></td>
						<td onClick={(e) => writeMark(e)}></td>
					</tr>
					<tr id='3'>
						<td onClick={(e) => writeMark(e)}></td>
						<td onClick={(e) => writeMark(e)}></td>
						<td onClick={(e) => writeMark(e)}></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
