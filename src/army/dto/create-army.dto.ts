import { IsEnum, MinLength } from 'class-validator';
import { ArmyType } from 'src/enums/ArmyType';

export class CreateArmyDto {
  readonly id: string;

  @MinLength(3) // Adds a validation rule to check if the name is at least 3 characters long
  readonly name: string;

  @IsEnum(ArmyType, { message: 'Use correct type' }) // Adds a validation rule to check if the type is one of the values in the ArmyType enum
  readonly type: ArmyType;
  readonly color: string;
}
