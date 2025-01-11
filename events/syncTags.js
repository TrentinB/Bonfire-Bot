const { Events } = require('discord.js');
const Sequelize = require('sequelize');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute() {
        const sequelize = new Sequelize('database', 'user', 'password', {
            host: 'localhost',
            dialect: 'sqlite',
            logging: false,
            // SQLite only
            storage: 'database.sqlite',
        });

        const Tags = sequelize.define('tags', {
            name: {
                type: Sequelize.STRING,
                unique: true,
            },
            description: Sequelize.TEXT,
            username: Sequelize.STRING,
            usage_count: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false,
            },
        });

        Tags.sync();
        console.log('syncTags complete');
    },
};