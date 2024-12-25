import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

export const DatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'database', // use the service name from docker-compose.yml
  port: 3306,
  username: 'army-webapp',
  password: 'password',
  database: 'army_db',
  entities: [User],
  synchronize: true, // Not recommended for production - issues with data loss
};
