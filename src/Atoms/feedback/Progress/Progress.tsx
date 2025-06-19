import { LinearProgress, CircularProgress, Typography, Box, circularProgressClasses } from "@mui/material"

interface ProgressProps {
  variant?: "determinate" | "indeterminate" | "buffer"
  value?: number
  type?: "linear" | "circular"
  color?: "primary" | "secondary" | "inherit"
  label?: boolean
  size?: number
}

export default function Progress({
  type = "linear",
  variant = "determinate",
  value = 50,
  color = "primary",
  label = false,
  size = 32,
}: ProgressProps) {
  if (type === "circular") {
    // For circular progress, only allow determinate or indeterminate
    const circularVariant = variant === "buffer" ? "determinate" : variant
    return (
      <Box position="relative" display="inline-flex" justifyContent="center" alignItems="center">
        <CircularProgress
          variant={circularVariant}
          value={value}
          color={color}
          size={size}
          thickness={4.5}
          sx={{
            [`& .${circularProgressClasses.circle}`]: {
              strokeDasharray: "120",
              strokeDashoffset: "30",
              stroke: "#4A5D92",
            },
          }}
        />
        {size === 32 && variant === "determinate" && (
          <Box
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            right={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="body2"
              component="div"
              color="textSecondary"
              fontWeight={500}
              sx={{
                fontSize: "9px",
                lineHeight: 1,
              }}
            >{`${Math.round(value)}%`}</Typography>
          </Box>
        )}
      </Box>
    )
  }

  return (
    <Box display="flex" alignItems="center" width="200px">
      <Box flexGrow={1}>
        <LinearProgress
          variant={variant}
          value={value}
          valueBuffer={variant === "buffer" ? 70 : undefined}
          color={color}
          sx={{
            height: 4,
            borderRadius: 2,
            backgroundColor: (theme) => theme.palette.grey[300],
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#4A5D92",
            },
            ...(variant === "buffer" && {
              "& .MuiLinearProgress-bar2Buffer": {
                backgroundColor: "transparent",
                borderRadius: 0,
                // Optionally, add border or boxShadow for a visible square
              },
            }),
          }}
        />
      </Box>
      {label && variant !== "indeterminate" && (
        <Box ml={1}>
          <Typography variant="body2">{`${Math.round(value)}%`}</Typography>
        </Box>
      )}
    </Box>
  )
}

// LinearBuffer demo component (MUI animated buffer example)
import  { useState, useRef, useEffect } from 'react';

export function LinearBufferDemo() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress === 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        setProgress(progress + 1);
        if (buffer < 100 && progress % 5 === 0) {
          const newBuffer = buffer + 1 + Math.random() * 10;
          setBuffer(newBuffer > 100 ? 100 : newBuffer);
        }
      }
    };
  }, [progress, buffer]);

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
  );
}
