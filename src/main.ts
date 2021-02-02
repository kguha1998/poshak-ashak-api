import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigurationService } from './helpers/configuration.service';
import { DbService } from './helpers/db.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService =  app.get(ConfigurationService);
  const dbService = app.get(DbService)
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Poshak Ashak')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('poshak')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  dbService.initConnection(configService.getDBConnectionURL()).then( async result => {
    console.log("Database Connection to " + configService.getDBConnectionURL() + " Successfull!");
    const app_port = configService.app_port || configService.default_port;
    try {
      await app.listen(app_port);
      console.log("Application running at: "+configService.getApplicationURL());
      console.log("Try APIs at: "+configService.getApplicationURL()+"/api");
    } catch(err) {
      console.error("Problem running application at: "+configService.getApplicationURL());
    }
  },
  err => {
    console.error("Database Connection to " + configService.getDBConnectionURL() + " Unsuccessfull!");
  });
}
bootstrap();
