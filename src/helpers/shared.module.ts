import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { DbService } from './db.service';

@Module({
    imports: [],
    controllers: [],
    providers: [ConfigurationService, DbService],
    exports:[ConfigurationService, DbService]
})
export class SharedModule { }
