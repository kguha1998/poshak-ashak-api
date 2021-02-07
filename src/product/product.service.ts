import { Injectable } from '@nestjs/common';
import { getModelForClass } from '@typegoose/typegoose';
import { Model } from 'mongoose';
import { Product } from './models/product.model';
import { ProductSell } from './models/productSell.model';
@Injectable()
export class ProductService {

    public async saveProduct(product: Product): Promise<any> {
        const ProductModel = getModelForClass(Product);
        const newProduct = await ProductModel.create(product);
        return newProduct;
    }

    public async getProducts(): Promise<any> {
        const ProductModel = getModelForClass(Product);
        return await ProductModel.find({}).lean().exec();
    }
    
    public async getProductByID(id:string): Promise<any> {
        const ProductModel = getModelForClass(Product);
        return await ProductModel.find({_id:id}).lean().exec();
    }

    public async sellProduct(sell: ProductSell): Promise<any>{
        sell.date = new Date();
        sell.place = sell.place || 'West Bengal';
        const ProductSellModel = getModelForClass(ProductSell);
        const ProductModel: Model<any> = getModelForClass(Product);
        const productToUpdate: Product = await ProductModel.findOne({product_code: sell.product_code}).lean().exec();
        productToUpdate.quantity = productToUpdate.quantity - sell.quantity;
        await ProductModel.findOneAndUpdate({product_code: productToUpdate.product_code},{quantity: productToUpdate.quantity}).lean().exec();
        return await ProductSellModel.create(sell);
    }

 }
