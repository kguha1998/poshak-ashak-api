import { Body, Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { ProductColor } from './models/productColor.model';
import { ProductSubType, ProductType } from './models/productType.model';

@Controller('app-config')
export class AppConfigController {

    constructor(private appConfigService: AppConfigService){}

    @Get("getAllProductTypes")
    getAllProductTypes() {
      return this.appConfigService.getProductTypes();
    }

    @Post("saveProductType")
    async saveProductType(@Body() productType: ProductType) {
      return await this.appConfigService.saveProductType(productType);
    }

    @Get("getAllProductSubTypes")
    getAllProductSubTypes() {
      return this.appConfigService.getProductSubTypes();
    }

    @Post("saveProductSubType")
    async saveProductSubType(@Body() productSubType: ProductSubType) {
      return await this.appConfigService.saveProductSubType(productSubType);
    }

    @Get("getAllProductColors")
    getAllProductColors() {
      return this.appConfigService.getProductColors();
    }

    @Post("saveProductColor")
    async saveProductColor(@Body() productColor: ProductColor) {
      return await this.appConfigService.saveProductColor(productColor);
    }

}
