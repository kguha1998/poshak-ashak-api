import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";
import { ProductColor } from "./productColor.model";
import { ProductType } from "./productType.model";

export class AppConfig {
    @ApiProperty()
    @prop()
    profitPercent: number;
}
    