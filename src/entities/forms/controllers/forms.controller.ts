import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FormsService } from '../services/forms.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/auth.guard';

@Controller('forms')
@ApiTags('Forms')
@UseGuards(AuthGuard)
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get('/:form')
  findAll(@Param('form') form: string) {
    return this.formsService.findOne(form);
  }

  @Get('/:form/:subform')
  findAllSubForm(
    @Param('form') form: string,
    @Param('subform') subform: string,
  ) {
    return this.formsService.findOne(form, subform);
  }
}
