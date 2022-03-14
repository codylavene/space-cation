"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Images",
			[
				{
					url: "https://assets-space-cation.s3.us-east-2.amazonaws.com/1647296661643.jpeg",
					spotId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					url: "https://assets-space-cation.s3.us-east-2.amazonaws.com/1647296687828.jpg",
					spotId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					url: "https://assets-space-cation.s3.us-east-2.amazonaws.com/1647296707434.jpeg",
					spotId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				/*--------------------------------------------------------------------*/
				{
					url: "https://assets-space-cation.s3.amazonaws.com/1647296869540.jpeg",
					spotId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					url: "https://assets-space-cation.s3.us-east-2.amazonaws.com/1647296885677.jpeg",
					spotId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					url: "https://assets-space-cation.s3.us-east-2.amazonaws.com/1647296898623.jpeg",
					spotId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				/*--------------------------------------------------------------------*/
				{
					url: "https://assets-space-cation.s3.amazonaws.com/1647296984243.jpeg",
					spotId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					url: "https://assets-space-cation.s3.us-east-2.amazonaws.com/1647297021322.jpeg",
					spotId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				/*--------------------------------------------------------------------*/
				{
					url: "https://assets-space-cation.s3.amazonaws.com/1647297111240.jpeg",
					spotId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					url: "https://assets-space-cation.s3.us-east-2.amazonaws.com/1647297124985.jpeg",
					spotId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Images", null, {});
	},
};
