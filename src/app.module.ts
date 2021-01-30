import { DbService } from './helpers/db.service';
import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ProductModule,],
  controllers: [AppController],
  providers: [
    DbService, AppService],
})
export class AppModule { }
