import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PersonaModule } from './modules/persona/persona.module';
import { RoleModule } from './modules/role/role.module';
import { LibroModule } from './modules/libro/libro.module';
import { CalificacionModule } from './modules/calificacion/calificacion.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule, PersonaModule, RoleModule,LibroModule, CalificacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
