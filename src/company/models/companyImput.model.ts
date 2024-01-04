import { InputType, Field, Int, ID } from '@nestjs/graphql';

@InputType()
export class CompanyInput {
  @Field(() => ID, {nullable:true})
  id: number;

  @Field({ nullable: true })
  name: string;
}