import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { Product } from './models/product.model';
import { ProductService } from './product.service';
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

    @Post("sell")
    async sellProduct(@Body() sellProduct: ProductSell){
      return await this.productService.sellProduct(sellProduct);
    }
 }
