import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FormResourcesService } from '../services/form_resources.service';
import { UpdateFormDto } from '../dto/update-form.dto';
import { plainToInstance } from 'class-transformer';
import { CommonEntity, CommonListEntity } from 'src/common/constants';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/auth.guard';

@Controller('forms/resources')
@ApiTags('Form Resources')
@UseGuards(AuthGuard)
export class FormResourcesController {
  constructor(private readonly formResourcesService: FormResourcesService) {}

  @Post('/:form')
  async create(@Body() createFormDto, @Param('form') form: string) {
    const data = await this.formResourcesService.create(form, createFormDto);
    return plainToInstance(CommonEntity, data.toObject());
  }

  @Post('/:form/:subform')
  async createSubForm(
    @Body() createFormDto,
    @Param('form') form: string,
    @Param('subform') subform: string,
  ) {
    const data = await this.formResourcesService.create(
      form,
      createFormDto,
      subform,
    );
    return plainToInstance(CommonEntity, data.toObject());
  }

  @Get('/:form')
  async findAll(@Param('form') form: string, @Query() query: any) {
    const data = await this.formResourcesService.findAll(
      form,
      query,
      null,
      true,
    );
    return {
      data: data?.data?.map((d) => plainToInstance(CommonListEntity, d)),
      pagination: data?.pagination,
    };
  }

  @Get('/summary/:client')
  async summary(@Query() query: any, @Param('client') client: string) {
    const data = await this.formResourcesService.summary(client, query);
    return data;
  }

  @Get('/:form/subform/:subform')
  async findAllSubForm(
    @Param('form') form: string,
    @Query() query: any,
    @Param('subform') subform: string,
  ) {
    const data = await this.formResourcesService.findAll(
      form,
      query,
      subform,
      true,
    );
    return {
      data: data?.data?.map((d) => plainToInstance(CommonListEntity, d)),
      pagination: data?.pagination,
    };
  }

  @Get('/:form/:id')
  findOne(@Query() query, @Param('form') form: string) {
    return this.formResourcesService.findOne(form, query);
  }

  @Patch('/:form')
  update(
    @Body() updateFormDto: UpdateFormDto,
    @Param('form') form: string,
    @Query() query: any,
  ) {
    return this.formResourcesService.update(form, updateFormDto, query);
  }

  @Delete('/:form')
  remove(@Query() query, @Param('form') form: string) {
    return this.formResourcesService.remove(form, query);
  }
}
