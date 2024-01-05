import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CompanyModule } from './company/company.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [CompanyModule,
  
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // typePaths: ['./**/*.graphql'],
      autoSchemaFile: 'company.graphql',
      // autoSchemaFile: true,  // スキーマを自動的に生成する
      // その他のGraphQLの設定
    }),
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
