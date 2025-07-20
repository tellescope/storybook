import { Box, FormControlLabel, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import CheckBox from "../../components/atoms/checkbox/checkbox";
import { Button } from "../../components/atoms/button/button";
import { useState } from "react";
import TellescopeLogo from "../../assets/tellescope-logo.svg";

export interface FormStep {
  content: React.ReactNode;

  onNext?: () => void;
}

interface SentFormProps {
  steps: FormStep[];
  onComplete?: () => void;
}

export const SentForm = ({ steps, onComplete }: SentFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [checked, setChecked] = useState(false);

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (currentStepData.onNext) {
      currentStepData.onNext();
    }

    if (isLastStep) {
      onComplete?.();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Box
      bgcolor={"#F4F3FA"}
      width={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <LinearProgress
          sx={{
            mt: "24px",
            height: "16px",
            width: "720px",
            borderRadius: "8px",
            backgroundColor: "#bbc6e9",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#798ED0",
            },
          }}
          variant="determinate"
          value={progress}
        />
        {currentStep !== 0 && (
          <Box pt={"48px"}>
            <img src={TellescopeLogo} alt="Tellescope Logo" />
          </Box>
        )}
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"720px"}
          height={"100%"}
        >
          <Box height={"100%"}>{currentStepData.content}</Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box sx={{ px: "10px", width: "720px" }}>
            {currentStep === 0 && (
              <FormControlLabel
                sx={{ gap: 0, alignItems: "flex-start" }}
                control={
                  <CheckBox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    sx={{
                      "&.Mui-checked": {
                        color: "#798ED0",
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="caption" color="text.secondary">
                    a longer label and will displayed at a smaller size in order
                    to conserve valuable space. This can be used to display some
                    disclaimer about terms or conditions that might be a bit too
                    long for a normal label area
                  </Typography>
                }
              />
            )}
          </Box>
          <Box py="48px" width={"100%"}>
            <Button
              onClick={handleNext}
              sx={{
                boxShadow: "none",
                backgroundColor: "#585E72",
                "&:disabled": {
                  backgroundColor: "#E5E7EB",
                  color: "#9CA3AF",
                },
              }}
              fullWidth
            >
              CONTINUE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
