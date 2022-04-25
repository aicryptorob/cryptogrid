import React from "react";
import { Card } from "../components/Card";
import { Dashboard } from "../components/Dashboard";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function index() {
	return (
		<div>
			<Header />
			<Dashboard />
			<Footer />
		</div>
	);
}
