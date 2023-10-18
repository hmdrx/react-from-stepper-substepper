declare namespace models {
  interface IMainStepper {
    mainStepperList: string[];
    subStepperList: number[];
    width: number | string;
    children: React.ReactNode;
  }
  interface ISubStepper {
    subStepperList: number[];
    completedSteps: number;
    currentMainStep: number;
  }
}
