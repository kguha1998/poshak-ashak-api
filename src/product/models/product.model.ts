import { ApiProperty } from "@nestjs/swagger";
import { prop, ReturnModelType, DocumentType, modelOptions, Severity, Ref } from "@typegoose/typegoose";
import { ProductColor } from "src/app-config/models/productColor.model";
import { ProductSubType, ProductType } from "src/app-config/models/productType.model";

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
    size: number;
}
export class Product {
    @ApiProperty()
    @prop()
    public name: string;

    @ApiProperty({type: Price})
    @prop()
    public price: Price;

    @ApiProperty({type: [Size]})
    @prop()
    public size: Size[];

    @ApiProperty()
    @prop({ref: ProductType})
    public type: Ref<ProductType>;

    @ApiProperty()
    @prop({ref: ProductSubType})
    public subTypeCode: Ref<ProductSubType>[];

    @ApiProperty()
    @prop()
    public material: string;

    @ApiProperty()
    @prop({ref: ProductColor})
    public colorIds: Ref<ProductColor>[];

    @ApiProperty()
    @prop()
    public quantity: number;
    
    @ApiProperty()
    @prop({ unique: true, index: true })
    public product_code: string;
  
  }