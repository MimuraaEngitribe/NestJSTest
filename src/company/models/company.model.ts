import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => ID, {nullable:true})
  id: number;

  @Field({ nullable: true })
  name: string;
}