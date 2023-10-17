import { Stack, Box, Typography } from '@mui/material';
import React from 'react';
import RedioUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import RadioChecked from '@mui/icons-material/RadioButtonChecked';

interface IProps {
  mainSteps: string[];
  subSteps: number[];
  completedMainSteps: number;
  currentSubStep: number;
}

const MainSteps = ({
  mainSteps,
  subSteps,
  currentSubStep,
  completedMainSteps,
}: IProps) => {
  return (
    <Stack mb={4} direction="row" justifyContent="space-between">
      {mainSteps.slice(0, mainSteps.length - 1).map((el, index) => (
        <Stack flex={1} direction="row" alignItems="center">
          {(((index + 1 <= completedMainSteps &&
            subSteps[completedMainSteps - 1] === currentSubStep) ||
            index + 1 < completedMainSteps) && (
            <RadioChecked color="primary" sx={{ marginRight: 1 }} />
          )) ||
            (subSteps[completedMainSteps - 1] > currentSubStep &&
              index + 1 <= completedMainSteps && (
                <RedioUnchecked color="primary" sx={{ marginRight: 1 }} />
              )) || <RedioUnchecked color="disabled" sx={{ marginRight: 1 }} />}
          <Typography>{el}</Typography>
          <Box
            borderBottom={1}
            borderColor="gray"
            flex={1}
            height={0}
            bgcolor="red"
            marginX={1}
          />
        </Stack>
      ))}
      <Stack direction="row">
        {(((mainSteps.length <= completedMainSteps &&
          subSteps[completedMainSteps - 1] === currentSubStep) ||
          mainSteps.length < completedMainSteps) && (
          <RadioChecked color="primary" sx={{ marginRight: 1 }} />
        )) ||
          (subSteps[completedMainSteps - 1] > currentSubStep &&
            mainSteps.length <= completedMainSteps && (
              <RedioUnchecked color="primary" sx={{ marginRight: 1 }} />
            )) || <RedioUnchecked color="disabled" sx={{ marginRight: 1 }} />}
        <Typography>{mainSteps[mainSteps.length - 1]}</Typography>
      </Stack>
    </Stack>
  );
};

export default MainSteps;
