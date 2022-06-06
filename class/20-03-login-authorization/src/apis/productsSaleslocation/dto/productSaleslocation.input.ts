import { InputType, OmitType } from '@nestjs/graphql';
import { ProductSaleslocation } from '../entities/productSaleslocation.entity';

@InputType()
export class ProductSaleslocationInput extends OmitType(
  ProductSaleslocation,
  ['id'],
  InputType,
) {}

// @Field(() => String)
//     address: string;

//     @Field(() => String)
//     addressDetail: string;

//     @Field(() => Float)
//     lat: number;

//     @Field(() => Float)
//     lng: number;

//     @Field(() => Date)
//     meetingTime: Date;
