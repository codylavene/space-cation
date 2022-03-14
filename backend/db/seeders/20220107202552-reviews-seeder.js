"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Reviews",
			[
				{
					spotId: 2,
					userId: 1,
					rating: 5,
					description:
						"The ISS did not dissapoint. The views: incredible. The space chimpanzees? Even more incredible. Best use possible for my 401k savings honestly, 10/10 recommend",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					spotId: 1,
					userId: 1,
					rating: 4,
					description:
						"Intelsat-18 was a nice experience! The views were pretty awesome. The hosts employees kept asking me for help with their work(I am a software engineer by day and they had some bugs with a broadcasting program), and as this was my SpaceCation, that is the only reason I am leaving 4/5 stars. ",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					spotId: 3,
					userId: 1,
					rating: 1,
					description:
						"I cannot believe I paid for this! I thought it was a budget option, but alas, it was a budget near death experience. There are holes covered with inches of duct tape, and the airlock was broken on arrival. I had to 'Space Walk' into the living quarters through one of the afforementioned holes covered with duct tape. HORRIBLE.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					spotId: 4,
					userId: 1,
					rating: 3,
					description:
						"This was pretty fun! A neat atmosphere(lol) and I really felt like 'Yondu' from Guardians of the Galaxy, was only missing a cool 'whistle missle'.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Reviews", null, {});
	},
};
