import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export class ProductSell {
    @ApiProperty()
    @prop()
    product_code:string;

    @ApiProperty()
    @prop()
    quantity:number;

    @ApiProperty()
    @prop()
    date?:Date;

    @ApiProperty()
    @prop()
    place?:string;

}