import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export class ProductColor{
    @ApiProperty()
    @prop({ unique: true, index: true })
    public name: string;
    
    @ApiProperty()
    @prop({ unique: true, index: true })
    public colorCode: string;
    
    @prop({ unique: true, index: true })
    public code: string;
}