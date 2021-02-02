import { Body, Controller, Get, Query, Post, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { ProductService } from './product.service';
import { ProductType } from './models/productType.model';
import { AuthGuard } from '@nestjs/passport';
import { ProductColor } from './models/productColor.model';
import { ProductSell } from './models/productSell.model';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Get("getAll")
    async getAll(): Promise<Product[]> {
      return await this.productService.getProducts();
    }

    @Post("save")
    async save(@Body() product: Product) {
      return await this.productService.saveProduct(product);
    }

    @Get("getById")
    async getProductByID(@Query('id') id: string): Promise<Product> {
      return await this.productService.getProductByID(id);
    }

    @Get("getAllProductTypes")
    async getAllProductTypes(): Promise<ProductType[]> {
      return await this.productService.getProductTypes();
    }

    @Post("saveProductType")
    async saveProductType(@Body() productType: ProductType) {
      return await this.productService.saveProductType(productType);
    }
    @Get("getAllProductColors")
    async getAllProductColors(): Promise<ProductColor[]> {
      return await this.productService.getProductColors();
    }

    @Post("saveProductColor")
    async saveProductColor(@Body() productColor: ProductColor) {
      return await this.productService.saveProductColor(productColor);
    }

    @Post("sell")
    async sellProduct(@Body() sellProduct: ProductSell){
      return await this.productService.sellProduct(sellProduct);
    }
 }
