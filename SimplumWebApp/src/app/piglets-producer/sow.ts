export class Sow {
  id: number;
  elir: string;
  name?: string;
  birtDate: Date;
  sowStatus: SowStatus;

  constructor() {
    this.birtDate = new Date();
  }
}

export enum SowStatus {
   Normal = 0,
   Inseminated =1,
   Pregnant = 2,
   Lactating = 3,
}
