import { Module } from '@nestjs/common';
import { AppConfigController } from 'src/app-config/app-config.controller';
import { AppConfigService } from 'src/app-config/app-config.service';
import { CommonService } from './common.service';
import { ConfigurationService } from './configuration.service';
import { DbService } from './db.service';

@Module({
    imports: [],
    controllers: [AppConfigController],
    providers: [ConfigurationService, 
        DbService,
        CommonService,
        AppConfigService,],
    exports:[ConfigurationService, 
        DbService,
        CommonService,
        AppConfigService,]
})
export class SharedModule { }
