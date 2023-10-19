import React from 'react';

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

const MainStepper = ({
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
  const radioStyle: React.CSSProperties = {
    width: '16px',
    height: '16px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginRight: '4px',
  };
  const radioInnerStyle: React.CSSProperties = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  };

  return (
    <div style={{ display: 'flex', ...containerMainStepperStyle }}>
      {mainStepperList.slice(0, mainStepperList.length - 1).map((el, index) => (
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            margin: '2px',
          }}
        >
          {(((index + 1 <= currentMainStep &&
            subStepperList[currentMainStep - 1] === currentSubStep) ||
            index + 1 < currentMainStep) &&
            ((IconComplete && IconComplete) || (
              <div
                style={{
                  ...radioStyle,
                  borderColor: iconCompleteColor || 'blue',
                }}
              >
                <div
                  style={{
                    ...radioInnerStyle,
                    backgroundColor: iconCompleteColor || 'blue',
                  }}
                />
              </div>
            ))) ||
            (subStepperList[currentMainStep - 1] > currentSubStep &&
              index + 1 <= currentMainStep &&
              ((IconInProgress && IconInProgress) || (
                <div
                  style={{
                    ...radioStyle,
                    borderColor: iconInProgressColor || 'blue',
                  }}
                />
              ))) ||
            (IconInactive && IconInactive) || (
              <div
                style={{
                  ...radioStyle,
                  borderColor: iconInactiveColor || 'grey',
                }}
              />
            )}
          <p style={fontStyle}>{el}</p>
          <div
            style={{
              display: 'flex',
              flex: 1,
              height: '1px',
              marginLeft: '4px',
              marginRight: '4px',
              backgroundColor: 'grey',
              ...lineMainStepperStyle,
            }}
          />
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {(((mainStepperList.length <= currentMainStep &&
          subStepperList[currentMainStep - 1] === currentSubStep) ||
          mainStepperList.length < currentMainStep) && (
          <div
            style={{
              ...radioStyle,
              borderColor: iconCompleteColor || 'blue',
            }}
          >
            <div
              style={{
                ...radioInnerStyle,
                backgroundColor: iconCompleteColor || 'blue',
              }}
            />
          </div>
        )) ||
          (subStepperList[currentMainStep - 1] > currentSubStep &&
            mainStepperList.length <= currentMainStep && (
              <div
                style={{
                  ...radioStyle,
                  borderColor: iconInProgressColor || 'blue',
                }}
              />
            )) || (
            <div
              style={{
                ...radioStyle,
                borderColor: iconInactiveColor || 'grey',
              }}
            />
          )}
        <p style={fontStyle}>{mainStepperList[mainStepperList.length - 1]}</p>
      </div>
    </div>
  );
};

export default MainStepper;
