import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [mark, setMark] = useState('X');

	useEffect(() => {
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
				return;
			}
		}
	}, [mark]);
	const writeMark = (e) => {
		e.target.innerHTML = mark;
		setMark((prevState) => {
			console.log(prevState);
			return prevState === 'X' ? 'O' : 'X';
		});
	};
	return (
		<div className='App'>
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
