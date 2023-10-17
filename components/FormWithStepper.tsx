import { Stack, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SubSteps from './stepper/SubSteps';
import MainSteps from './stepper/MainSteps';
import SwipeableView from 'react-swipeable-views';

interface IProps {
  mainStepsList: string[];
  subStepsList: number[];
  width: number | string;
  children: React.ReactNode;
}

const FormWithSlider = ({
  children,
  width,
  mainStepsList,
  subStepsList: subStepsListState,
}: IProps) => {
  const [mainStepper, setMainStepper] = useState<number>(1);
  const [subStepper, setSubStepper] = useState<number>(1);
  const [subStepsList, setSubStepsList] = useState<number[]>(subStepsListState);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (subStepsList.length < mainStepsList.length) {
      let newSubStepsList = [...subStepsList];
      while (newSubStepsList.length < mainStepsList.length) {
        newSubStepsList.push(1);
      }
      setSubStepsList(newSubStepsList);
    }
  }, [mainStepsList.length, subStepsList]);

  const handleNext = () => {
    if (subStepper < subStepsList[mainStepper - 1]) {
      setSubStepper(subStepper + 1);
      setSlide(prev => prev + 1);
    } else if (mainStepper < mainStepsList.length) {
      setSlide(prev => prev + 1);
      setSubStepper(1);
      setMainStepper(mainStepper + 1);
    }
  };

  const handleBack = () => {
    if (subStepper > 1) {
      setSubStepper(subStepper - 1);
      setSlide(prev => prev - 1);
    } else if (mainStepper > 1) {
      setSlide(prev => prev - 1);
      setMainStepper(mainStepper - 1);
      setSubStepper(subStepsList[mainStepper - 2]);
    }
  };

  return (
    <Stack width={width || '100%'}>
      <MainSteps
        subSteps={subStepsList}
        currentSubStep={subStepper}
        mainSteps={mainStepsList}
        completedMainSteps={mainStepper}
      />
      <SubSteps
        subSteps={subStepsList}
        currentMainStep={mainStepper - 1}
        completedSteps={subStepper}
      />

      {children && <SwipeableView index={slide}>{children}</SwipeableView>}
      <Stack margin={4} direction="row" justifyContent="space-between">
        {(subStepper > 1 || mainStepper > 1) && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}
        <Stack sx={{ marginLeft: 'auto' }} flexDirection="row">
          {subStepsList[mainStepper - 1] === subStepper && (
            <Button
              sx={{ marginRight: 2 }}
              variant="outlined"
              onClick={() => {
                console.log('Save as Draft');
              }}
            >
              Save as Draft
            </Button>
          )}
          <Button variant="contained" onClick={handleNext}>
            {mainStepsList.length === mainStepper &&
            subStepsList[mainStepper - 1] === subStepper
              ? 'Submit'
              : 'Next'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FormWithSlider;
