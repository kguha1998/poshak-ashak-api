import { Injectable } from '@nestjs/common';
import { getModelForClass } from '@typegoose/typegoose';
import { Model } from 'mongoose';
import { Product } from './models/product.model';
import { ProductColor } from './models/productColor.model';
import { ProductSell } from './models/productSell.model';
import { ProductType } from './models/productType.model';
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

    public async saveProductType(productType: ProductType): Promise<any> {
        const ProductTypeModel = getModelForClass(ProductType);
        const newProductType = await ProductTypeModel.create(productType);
        return newProductType;
    }

    public async getProductTypes(): Promise<any> {
        const ProductTypeModel = getModelForClass(ProductType);
        return await ProductTypeModel.find({}).lean().exec();
    }

    public async saveProductColor(color: ProductColor): Promise<any> {
        const ProductColorModel= getModelForClass(ProductColor);
        const newProductColor = await ProductColorModel.create(color);
        return newProductColor;
    }

    public async getProductColors(): Promise<any> {
        const ProductColorModel = getModelForClass(ProductColor);
        return await ProductColorModel.find({}).lean().exec();
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
