import React, { useState, useEffect } from 'react';
import SubStepper from './components/stepper/SubStepper';
import MainStepper from './components/stepper/MainStepper';
import SwipeableViews from 'react-swipeable-views';

interface IProps {
  mainStepperList: string[];
  subStepperList: number[];
  NextButton: (handleNext: () => void) => React.JSX.Element;
  BackButton: (handleBack: () => void) => React.JSX.Element;
  children?: React.ReactNode;
  SaveAsDraftButton?: React.JSX.Element;
  subStepperActiveColor?: string;
  subStepperInactiveColor?: string;
  IconInactive?: React.JSX.Element;
  IconInProgress?: React.JSX.Element;
  IconComplete?: React.JSX.Element;
  containerStyle?: React.CSSProperties;
  containerBtnStyle?: React.CSSProperties;
  containerSubStepperStyle?: React.CSSProperties;
  lineSubStepperStyle?: React.CSSProperties;
  containerMainStepperStyle?: React.CSSProperties;
  lineMainStepperStyle?: React.CSSProperties;
  fontStyle?: React.CSSProperties;
  iconCompleteColor?: string;
  iconInactiveColor?: string;
  iconInProgressColor?: string;
  backPreviousMainStep?: Boolean;
}

const SSS = ({
  children,
  mainStepperList,
  subStepperList: subStepsListState,
  NextButton,
  BackButton,
  SaveAsDraftButton,
  subStepperActiveColor,
  subStepperInactiveColor,
  IconInactive,
  IconInProgress,
  IconComplete,
  containerStyle,
  containerBtnStyle,
  containerSubStepperStyle,
  lineSubStepperStyle,
  containerMainStepperStyle,
  lineMainStepperStyle,
  fontStyle,
  iconCompleteColor,
  iconInactiveColor,
  iconInProgressColor,
  backPreviousMainStep = true,
}: IProps) => {
  const [currentMainStep, setCurrentMainStep] = useState(1);
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);

  const [subStepperList, setSubStepperList] =
    useState<number[]>(subStepsListState);

  useEffect(() => {
    if (subStepperList.length < mainStepperList.length) {
      let newSubStepsList = [...subStepperList];
      while (newSubStepsList.length < mainStepperList.length) {
        newSubStepsList.push(1);
      }
      setSubStepperList(newSubStepsList);
    }
  }, [mainStepperList.length, subStepperList]);

  const handleNext = () => {
    if (currentSubStep < subStepperList[currentMainStep - 1]) {
      setCurrentSubStep(currentSubStep + 1);
      setSlideIndex(prev => prev + 1);
    } else if (currentMainStep < mainStepperList.length) {
      setSlideIndex(prev => prev + 1);
      setCurrentSubStep(1);
      setCurrentMainStep(currentMainStep + 1);
    }
  };

  const handleBack = () => {
    if (currentSubStep > 1) {
      setCurrentSubStep(currentSubStep - 1);
      setSlideIndex(prev => prev - 1);
    } else if (currentMainStep > 1) {
      setSlideIndex(prev => prev - 1);
      setCurrentMainStep(currentMainStep - 1);
      setCurrentSubStep(subStepperList[currentMainStep - 2]);
    }
  };

  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: '100%',
        padding: '10px',
        ...containerStyle,
      }}
    >
      <MainStepper
        subStepperList={subStepperList}
        currentSubStep={currentSubStep}
        mainStepperList={mainStepperList}
        currentMainStep={currentMainStep}
        IconInactive={IconInactive}
        IconInProgress={IconInProgress}
        IconComplete={IconComplete}
        containerMainStepperStyle={containerMainStepperStyle}
        lineMainStepperStyle={lineMainStepperStyle}
        fontStyle={fontStyle}
        iconCompleteColor={iconCompleteColor}
        iconInactiveColor={iconInactiveColor}
        iconInProgressColor={iconInProgressColor}
      />
      <SubStepper
        subStepperList={subStepperList}
        currentMainStep={currentMainStep - 1}
        completedSteps={currentSubStep}
        subStepperActiveColor={subStepperActiveColor}
        subStepperInactiveColor={subStepperInactiveColor}
        containerSubStepperStyle={containerSubStepperStyle}
        lineSubStepperStyle={lineSubStepperStyle}
      />
      {children && (
        <SwipeableViews index={slideIndex}>{children}</SwipeableViews>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          ...containerBtnStyle,
        }}
      >
        {(backPreviousMainStep &&
          currentSubStep !== currentMainStep &&
          BackButton(handleBack)) ||
          (currentSubStep !== 1 && BackButton(handleBack))}
        <div style={{ marginLeft: 'auto' }}>
          {subStepperList[currentMainStep - 1] === currentSubStep &&
            SaveAsDraftButton}
          {NextButton(handleNext)}
        </div>
      </div>
    </div>
  );
};

export default SSS;
