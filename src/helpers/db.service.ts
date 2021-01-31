import { Injectable, OnModuleInit } from '@nestjs/common';
import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

@Injectable()
export class DbService {

    public async initConnection(connectionString: string) {
        console.info("Connecting To ",connectionString);
        return await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "poshak-ashak" });
    }

}
