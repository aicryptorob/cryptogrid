import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import axios from "axios";
import useFetch from "./useFetch";

const GridTable = () => {
	const [query, setQuery] = useState("");
	const inputRef = useRef(null);
	const handleSearch = (e) => {
		setQuery(e.target.value);
		if (query.includes.toString() === data) {
			return <p>{query}</p>;
		}

		// )
	};

	const colunDefs = [
		{ field: "id" },
		// {
		// 	headerName: "Image",
		// 	field: "image",
		// 	width: 10,
		// 	cellRenderer: ({ value }) =>
		// 		`<img style="height: 14px; width: 14px" src=${data.mage} />`,
		// },
		{ field: "current_price" },
		{ field: "market_cap" },
		{ field: "market_cap_rank" },
		{ field: "total_volume" },
		{ field: "high_24h" },
		{ field: "low_24h" },
	];

	const defaults = {
		editable: true,
		filter: true,
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);
	const { data, loading, error } = useFetch(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
	);

	if (loading) {
		return "Loading...";
	}

	if (error) {
		console.log(error);
	}

	return (
		<>
			<form>
				<div className=' font-serif	 items-center mx-auto mt-4 ml-48 mb-8  text-center  justify-center '>
					<input
						ref={inputRef}
						value={inputRef.current}
						onChange={handleSearch}
						placeholder='Search Crypto'
						type='text'
						className='bg-purple-800  text-white pointer flex justify-center place-self-center place-content-center rounded-full w-84 h-10'
					/>
					<div></div>
					{query}
				</div>
			</form>

			<div className=' hidden container mx-auto content-center place-items-center place-content-center '>
				<div className=' '>
					{data?.map((item, key) => {
						return (
							<p key={item.symbol} className='flex content-center gap-2'>
								<Image
									src={item.image}
									width={50}
									height={50}
									alt={"The Image"}
								/>
								{item.id}:{item.current_price}
								{item.market_cap} {item.market_cap_rank} {item.total_volume}{" "}
								{item.high_24h} {item.low_24h}
							</p>
						);
					})}
				</div>
			</div>

			<div className='ag-theme-alpine' style={{ height: 400, width: 1600 }}>
				<AgGridReact
					rowData={data}
					defaultColDef={defaults}
					columnDefs={colunDefs}></AgGridReact>
			</div>
		</>
	);
};

export default GridTable;
