import { Module } from '@nestjs/common';
import { FormResourcesService } from './services/form_resources.service';
import { FormResourcesController } from './controllers/form_resource.controller';
import { HelperService } from 'src/helpers.ts/model';
import { FormsController } from './controllers/forms.controller';
import { FormsService } from './services/forms.service';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [FormResourcesController, FormsController],
  providers: [FormResourcesService, HelperService, FormsService],
  exports: [FormResourcesService, FormsService],
})
export class FormsModule {}
