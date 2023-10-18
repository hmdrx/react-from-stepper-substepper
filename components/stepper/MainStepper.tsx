import classes from './MainStepper.module.css';

interface IProps {
  mainStepperList: string[];
  subStepperList: number[];
  currentMainStep: number;
  currentSubStep: number;
  IconInactive?: React.JSX.Element;
  IconInProgress?: React.JSX.Element;
  IconComplete?: React.JSX.Element;
  containerMainStepperStyle?: React.CSSProperties;
  lineMainStepperStyle?: React.CSSProperties;
  fontStyle?: React.CSSProperties;
  iconCompleteColor?: string;
  iconInactiveColor?: string;
  iconInProgressColor?: string;
}

const MainSteps = ({
  mainStepperList,
  subStepperList,
  currentSubStep,
  currentMainStep,
  IconInactive,
  IconInProgress,
  IconComplete,
  containerMainStepperStyle,
  lineMainStepperStyle,
  fontStyle,
  iconCompleteColor,
  iconInactiveColor,
  iconInProgressColor,
}: IProps) => {
  return (
    <div className={classes.container} style={containerMainStepperStyle}>
      {mainStepperList.slice(0, mainStepperList.length - 1).map((el, index) => (
        <div className={classes.steps}>
          {(((index + 1 <= currentMainStep &&
            subStepperList[currentMainStep - 1] === currentSubStep) ||
            index + 1 < currentMainStep) &&
            ((IconComplete && IconComplete) || (
              <div
                className={classes.radio}
                style={{
                  borderColor: iconCompleteColor,
                }}
              >
                <div
                  className={classes['radio-inner']}
                  style={{ backgroundColor: iconCompleteColor }}
                />
              </div>
            ))) ||
            (subStepperList[currentMainStep - 1] > currentSubStep &&
              index + 1 <= currentMainStep &&
              ((IconInProgress && IconInProgress) || (
                <div
                  className={classes.radio}
                  style={{ borderColor: iconInProgressColor }}
                />
              ))) ||
            (IconInactive && IconInactive) || (
              <div
                className={`${classes.radio} ${classes['radio-disabled']}`}
                style={{ borderColor: iconInactiveColor }}
              />
            )}
          <p style={fontStyle}>{el}</p>
          <div className={classes.liner} style={lineMainStepperStyle} />
        </div>
      ))}
      <div className={classes['step-last']}>
        {(((mainStepperList.length <= currentMainStep &&
          subStepperList[currentMainStep - 1] === currentSubStep) ||
          mainStepperList.length < currentMainStep) && (
          <div
            className={classes.radio}
            style={{
              borderColor: iconCompleteColor,
            }}
          >
            <div
              className={classes['radio-inner']}
              style={{ backgroundColor: iconCompleteColor }}
            />
          </div>
        )) ||
          (subStepperList[currentMainStep - 1] > currentSubStep &&
            mainStepperList.length <= currentMainStep && (
              <div
                className={classes.radio}
                style={{ borderColor: iconInProgressColor }}
              />
            )) || (
            <div
              className={`${classes.radio} ${classes['radio-disabled']}`}
              style={{ borderColor: iconInactiveColor }}
            />
          )}
        <p style={fontStyle}>{mainStepperList[mainStepperList.length - 1]}</p>
      </div>
    </div>
  );
};

export default MainSteps;
