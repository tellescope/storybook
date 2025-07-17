import { Badge, Box, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Stack, Typography } from "@mui/material";
import { createContext, useContext, useEffect, useState, type JSX, type ReactNode } from "react";
import { Button } from "../../../atoms/button/button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Input } from "../../../atoms/input/input";
import TinySelect from "../../../atoms/table-control-elements/tiny-select/tiny-select";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

type SortItem = { field: string, order: string };



type DetailSelectContextType = {
  filter: { value: string; filterOption: string } | null;
  sort: SortItem[];
  setFilter: React.Dispatch<React.SetStateAction<{ value: string; filterOption: string } | null>>;
  setSort: React.Dispatch<React.SetStateAction<SortItem[]>>;
  availableSortFields: {
    label: string;
    value: string;
    icon: JSX.Element;
  }[],
  filterOptions: {
    label: string;
    value: string;
  }[]
  defaultOpen?: boolean;

  onAddSort?: (field: string) => void;
  onDeleteSort?: (field: string) => void;
  onChangeSort?: (field: string, order: string) => void;
  onChangeSortOrder?: (field: string, order: string) => void;

  OnSetFilterOption?: (option: string) => void;
  OnSetFilterValue?: (value: string) => void;
  OnClearFilter?: () => void;
};

const DetailSelectContext = createContext<DetailSelectContextType | undefined>(undefined);


type StateProps = {
  filter?: { value: string; filterOption: string } | null;
  setFilter?: React.Dispatch<React.SetStateAction<{ value: string; filterOption: string } | null>>;
  sort?: SortItem[];
  setSort?: React.Dispatch<React.SetStateAction<SortItem[]>>;
  appearance?: 'sort' | 'filter';
  availableSortFields: {
    label: string;
    value: string;
    icon: JSX.Element;
  }[],
  filterOptions: {
    label: string;
    value: string;
  }[],
  defaultOpen?: boolean;

  onAddSort?: (field: string) => void;
  onDeleteSort?: (field: string) => void;
  onChangeSort?: (field: string, order: string) => void;
  onChangeSortOrder?: (field: string, order: string) => void;

  OnSetFilterOption?: (option: string) => void;
  OnSetFilterValue?: (value: string) => void;
  OnClearFilter?: () => void;
};



function ProviderWrapper({
  filter: propFilter,
  setFilter: propSetFilter,
  sort: propSort,
  setSort: propSetSort,
  availableSortFields,
  filterOptions,
  children,
  defaultOpen,
  ...rest
}: Omit<StateProps, "appearance"> & { children: ReactNode }) {
  // Internal state if not provided
  const [internalFilter, internalSetFilter] = useState<{ value: string; filterOption: string } | null>(null);
  const [internalSort, internalSetSort] = useState<SortItem[]>([{ field: 'name', order: 'ascending' }]);

  const value = {
    filter: propFilter !== undefined ? propFilter : internalFilter,
    setFilter: propSetFilter !== undefined ? propSetFilter : internalSetFilter,
    sort: propSort !== undefined ? propSort : internalSort,
    setSort: propSetSort !== undefined ? propSetSort : internalSetSort,
    availableSortFields: availableSortFields,
    filterOptions: filterOptions,
    defaultOpen,
    ...rest
  };

  return <DetailSelectContext.Provider value={value}>{children}</DetailSelectContext.Provider>;
}


// Final export
export default function DetailSelect({ appearance = "sort", ...rest }: StateProps) {
  return (
    <ProviderWrapper {...rest} >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 240, gap: 1 }}>
        <DetailSelectContent appearance={appearance} />
      </Box>
    </ProviderWrapper>
  );
}


const DetailSelectContent = ({ appearance = "sort" }: { appearance?: 'sort' | 'filter' }) => {
  return (
    appearance === "filter" ? <DetailSelectPending /> : <DetailSelectSort />
  )
}

/* Default Select Detail Variant */

