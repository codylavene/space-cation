import React from "react";
import { Link } from "react-router-dom";

const MainImage = (props) => {
	return (
		<div className="main-image-container">
			<div className="main-image">
				<div className="image-text">
					Not sure where to go? Perfect.
					<Link className="image-button" to="/places">
						I'm flexible
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MainImage;
