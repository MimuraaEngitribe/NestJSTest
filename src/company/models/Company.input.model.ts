import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CompanyInput {
  @Field(() => Int)
  id?: number;

  @Field()
  name: string;
}