import { Injectable, OnModuleInit } from '@nestjs/common';
import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

@Injectable()
export class DbService implements OnModuleInit  {
    onModuleInit() {
        const result = this.initConnection();
        result.then(result => {
            console.log(result);
        });
    }

    public async initConnection() {
        return await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "poshak-ashak" });
    }

}
