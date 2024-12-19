import { ArmyType } from 'src/enums/ArmyType';

export class CreateArmyDto {
  readonly id: string;
  readonly name: string;
  readonly type: ArmyType;
  readonly color: string;
}
