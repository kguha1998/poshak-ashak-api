import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
    constructor(private configService: ConfigService) {}
    db_url = this.configService.get<string>('DB_URL');
    db_port = this.configService.get<number>('DB_PORT');
    app_url  = this.configService.get<number>('APP_URL');
    app_port = this.configService.get<number>('APP_PORT');
    google_client_id = this.configService.get<string>('GOOGLE_CLIENT_ID');
    google_secret_key = this.configService.get<string>('GOOGLE_SECRET');
    google_callback_url = this.configService.get<string>('GOOGLE_CALLBACK_URL');
    default_port = 3000;
    getDBConnectionURL() {
        return this.db_url + this.db_port;
    }

    getApplicationURL() {
        return this.app_url + this.app_port;
    }

    getGoogleCallBackURL() {
        return this.app_url+this.app_port+this.google_callback_url;
    }

 }
