import { Injectable } from '@nestjs/common';
import { setGlobalOptions, Severity } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

@Injectable()
export class DbService {

    public async initConnection(connectionString: string) {
        console.info("Connecting To ",connectionString);
        setGlobalOptions({ options:{ allowMixed: Severity.ALLOW}, schemaOptions:{ versionKey: false}})
        return await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, dbName: "poshak-ashak" });
    }

}
