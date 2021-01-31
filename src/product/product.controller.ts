import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { ProductService } from './product.service';
import { ProductType } from './models/productType.model';

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
 }
