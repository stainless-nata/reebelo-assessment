import { DataSource } from 'typeorm';
import {
  DB,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USER,
} from 'src/utils/env';

console.log(DB, DATABASE_HOST, DATABASE_NAME);

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: DATABASE_HOST,
  port: parseInt(DATABASE_PORT),
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migration/*.{ts,js}'],
  synchronize: false,
  logging: true,
});
