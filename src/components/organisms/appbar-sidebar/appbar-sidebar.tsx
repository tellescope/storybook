import { Stack } from "@mui/material";
import type { FC } from "react";
import Appbar from "./appbar";
import Sidebar from "./sidebar";

interface AppbarSidebarProps {
    color?: "standard" | "transitional";
    expanded?: boolean;
    children?: React.ReactNode;
}


const AppbarSidebar: FC<AppbarSidebarProps> = ({ color = "standard", expanded = false, children }) => {
    const bgColor = color === "standard" ? "#E3E2E9" : "#F5F5F5";
    return (
        <Stack sx={{
            backgroundColor: bgColor,
            overflow: "hidden",
            borderRadius: "28px ",
        }}>
            <Appbar bgColor={bgColor} />
            <Stack sx={{
                flexDirection: "row",
            }}>
                <Sidebar expanded={expanded} bgColor={bgColor} />
                <Stack sx={{
                    flexGrow: 1,
                    height: "calc(100vh - 64px)",
                    paddingRight: "16px",
                    paddingBottom: "16px",
                    borderRadius: "8px 28px",
                }}>
                    <Stack sx={{
                        borderRadius: "28px",
                        background: "#fff",
                        height: "100%",
                        padding: "24px"
                    }}>
                        {children}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AppbarSidebar
