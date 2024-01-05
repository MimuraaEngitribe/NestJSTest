import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;
}