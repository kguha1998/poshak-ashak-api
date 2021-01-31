import { DbService } from './helpers/db.service';
import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      isGlobal: true
    })
  ],
  controllers: [],
  providers: [
    DbService
  ]
})
export class AppModule { }
