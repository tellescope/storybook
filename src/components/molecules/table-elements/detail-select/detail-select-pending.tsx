import { Box, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from "@mui/material";
import { createContext, useContext, useEffect, useState, type JSX, type ReactNode } from "react";
import { Button } from "../../../atoms/button/button";
import { Input } from "../../../atoms/input/input";

type SortItem = string;


type DetailSelectContextType = {
    sort: SortItem[];
    setSort: React.Dispatch<React.SetStateAction<SortItem[]>>;
    availableFilterFields: {
        label: string;
        value: string;
        icon: JSX.Element;
    }[],
    defaultOpen?: boolean;
    onChangeFilter?: (field: string) => void;
    buttonContent: ReactNode;
};

const DetailSelectContext = createContext<DetailSelectContextType | undefined>(undefined);


type StateProps = {
    sort?: SortItem[];
    setSort?: React.Dispatch<React.SetStateAction<SortItem[]>>;
    appearance?: 'sort' | 'filter';
    availableFilterFields: {
        label: string;
        value: string;
        icon: JSX.Element;
    }[],
    defaultOpen?: boolean;
    onChangeFilter?: (field: string) => void;
    buttonContent: ReactNode;
};


function ProviderWrapper({
    sort: propSort,
    setSort: propSetSort,
    availableFilterFields,
    defaultOpen,
    children,
    ...rest
}: Omit<StateProps, "appearance"> & { children: ReactNode }) {
    // Internal state if not provided
    const [internalSort, internalSetSort] = useState<SortItem[]>(["name"]);

    const value = {
        sort: propSort !== undefined ? propSort : internalSort,
        setSort: propSetSort !== undefined ? propSetSort : internalSetSort,
        availableFilterFields: availableFilterFields,
        defaultOpen,
        ...rest
    };

    return <DetailSelectContext.Provider value={value}>{children}</DetailSelectContext.Provider>;
}


// Final export
export default function DetailSelectPending({ ...rest }: StateProps) {
    return (
        <ProviderWrapper {...rest} >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 240, gap: 1 }}>
                <DetailSelectFilter />
            </Box>
        </ProviderWrapper>
    );
}


/* Pending Select Detail Variant */

const FilterMenuStyle = {
    padding: 0,
    maxHeight: "215px !important",
    "& .MuiTypography-root": { fontSize: "0.875rem" },
    "& .MuiListItemIcon-root": {
        minWidth: "28px !important",
        "svg": { width: "20px" }
    },
    "& .MuiButtonBase-root.MuiMenuItem-root ": {
        borderRadius: "4px"
    },
    "& .MuiMenuItem-root": {
        padding: "4px 8px",
    }
};


// Main menu component
function DetailSelectFilter() {
    const { sort, setSort, defaultOpen, onChangeFilter, buttonContent } = useContext(DetailSelectContext)!;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleAddSort = (field: string) => {
        setSort(() => [field]);
        onChangeFilter?.(field);
        handleClose();
    };

    useEffect(() => {
        // Simulate a reference to a button
        const button = document.getElementById('menu-button');
        if (defaultOpen) {
            if (button) {
                setAnchorEl(button);
            }
        }
        else {
            setAnchorEl(null);
        }
    }, [defaultOpen]);


    return (
        <>
            <Button
                id="menu-button"
                appearance="text"
                sx={{
                    // backgroundColor: '#0288D114',
                    background: anchorEl ? "#EEEDF4" : undefined,
                    color: anchorEl ? "#0000008F" : "#00000040",
                    borderRadius: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 1, py: 0.5, width: 'fit-content',
                    textTransform: "capitalize",
                    "&:hover": {
                        backgroundColor: '#EEEDF4',
                        color: "#0000008F",
                    },
                    boxShadow: "none !important"

                }}
                onClick={handleClick}
            >
                {
                    buttonContent
                }

            </Button>


            <FilterMenu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                onAddSort={handleAddSort}
                usedFields={sort}
            />
        </>
    );
}


// Filter menu component
function FilterMenu({ open, anchorEl, onClose, onAddSort, usedFields }: {
    open: boolean;
    anchorEl: null | HTMLElement;
    onClose: () => void;
    onAddSort: (field: string) => void;
    usedFields: string[];
}) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { availableFilterFields } = useContext(DetailSelectContext)!;
    const search = availableFilterFields.filter(f => f.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <Menu
            open={open}
            onClose={onClose}
            anchorEl={anchorEl}
            MenuListProps={{
                disablePadding: true,
                sx: { px: "4px", py: "8px" },

            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{
                vertical: -5,
                horizontal: 'left',
            }}
            sx={{
                "& .MuiPaper-root": {
                    width: "220px !important",
                    border: "1px solid #0000001F",
                    borderRadius: "5px"
                }

            }}
            elevation={1}
            disableAutoFocusItem={true}

        >
            <MenuList sx={FilterMenuStyle} autoFocusItem={false}
            >
                <Input
                    autoFocus={true}
                    appearance="distinct"
                    placeholder="Search For Property"
                    size="small"
                    sx={{
                        width: "100%",
                        "& .MuiInputBase-input": {
                            padding: "4px 8px"
                        }
                    }}
                    FormControlProps={{
                        sx: {
                            width: "100%",
                            mb: "4px",
                        }
                    }}
                    onKeyDown={(e) => {
                        e.stopPropagation(); // prevent key events from being captured by the menu
                    }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                {search.map(f => (
                    <MenuItem key={f.value} onClick={() => onAddSort(f.value)} selected={usedFields.includes(f.value)}>
                        <ListItemIcon>{f.icon}</ListItemIcon>
                        <ListItemText>{f.label}</ListItemText>
                    </MenuItem>
                ))}
                {
                    search.length === 0 && (
                        <MenuItem disabled>
                            <ListItemText>No fields found</ListItemText>
                        </MenuItem>
                    )
                }
            </MenuList>
        </Menu>
    );
}
