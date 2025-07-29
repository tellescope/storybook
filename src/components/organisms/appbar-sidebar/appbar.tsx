import { Avatar, Badge, AppBar as MUIAppbar, Stack } from "@mui/material";
import { AppbarSearch } from "../../atoms/input/app-bar-search";
import { IconButton } from "../../atoms/button/icon-button";
import StarIcon from '@mui/icons-material/Star';

const Appbar = ({ bgColor }: { bgColor: string }) => {
    return (
        <MUIAppbar position="sticky" sx={{
            boxShadow: "none",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 24px",
            flexDirection: "row",
            background: bgColor,
        }}>
            <img src="logo.png" alt="Logo" width={154} height={32} />
            <Stack sx={{
                flexDirection: "row",
                gap: "24px",
                alignItems: "center",
            }}>
                <AppbarSearch placeholder="Search database" />
                <Stack sx={{
                    flexDirection: "row",
                    gap: "8px",
                }}>
                    {
                        Array.from({ length: 2 }).map((_, index) => (
                            <IconButton key={index} color="default">
                                <StarIcon />
                            </IconButton>
                        ))
                    }
                    <Badge badgeContent={1} color="error" overlap="circular">
                        <IconButton color="default">
                            <StarIcon />
                        </IconButton>
                    </Badge>
                    {
                        Array.from({ length: 3 }).map((_, index) => (
                            <IconButton key={index} color="default">
                                <StarIcon />
                            </IconButton>
                        ))
                    }
                </Stack>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <Badge badgeContent={"Call"} color="success" overlap="circular" >
                        </Badge>
                    }
                >
                    <Avatar alt="OP" src="/static/images/avatar/2.jpg" />
                </Badge>
            </Stack>
        </MUIAppbar>
    )
}

export default Appbar
