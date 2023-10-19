import React from 'react';
interface IProps {
  subStepperList: number[];
  completedSteps: number;
  currentMainStep: number;
  subStepperActiveColor?: string;
  subStepperInactiveColor?: string;
  containerSubStepperStyle?: React.CSSProperties;
  lineSubStepperStyle?: React.CSSProperties;
}

const SubStepper = ({
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
      <div
        style={{
          display: 'flex',
          marginTop: '10px',
          padding: '5px',
          ...containerSubStepperStyle,
        }}
      >
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
                style={{
                  background: 'gray',
                  height: '2px',
                  width: '100%',
                  borderRadius: '5px',
                  marginLeft: '5px',
                  marginRight: '5px',
                  ...lineSubStepperStyle,
                  ...dynamicStyle,
                }}
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

export default SubStepper;
