module.exports = {
    "APP_ENV": "LOCALHOST",
    "type": "postgres",
    "host": "localhost",
    "username": "postgres",
    "password": "root",
    "database": "poketrade_app",
    "port": 5432,
    "synchronise": true,
    "loggin": true,
    "entities": [
        "components/**/*.entity.{ts,js}"
    ],
    "migrations": [
        "migrations/**/*.js"
    ],
    "cli": {
        "entitiesDir": "",
        "migrationsDir": "migration",
        "subscribersDir": ""
    }
}