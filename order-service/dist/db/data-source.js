"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const env_1 = require("../utils/env");
console.log(env_1.DB, env_1.DATABASE_HOST, env_1.DATABASE_NAME);
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: env_1.DATABASE_HOST,
    port: parseInt(env_1.DATABASE_PORT),
    username: env_1.DATABASE_USER,
    password: env_1.DATABASE_PASSWORD,
    database: env_1.DATABASE_NAME,
    entities: [__dirname + '/**/*.entity.{ts,js}'],
    migrations: [__dirname + '/migration/*.{ts,js}'],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map