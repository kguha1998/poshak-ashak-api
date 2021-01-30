import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";
class Price {
    @ApiProperty()
    selling: number;

    @ApiProperty()
    buying: number;
}

class Size{
    @ApiProperty()
    length: number;

    @ApiProperty()
    bredth: number;
}
export class Product {
    @ApiProperty()
    @prop()
    public name: string;

    @ApiProperty({type: Price})
    @prop()
    public price: Price;

    @ApiProperty({type: Size})
    @prop()
    public size: Size;

    @ApiProperty()
    @prop()
    public material: string;

    @ApiProperty()
    @prop()
    public color: string;

    @ApiProperty()
    @prop()
    public quantity: number;
    
    @ApiProperty()
    @prop()
    public product_code: string;
  
  }