import React, { useState, useRef, useEffect } from "react";
import { cryptoMock } from "../cryptoMock";

export default function Search() {
	const [query, setQuery] = useState("");
	const [matches, setMatches] = useState(cryptoMock.BTC);

	const resetSearch = () => {
		setQuery("");
		setMatches([]);
	};

	const searching = (e) => {
		setQuery(e.target.value);
	};

	const updateMatch = () => {
		setMatches(cryptoMock.BTC);
	};

	return (
		<div className='flex items-center my-4 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
			<input
				className='w-full px-4 py-2 focus:outline-none rounded-md bg-gray-300 '
				value={query}
				type='text'
				placeholder='Search Crypto'
				onChange={searching}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						updateMatch();
					}
				}}
			/>
			<br></br>
			{query}
		</div>
	);
}