const menuStyle = {
  sx: {
    maxHeight: "233px !important",
    "& .MuiTypography-root": { fontSize: "0.875rem" },
    "& .MuiListItemIcon-root": {
      minWidth: "28px !important",
      "svg": { width: "20px" }
    },
    "& .MuiButtonBase-root.MuiMenuItem-root ": {
      borderRadius: "4px"
    },
  }
};

const addSortStyle = {
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
  },
  "&": {
    padding: "8px 0"
  }
};


// Main menu component
function DetailSelectSort() {
  const { sort, setSort, defaultOpen, onChangeSort, onAddSort, onDeleteSort, onChangeSortOrder } = useContext(DetailSelectContext)!;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const [anchorAddSort, setAnchorAddSort] = useState<null | HTMLElement>(null);
  const [anchorDeleteSort, setAnchorDeleteSort] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleClickOnAddSort = (e: React.MouseEvent<HTMLLIElement>) => setAnchorAddSort(e.currentTarget);
  const handleClickOnDeleteSort = (e: React.MouseEvent<HTMLLIElement>) => setAnchorDeleteSort(e.currentTarget);
  const handleCloseAdd = () => setAnchorAddSort(null);
  const handleCloseDelete = () => setAnchorDeleteSort(null);

  const handleSetSortField = (field: string, replaced: string) => {
    setSort(prev => prev.map((item) => {
      // Replace the field if it matches the replaced one
      // This ensures that the field is updated correctly without mutating the original array
      if (item.field === replaced) {
        return { ...item, field };
      }
      return item;
    }));
    onChangeSort?.(field, sort.find(item => item.field === replaced)?.order || 'ascending')
  };

  const handleSetSortOrder = (order: string, field: string) => {
    setSort(prev => prev.map((item) => item.field === field ? { ...item, order } : item));
    onChangeSortOrder?.(field, order);
  };

  const handleAddSort = (field: string) => {
    setSort(prev => [...prev, { field, order: 'ascending' }]);
    onAddSort?.(field);
    handleCloseAdd();
  };

  const handleDeleteSort = (field: string) => {
    setSort(prev => prev.filter(item => item.field !== field));
    onDeleteSort?.(field);
    handleCloseDelete();
  };

  const usedFields = sort.map(s => s.field);


  useEffect(() => {
    // Simulate a reference to a button
    const menu = document.getElementById('menu-button');
    if (defaultOpen) {
      if (menu) {
        setAnchorEl(menu);
      }
    }
    else {
      setAnchorEl(null);
    }
  }, [defaultOpen])



  return (
    <>
      <Button
        color="info"
        id="menu-button"
        sx={{
          backgroundColor: '#0288D114',
          borderRadius: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          px: 1.5, py: 0.5, width: 'fit-content',
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: '#0288D129'
          },
          boxShadow: "none !important"

        }}
        onClick={handleClick}
      >
        <ArrowUpwardIcon sx={{ fontSize: 18, color: '#0288D1' }} />
        <Typography sx={{ color: '#0288D1', fontWeight: 500, ml: 0.5 }} variant="body2">Value</Typography>
        <KeyboardArrowDownIcon sx={{ color: '#0288D1', ml: 0.5 }} />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{
          vertical: -5,
          horizontal: 'left',
        }}
        elevation={1}
        MenuListProps={{ sx: { padding: 0 }, 'aria-labelledby': 'menu-button', }}
      >
        <Paper
          elevation={0}
          sx={{
            p: "8px",
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            width: 220,
            border: "1px solid #0000001F",
            borderRadius: "5px"
          }}
        >
          {sort.map((item, index) => (
            <SortRow
              key={index}
              index={index}
              field={item.field}
              order={item.order}
              onSetField={handleSetSortField}
              onSetOrder={handleSetSortOrder}
              usedFields={usedFields}
            />
          ))}

          <MenuList
            dense
            sx={{
              padding: 0,
              "& .MuiMenuItem-root": {
                padding: "4px 8px",
                borderRadius: "4px",
              },
            }}
          >
            <MenuItem onClick={handleClickOnAddSort} sx={{ color: 'text.disabled' }}>
              <ListItemIcon sx={{ color: 'text.disabled' }}><AddIcon fontSize="small" /></ListItemIcon>
              <ListItemText><Typography variant="body2">Add sort</Typography></ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClickOnDeleteSort} sx={{ color: 'text.disabled' }}>
              <ListItemIcon sx={{ color: 'text.disabled' }}><DeleteIcon fontSize="small" /></ListItemIcon>
              <ListItemText><Typography variant="body2">Delete sort</Typography></ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Menu>

      <AddSortMenu
        open={Boolean(anchorAddSort)}
        anchorEl={anchorAddSort}
        onClose={handleCloseAdd}
        onAddSort={handleAddSort}
        usedFields={usedFields}
      />

      <DeleteSortMenu
        open={Boolean(anchorDeleteSort)}
        anchorEl={anchorDeleteSort}
        onClose={handleCloseDelete}
        onDeleteSort={handleDeleteSort}
        usedFields={usedFields}
      />
    </>
  );
}

