import { Injectable, OnModuleInit } from '@nestjs/common';
import { getModelForClass } from '@typegoose/typegoose';
import { CommonService } from 'src/helpers/common.service';
import { ProductColor } from './models/productColor.model';
import { ProductSubType, ProductType } from './models/productType.model';

@Injectable()
export class AppConfigService implements OnModuleInit {

    constructor(private commonService: CommonService){}

    productTypes: ProductType[] = [];
    productSubTypes: ProductSubType[] = [];
    productColors: ProductColor[] = [];
    ProductTypeModel = getModelForClass(ProductType);
    ProductColorModel= getModelForClass(ProductColor);
    ProductSubTypeModel = getModelForClass(ProductSubType);

    async onModuleInit() {
        this.productTypes = await this.ProductTypeModel.find({}).lean().exec();
        this.productSubTypes = await this.ProductSubTypeModel.find({}).lean().exec();
        this.productColors = await this.ProductColorModel.find({}).lean().exec();
    }

    public async saveProductType(productType: ProductType): Promise<any> {
        productType.typeCode = this.getProductTypeCode();
        try {
            const newProductType = await this.ProductTypeModel.create(productType);
            this.productTypes.push(newProductType);
            return newProductType;
        } catch(err) {
            console.log(err);
        }
    }

    public getProductTypes() {
        return this.productTypes;
    }

    public async saveProductSubType(productSubType: ProductSubType): Promise<any> {
        productSubType.subTypeCode = this.getProductSubTypeCode();
        try {
        const newProductSubType = await this.ProductSubTypeModel.create(productSubType);
        this.productSubTypes.push(newProductSubType);
        return newProductSubType;
        }catch(err) {
            console.log(err);
        }
    }

    public getProductSubTypes() {
        return this.productSubTypes;
    }

    public async saveProductColor(color: ProductColor): Promise<any> {
        color.code = this.getProductColorCode();
        try {
            const newProductColor = await this.ProductColorModel.create(color);
            this.productColors.push(newProductColor);
            return newProductColor;
        }catch(err) {
            console.log(err);
        }
    }


    public getProductColors() {
        return this.productColors;
    }

    getProductColorCode() {
        let newCode;
        let found = true;
        while(found) {
            newCode = this.commonService.getCode();
            found = this.productColors.some( productColor => productColor.code === newCode);
        }
        return newCode;
    }

    getProductTypeCode() {
        let newCode;
        let found = true;
        while(found) {
            newCode = this.commonService.getCode();
            found = this.productTypes.some( productTypes => productTypes.typeCode === newCode);
        }
        return newCode;
    }
    getProductSubTypeCode(){
        let newCode;
        let found = true;
        while(found) {
            newCode = this.commonService.getCode();
            found = this.productSubTypes.some( productSubTypes => productSubTypes.subTypeCode === newCode);
        }
        return newCode;

    }
}
