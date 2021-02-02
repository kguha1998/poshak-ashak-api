import { ApiProperty } from "@nestjs/swagger";
import { prop, ReturnModelType, DocumentType, modelOptions, Severity } from "@typegoose/typegoose";
import { ProductColor } from "./productColor.model";
class Price {
    @ApiProperty()
    @prop()
    selling: number;

    @ApiProperty()
    @prop()
    buying: number;
}

class Size{
    @ApiProperty()
    @prop()
    length: number;

    @ApiProperty()
    @prop()
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

    @ApiProperty({type:ProductColor})
    @prop()
    public colors: ProductColor[];

    @ApiProperty()
    @prop()
    public quantity: number;
    
    @ApiProperty()
    @prop({ unique: true, index: true })
    public product_code: string;
  
  }