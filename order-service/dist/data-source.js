"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your-username',
    password: 'your-password',
    database: 'your-database',
    entities: [__dirname + '/**/*.entity.{ts,js}'],
    migrations: [__dirname + '/migration/*.{ts,js}'],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map