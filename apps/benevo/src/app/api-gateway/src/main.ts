
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    console.log('Test...');
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log('API Gateway running on port 3000');
}
bootstrap();
    