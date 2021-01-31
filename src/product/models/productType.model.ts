import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export class ProductType {
    @ApiProperty()
    @prop({ unique: true, index: true })
    public type: string;

    @ApiProperty()
    @prop()
    public subType: string[];
  
  }