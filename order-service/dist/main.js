"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const data_source_1 = require("./db/data-source");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await data_source_1.AppDataSource.initialize();
    if (process.env.NODE_ENV !== 'production') {
        await data_source_1.AppDataSource.runMigrations();
    }
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map