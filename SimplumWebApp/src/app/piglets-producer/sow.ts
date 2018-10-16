export class Sow {
  id: number;
  elir: string;
  name?: string;
  birthDate: Date;
  sowStatus: SowStatus;

  constructor() {
    this.birthDate = new Date();
  }
}

export enum SowStatus {
   Normal = 0,
   Inseminated =1,
   Pregnant = 2,
   Lactating = 3,
}
