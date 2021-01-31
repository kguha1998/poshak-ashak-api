import { Injectable } from '@nestjs/common';
import { getModelForClass } from '@typegoose/typegoose';
import { Product } from './models/product.model';
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
        return await ProductModel.find({}).exec();
    }
    
    public async getProductByID(id:string): Promise<any> {
        const ProductModel = getModelForClass(Product);
        return await ProductModel.find({_id:id}).exec();
    }

    public async saveProductType(productType: ProductType): Promise<any> {
        const ProductTypeModel = getModelForClass(ProductType);
        const newProductType = await ProductTypeModel.create(productType);
        return newProductType;
    }

    public async getProductTypes(): Promise<any> {
        const ProductTypeModel = getModelForClass(ProductType);
        return await ProductTypeModel.find({}).exec();
    }

 }
