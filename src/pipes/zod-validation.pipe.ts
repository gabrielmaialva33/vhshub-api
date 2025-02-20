import {
  ArgumentMetadata,
  PipeTransform,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  async transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = await this.schema.parseAsync(value);
      return parsedValue;
    } catch (error) {
      throw new UnprocessableEntityException({
        ...error,
      });
    }
  }
}
