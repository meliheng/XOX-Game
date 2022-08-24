import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
	const [mark, setMark] = useState('X');
	const resultText = useRef(null);
	useEffect(() => {
		rowControl();
		columnControl();
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
				resultText.current.innerHTML =
					tdElements[0].innerHTML === 'X' ? 'you win' : 'computer win';
				return;
			}
		}
	};
	const columnControl = () => {
		// how many cell in one row, we get this info.
		const tdCountEachRow = document.querySelectorAll('tr[id^="1"] td');
		// we get all of the td elements.
		const tdElements = document.querySelectorAll('td');
		// end of the for loop is cell count in one row. and compare
		// cells in the same column.
		for (let i = 0; i < tdCountEachRow.length; i++) {
			if (
				tdElements[i].innerHTML ===
					tdElements[i + tdCountEachRow.length].innerHTML &&
				tdElements[i + tdCountEachRow.length].innerHTML ===
					tdElements[i + tdCountEachRow.length * 2].innerHTML &&
				tdElements[i].innerHTML !== '' &&
				tdElements[i + tdCountEachRow.length].innerHTML !== '' &&
				tdElements[i + tdCountEachRow.length * 2].innerHTML !== ''
			) {
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
