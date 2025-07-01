import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import type { ReactNode } from "react";
import { useState } from "react";

interface CustomAccordionProps {
  title?: string;
  children?: ReactNode;
    expanded?: boolean;
  selected?: boolean;
}

export default function CustomAccordion({
  title = "Tagged as",
  children,
  expanded = false,
  selected = false,
}: CustomAccordionProps) {
  const [expandedState, setExpandedState] = useState(expanded);
//   const [selectValue, setSelectValue] = useState("");

  const handleChange = () => {
    setExpandedState(!expandedState);
  };

  return (
    <Accordion
      expanded={expandedState}
      onChange={handleChange}
      elevation={0}
      sx={{
        borderBottom: selected ? "none" : "1px solid #E2E8F0",
        backgroundColor: selected ? "#E2E8F0" : "transparent",
        "&:before": {
          display: "none",
        },
        "&:hover": {
          outline: "none",
          borderColor: "white"
        },
        "&.Mui-focused": {
          outline: "none",
          borderColor: "white"
        },
        // "&.Mui-expanded": {
        //   backgroundColor: "#E2E8F0"
        // }
      }}
    >
      <AccordionSummary
        sx={{
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
          "& .MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
          }
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ArrowRightIcon
            fontSize="medium"
            sx={{
              transform: expandedState ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          />
          <Typography
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", ml: 3 }}
          >
            {title}
          </Typography>
          <IconButton>
            <AddIcon sx={{ color: "#000000" }} />
          </IconButton>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {/* <List sx={{ p: 0 }}>
          {selectOptions.map((option) => (
            <ListItem key={option.value} disablePadding>
              <ListItemButton
                selected={selectValue === option.value}
                onClick={() => {
                    setSelectValue(option.value);
                    setExpanded(false);
                }}
                sx={{ 
                  borderRadius: 1, 
                  mb: 0.5,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)"
                  }
                }}
              >
                <ListItemText primary={option.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
