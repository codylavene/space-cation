import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotCard from "./components/SpotsCard";
import Footer from "./components/Footer";
import Spots from "./components/Pages/Spots";
import SingleSpot from "./components/Pages/SingleSpot";
import Landing from "./components/Pages/Landing";
import Account from "./components/Account";
import SpotsByType from "./components/Pages/SpotsByType";
import Reservations from "./components/Account/Reservations";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route exact path="/">
						<Landing />
					</Route>
					<Route path="/categories/:type">
						<SpotsByType />
					</Route>
					<Route path="/places/:id">
						<SingleSpot />
					</Route>
					<Route path="/places">
						<Spots isLoaded={isLoaded} />
					</Route>
					<Route exact path="/users/:id">
						<Account isLoaded={isLoaded} />
					</Route>
					<Route path="/users/:id/reservations">
						<Reservations isLoaded={isLoaded} />
					</Route>
				</Switch>
			)}
			<Footer />
		</>
	);
}

export default App;
