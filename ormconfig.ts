module.exports = {
  "type": "postgres",
  "host": process.env.TYPEORM_HOST,
  "port": 5432,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "synchronize": true,
  "logging": true,
  "entities": ["src/**/*.entity.ts"],
  "migrations": ["src/migrations/**/*.ts"]
};
