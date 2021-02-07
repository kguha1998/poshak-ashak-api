import { CommonService } from './helpers/common.service';
import { AppConfigController } from './app-config/app-config.controller';
import { AppConfigService } from './app-config/app-config.service';
import { SharedModule } from './helpers/shared.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    SharedModule,
    AuthModule,
    ProductModule,
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      isGlobal: true
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
