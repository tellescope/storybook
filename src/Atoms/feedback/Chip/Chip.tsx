import type React from "react"
import { Chip, type ChipProps } from "@mui/material"
import { styled } from "@mui/material/styles"

type CustomChipVariant = "default" | "primary" | "secondary" | "tertiary" | "error" | "warning" | "info" | "success"
type CustomChipState = "enabled" | "hovered" | "focused" | "disabled" | "pressed"

interface CustomChipProps extends Omit<ChipProps, "color"> {
  chipVariant?: CustomChipVariant
  chipState?: CustomChipState
}

const StyledChip = styled(Chip)<CustomChipProps>(({ theme, chipVariant, chipState, variant }) => {
  const getVariantStyles = () => {
    const isOutlined = variant === "outlined"

    switch (chipVariant) {
      case "default":
        return {
          backgroundColor: isOutlined ? "transparent" : "#f3f4f6", // gray-100
          color: isOutlined ? "#374151" : "#111827", // gray-700 : gray-900
          borderColor: isOutlined ? "#d1d5db" : "transparent", // gray-300
          "&:hover": {
            backgroundColor: isOutlined ? "#f9fafb" : "#e5e7eb", // gray-50 : gray-200
          },
        }
      case "primary":
        return {
          backgroundColor: isOutlined ? "transparent" : theme.palette.primary.main,
          color: isOutlined ? theme.palette.primary.main : theme.palette.primary.contrastText,
          borderColor: isOutlined ? theme.palette.primary.main : "transparent",
          "&:hover": {
            backgroundColor: isOutlined ? "#eff6ff" : theme.palette.primary.dark, // blue-50
          },
        }
      case "secondary":
        return {
          backgroundColor: isOutlined ? "transparent" : theme.palette.secondary.main,
          color: isOutlined ? theme.palette.secondary.main : theme.palette.secondary.contrastText,
          borderColor: isOutlined ? theme.palette.secondary.main : "transparent",
          "&:hover": {
            backgroundColor: isOutlined ? "#faf5ff" : theme.palette.secondary.dark, // purple-50
          },
        }
      case "tertiary":
        return {
          backgroundColor: isOutlined ? "transparent" : "#ec4899", // pink-500
          color: isOutlined ? "#ec4899" : "#ffffff",
          borderColor: isOutlined ? "#ec4899" : "transparent",
          "&:hover": {
            backgroundColor: isOutlined ? "#fdf2f8" : "#db2777", // pink-50 : pink-600
          },
        }
      case "error":
        return {
          backgroundColor: isOutlined ? "transparent" : theme.palette.error.main,
          color: isOutlined ? theme.palette.error.main : theme.palette.error.contrastText,
          borderColor: isOutlined ? theme.palette.error.main : "transparent",
          "&:hover": {
            backgroundColor: isOutlined ? "#fef2f2" : theme.palette.error.dark, // red-50
          },
        }
      case "warning":
        return {
          backgroundColor: isOutlined ? "transparent" : theme.palette.warning.main,
          color: isOutlined ? theme.palette.warning.main : theme.palette.warning.contrastText,
          borderColor: isOutlined ? theme.palette.warning.main : "transparent",
          "&:hover": {
            backgroundColor: isOutlined ? "#fff7ed" : theme.palette.warning.dark, // orange-50
          },
        }
      case "info":
        return {
          backgroundColor: isOutlined ? "transparent" : theme.palette.info.main,
          color: isOutlined ? theme.palette.info.main : theme.palette.info.contrastText,
          borderColor: isOutlined ? theme.palette.info.main : "transparent",
          "&:hover": {
            backgroundColor: isOutlined ? "#f0f9ff" : theme.palette.info.dark, // sky-50
          },
        }
      case "success":
        return {
          backgroundColor: isOutlined ? "transparent" : theme.palette.success.main,
          color: isOutlined ? theme.palette.success.main : theme.palette.success.contrastText,
          borderColor: isOutlined ? theme.palette.success.main : "transparent",
          "&:hover": {
            backgroundColor: isOutlined ? "#f0fdf4" : theme.palette.success.dark, // green-50
          },
        }
      default:
        return {}
    }
  }

  const getStateStyles = () => {
    switch (chipState) {
      case "disabled":
        return {
          opacity: 0.5,
          pointerEvents: "none" as const,
        }
      case "pressed":
        return {
          transform: "scale(0.95)",
        }
      case "focused":
        return {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: "2px",
        }
      default:
        return {}
    }
  }

  return {
    ...getVariantStyles(),
    ...getStateStyles(),
    borderWidth: variant === "outlined" ? "2px" : "0px",
    borderStyle: "solid",
    transition: "all 0.2s ease-in-out",
  }
})

export const CustomChip: React.FC<CustomChipProps> = ({
  chipVariant = "default",
  chipState = "enabled",
  variant = "filled",
  disabled,
  ...props
}) => {
  return (
    <StyledChip
      chipVariant={chipVariant}
      chipState={chipState}
      variant={variant}
      disabled={disabled || chipState === "disabled"}
      {...props}
    />
  )
}