// Sort row component
function SortRow({ field, order, onSetField, onSetOrder, usedFields }: {
  index: number;
  field: string;
  order: string;
  usedFields: string[];
  onSetField: (field: string, replaced: string) => void;
  onSetOrder: (order: string, field: string) => void;
}) {
  const { availableSortFields } = useContext(DetailSelectContext)!;
  const [localField, setLocalField] = useState(field);
  const [localOrder, setLocalOrder] = useState(order);

  useEffect(() => {
    setLocalField(field);
    setLocalOrder(order);
  }, [field, order])

  const handleSetLocalField = (field: string) => {
    setLocalField(field);
    onSetField(field, localField);
  }

  const handleSetLocalOrder = (order: string) => {
    setLocalOrder(order);
    onSetOrder(order, localField);
  }
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (searchTerm === "") return;
    setSearchTerm("");
  }, [])

  const search = availableSortFields.filter(f => f.label.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box sx={{ display: 'flex', gap: "2px" }}>
      <TinySelect
        value={localField}
        onChange={handleSetLocalField}
        FormControlProps={{ sx: { width: "auto" } }}
        MenuProps={{
          MenuListProps: {
            sx: {
              padding: "8px 0"
            },
            autoFocusItem: false,
          },
          PaperProps: {
            sx: {
              ...menuStyle.sx,
              border: "1px solid #0000001F",
              borderRadius: "5px"
            },
            elevation: 1
          }
        }}
        sx={{
          fontSize: "12px !important",
          textTransform: "capitalize",

        }}
      >
        <Input
          appearance="distinct"
          placeholder="Search For Property"
          size="small"
          sx={{
            mb: "4px",
            mx: "4px",
            "& .MuiInputBase-input": {
              padding: "4px 8px"
            },
          }}
          onKeyDown={(e) => {
            e.stopPropagation(); // prevent key events from being captured by the menu
          }}
          // elevation={1}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        {/* </ListSubheader> */}
        {search.map(f => (
          <MenuItem key={f.value} value={f.value} disabled={usedFields.includes(f.value) && f.value !== field}>
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
      </TinySelect>

      <TinySelect
        value={localOrder}
        onChange={handleSetLocalOrder}
        FormControlProps={{ sx: { width: "auto" } }}
        MenuProps={{
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          transformOrigin: {
            vertical: "top",
            horizontal: 100,
          },
          PaperProps: {
            sx: {
              ...menuStyle.sx,
              border: "1px solid #0000001F",
              borderRadius: "5px"
            },
            elevation: 1
          }
        }}
        sx={{
          fontSize: "12px !important",
          width: "88px !important",
          textTransform: "capitalize"
        }}
      >
        <MenuItem value="ascending">Ascending</MenuItem>
        <MenuItem value="descending">Descending</MenuItem>
      </TinySelect>
    </Box>
  );
}

// Add sort popup
function AddSortMenu({ open, anchorEl, onClose, onAddSort, usedFields }: {
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
  onAddSort: (field: string) => void;
  usedFields: string[];
}) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { availableSortFields } = useContext(DetailSelectContext)!;
  const search = availableSortFields.filter(f => f.label.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      MenuListProps={{
        disablePadding: true,
        sx: { px: "4px" },
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: -10 }}
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
      <MenuList sx={addSortStyle} autoFocusItem={false}
      >
        <Input
          autoFocus={true}
          appearance="distinct"
          placeholder="Search For Property"
          size="small"
          sx={{
            mb: "4px",
            mx: "4px",
            "& .MuiInputBase-input": {
              padding: "4px 8px"
            }
          }}
          onKeyDown={(e) => {
            e.stopPropagation(); // prevent key events from being captured by the menu
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        {search.map(f => (
          <MenuItem key={f.value} onClick={() => onAddSort(f.value)} disabled={usedFields.includes(f.value)}>
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

// Delete sort popup
function DeleteSortMenu({ open, anchorEl, onClose, onDeleteSort, usedFields }: {
  open: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
  onDeleteSort: (field: string) => void;
  usedFields: string[];
}) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { availableSortFields } = useContext(DetailSelectContext)!;
  const search = availableSortFields.filter(f => f.label.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <Menu open={open} onClose={onClose} anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: -10 }}
      MenuListProps={{
        disablePadding: true,
        sx: { px: "4px" },
        autoFocusItem: false,
      }}
      sx={{
        "& .MuiPaper-root": {
          width: "220px !important",
          border: "1px solid #0000001F",
          borderRadius: "5px"
        }
      }}
      elevation={1}
    >
      <MenuList sx={addSortStyle} autoFocusItem={false}>
        <Input
          autoFocus
          appearance="distinct"
          placeholder="Search For Property"
          size="small"
          sx={{
            mb: "4px",
            mx: "4px",
            "& .MuiInputBase-input": {
              padding: "4px 8px"
            }
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            e.stopPropagation(); // prevent key events from being captured by the menu
          }}
          value={searchTerm}
        />
        {search.map(f => (
          <MenuItem key={f.value} onClick={() => onDeleteSort(f.value)} disabled={!usedFields.includes(f.value)}>
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

/* Filter Select Detail Variant */
const DetailSelectFilterMenuStyle = {
  sx: {
    maxHeight: "242px !important",
    "& .MuiTypography-root": { fontSize: "0.875rem" },
    "& .MuiListItemIcon-root": {
      minWidth: "28px !important",
      "svg": { width: "20px" }
    },
    "& .MuiButtonBase-root.MuiMenuItem-root ": {
      borderRadius: "4px"
    },
  }
};

const DetailSelectPending = () => {
  const { filter, setFilter, defaultOpen, OnSetFilterValue, OnClearFilter, OnSetFilterOption } = useContext(DetailSelectContext)!;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSetFilter = (field: string) => {
    setFilter((prev) => ({
      value: prev?.value ?? "",
      filterOption: field || "contains"
    }));
    OnSetFilterOption?.(field);
  };

  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (searchTerm === "") return;
    setSearchTerm("");
  }, [])

  const handleChangeFilterValue = (value: string) => {
    setSearchTerm(value);
    if (value === "") {
      setFilter(null);
      OnClearFilter?.();
    } else {
      setFilter((prev) => ({
        value: value || "",
        filterOption: prev?.filterOption ?? "contains"
      }));
      OnSetFilterValue?.(value);
    }
  }

  useEffect(() => {
    // Simulate a reference to a button
    const menu = document.getElementById('menu-button');
    if (defaultOpen) {
      if (menu) {
        setAnchorEl(menu);
      }
    }
    else {
      setAnchorEl(null);
    }
  }, [defaultOpen])


  return (
    <>
      <Button
        color="info"
        id={"menu-button"}
        sx={{
          backgroundColor: filter?.value ? '#0288D114' : "transparent",
          borderRadius: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          px: 1.5, py: 0.5, width: 'fit-content',

          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: filter?.value ? '#0288D129' : "#EEEDF4"
          },
          boxShadow: "none !important"

        }}
        onClick={handleClick}
      >
        <Badge color="error" variant="dot" sx={{ alignItems: "center" }} >
          <Typography
            sx={{ color: !filter?.value ? "#0000008F" : '#0288D1', fontWeight: 500, ml: 0.5 }} variant="body2"
          >
            <Typography
              sx={{
                fontWeight: 600,
                mr: 0.5,
                color: !filter?.value ? "#0000008F" : undefined,
                fontSize: "0.875rem"
              }}
              component={"span"}
            >
              Aa
            </Typography>
            <Typography
              sx={{
                mr: 0.5,
                display: "inline-flex",
                fontSize: "0.875rem"
              }}>
              {filter?.filterOption ? `${filter?.filterOption} :` : ""}
            </Typography>
            <Box sx={{
              maxWidth: "50px",
              display: "inline-flex",
            }}>
              <Typography
                sx={{
                  mr: 0.5,
                  fontSize: "0.875rem",
                  maxWidth: "50px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                component="span"
                noWrap={true}
              >
                {
                  filter?.value || "Value"
                }
              </Typography>
            </Box>
          </Typography>
          <KeyboardArrowDownIcon sx={{ color: !filter?.value ? "#0000001F" : '#0288D1', ml: 0.5 }} />
        </Badge>

      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{
          vertical: -5,
          horizontal: 'left',
        }}
        elevation={1}
        MenuListProps={{ sx: { padding: 0 } }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            width: 220,
            border: "1px solid #0000001F",
            borderRadius: "5px"
          }}
        >
          <FilterRow
            field={filter?.filterOption || "contains"}
            onSetField={handleSetFilter}
          />
          <Input
            appearance="distinct"
            placeholder="Type a value..."
            size="small"
            sx={{
              "& .MuiInputBase-input": {
                padding: "4px 8px"
              },
            }}
            // elevation={1}
            onChange={(e) => handleChangeFilterValue(e.target.value)}
            value={searchTerm}
          />
        </Paper>
      </Menu>
    </>
  );
}

// Filter row component
function FilterRow({ field, onSetField, }: {
  field: string;
  onSetField: (field: string) => void;
}) {
  const { filterOptions } = useContext(DetailSelectContext)!;
  const [localField, setLocalField] = useState<string>(field);

  useEffect(() => {
    setLocalField(field);
  }, [field])

  const handleSetLocalField = (field: string) => {
    setLocalField(field);
    onSetField(field);
  }

  return (
    <Stack sx={{
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
    }}>
      <Typography
        sx={{ fontSize: "12px", color: "#0000001F" }}
        component={"span"}
      >
        Name
      </Typography>
      <TinySelect
        value={localField}
        onChange={handleSetLocalField}
        FormControlProps={{ sx: { width: "auto" } }}
        MenuProps={{
          PaperProps: {
            sx: {
              ...DetailSelectFilterMenuStyle.sx,
              border: "1px solid #0000001F",
              borderRadius: "5px"
            },
            elevation: 1
          }
        }}
        sx={{
          fontSize: "12px !important",
          textTransform: "capitalize",
          width: "80px !important",

        }}
      >
        {filterOptions.map(f => (
          <MenuItem key={f.value} value={f.value}>
            <ListItemText sx={{ textTransform: "capitalize" }}>{f.label}</ListItemText>
          </MenuItem>
        ))}
      </TinySelect>
    </Stack>
  );
}