import { Field } from '@nestjs/graphql';

export class StudentType {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
