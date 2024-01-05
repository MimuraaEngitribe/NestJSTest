import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { CompanyModule } from './company.module';
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
  controllers: [],
  providers: [],
})
export class AppModule {}
