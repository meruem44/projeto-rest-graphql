import { resolve } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/database.db',
  logging: true,
  entities: [resolve(__dirname, '..', 'database', 'models', '*.entity.ts')],
  migrations: [resolve(__dirname, '..', 'database', 'migrations', '*.ts')],
};

module.exports = options;
