"use strict";
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");
// const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/;
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [3, 200],
				},
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [4, 30],
					isNotEmail(value) {
						if (Validator.isEmail(value)) {
							throw new Error("Cannot be an email.");
						}
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [3, 256],
				},
			},
			hashedPassword: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
				validate: {
					len: [60, 60],
				},
			},
			isHost: {
				type: DataTypes.BOOLEAN,
				// defaultValue: false,
			},
		},
		{
			defaultScope: {
				attributes: {
					exclude: [
						"hashedPassword",
						"email",
						"createdAt",
						"updatedAt",
					],
				},
			},
			scopes: {
				currentUser: {
					attributes: { exclude: ["hashedPassword"] },
				},
				loginUser: {
					attributes: {},
				},
			},
		}
	);
	User.associate = function (models) {
		// associations can be defined here
		User.hasMany(models.Spot, { foreignKey: "hostId" });
		User.hasMany(models.Review, { foreignKey: "userId" });
		User.hasMany(models.Reservation, { foreignKey: "userId" });
		User.hasMany(models.Reservation, { foreignKey: "hostId" });
	};
	User.prototype.toSafeObject = function () {
		const { id, name, username, email, isHost } = this;
		return { id, username, email, isHost };
	};
	User.prototype.validatePassword = function (password) {
		return bcrypt.compareSync(password, this.hashedPassword.toString());
	};
	User.getCurrentUserById = async function (id) {
		return await User.scope("currentUser").findByPk(id);
	};
	User.login = async function ({ credential, password }) {
		const { Op } = require("sequelize");
		const user = await User.scope("loginUser").findOne({
			where: {
				[Op.or]: {
					username: credential,
					email: credential,
				},
			},
		});
		if (user && user.validatePassword(password)) {
			return await User.scope("currentUser").findByPk(user.id);
		}
	};
	User.signup = async function ({ name, username, email, password }) {
		const hashedPassword = bcrypt.hashSync(password);
		const user = await User.create({
			name,
			username,
			email,
			hashedPassword,
		});
		return await User.scope("currentUser").findByPk(user.id);
	};
	return User;
};
