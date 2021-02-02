import { SharedModule } from './helpers/shared.module';
import { ConfigurationService } from './helpers/configuration.service';
import { AuthModule } from './auth/auth.module';
import { DbService } from './helpers/db.service';
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
