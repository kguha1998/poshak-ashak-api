import { ApiProperty } from "@nestjs/swagger";
import { arrayProp, prop, Ref } from "@typegoose/typegoose";

export class ProductSubType {
  @ApiProperty()
  @prop({ unique: true, index: true })
  public name: string;

  @prop({ unique: true, index: true })
  public subTypeCode: string;
}


export class ProductType {
    @ApiProperty()
    @prop({ unique: true, index: true })
    public name: string;

    @prop({ unique: true, index: true })
    public typeCode: string;

    @ApiProperty()
    @prop({ref: ProductSubType })
    public subTypeCodes?: Ref<ProductSubType>[];
  }

  