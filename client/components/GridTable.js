import React, { useState, useEffect } from "react";
import Image from "next/image";

import axios from "axios";
import useFetch from "./useFetch";

const GridTable = () => {
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
			<div className='container mx-auto content-center place-items-center place-content-center '>
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
								{item.price_change_24h} {item.price_change_percentage_24h}{" "}
								{item.circulating_supply}
							</p>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default GridTable;
