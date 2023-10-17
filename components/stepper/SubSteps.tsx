import { Box, Stack } from '@mui/material';
import React from 'react';
import myColors from '../constant/myColors';

interface IProps {
  subSteps: number[];
  completedSteps: number;
  currentMainStep: number;
}

const SubStep = ({ subSteps, currentMainStep, completedSteps }: IProps) => {
  if (subSteps[currentMainStep] > 1) {
    return (
      <Stack marginX={4} marginTop={4} direction="row">
        {Array.from({ length: subSteps[currentMainStep] }).map((_, index) => (
          <Box
            borderBottom={2}
            borderColor={
              completedSteps >= index + 1 ? myColors.primary : 'gray'
            }
            flex={1}
            height={0}
            bgcolor="red"
            marginX={1}
          />
        ))}
      </Stack>
    );
  } else {
    return null;
  }
};

export default SubStep;
