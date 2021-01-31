import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DbService } from './helpers/db.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService =  app.get(ConfigService);
  const dbService = app.get(DbService)
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Poshak Ashak')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('poshak')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  const db_url = configService.get<string>('DB_URL');
  const db_port = configService.get<number>('DB_PORT')
  dbService.initConnection(db_url+db_port).then( async result => {
    console.log("Database Connection to " + db_url+db_port + " Successfull!");
    const app_port = configService.get<string>('APP_PORT') || 3000;
    try {
      await app.listen(app_port);
      console.log("Application running at: "+"http://localhost:"+app_port);
      console.log("Try APIs at: "+"http://localhost:"+app_port+"/api");
    } catch(err) {
      console.error("Problem running application at: "+"http://localhost:"+app_port);
    }
  },
  err => {
    console.error("Database Connection to " + db_url+db_port + " Unsuccessfull!");
  });
}
bootstrap();
