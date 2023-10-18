import classes from './SubStepper.module.css';

interface IProps {
  subStepperList: number[];
  completedSteps: number;
  currentMainStep: number;
  subStepperActiveColor?: string;
  subStepperInactiveColor?: string;
  containerSubStepperStyle?: React.CSSProperties;
  lineSubStepperStyle?: React.CSSProperties;
}

const SubStep = ({
  subStepperList,
  currentMainStep,
  completedSteps,
  subStepperActiveColor,
  subStepperInactiveColor,
  containerSubStepperStyle,
  lineSubStepperStyle,
}: IProps) => {
  if (subStepperList[currentMainStep] > 1) {
    return (
      <div className={classes.container} style={containerSubStepperStyle}>
        {Array.from({ length: subStepperList[currentMainStep] }).map(
          (_, index) => {
            const dynamicStyle: React.CSSProperties = {
              backgroundColor:
                completedSteps >= index + 1
                  ? subStepperActiveColor || 'blue'
                  : subStepperInactiveColor || 'grey',
            };
            return (
              <div
                className={classes.liner}
                style={{ ...lineSubStepperStyle, ...dynamicStyle }}
              />
            );
          }
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default SubStep;
