import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    { transport: Transport.TCP },
  );
  await app.listen(() => console.log('Auth Microservice is listening'));
}
bootstrap();
