import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    // configure service with GraphQL
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // read entities and generate the schema.gql
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    // configure database
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'employee',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    EmployeeModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
