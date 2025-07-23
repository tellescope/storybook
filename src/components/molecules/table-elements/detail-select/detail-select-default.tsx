import { Badge, Box, ListItemIcon, ListItemText, ListSubheader, Menu, MenuItem, MenuList, Paper, Stack, Typography } from "@mui/material";
import { createContext, useContext, useEffect, useState, type JSX, type ReactNode } from "react";
import { Button } from "../../../atoms/button/button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Input } from "../../../atoms/input/input";
import TinySelect from "../../../atoms/table-control-elements/tiny-select/tiny-select";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SwapVertIcon from '@mui/icons-material/SwapVert';

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
  }[];
  open?: boolean;
  valueSort?: SortItem[];
  valueFilter?: { value: string; filterOption: string } | null;
  filterField?: string;

  onAddSort?: (field: string) => void;
  onDeleteSort?: () => void;
  onChangeSort?: (field: string, order: "ascending" | "descending", oldField: string) => void;
  onChangeSortOrder?: (field: string, order: "ascending" | "descending") => void;

  onSetFilterOption?: (option: string) => void;
  onSetFilterValue?: (value: string) => void;
  onClearFilter?: () => void;
};

const DetailSelectContext = createContext<DetailSelectContextType | undefined>(undefined);

type Sortprops = {
  appearance: 'sort';
  availableSortFields: {
    label: string;
    value: string;
    icon: JSX.Element;
  }[],
  open?: boolean;
  value?: SortItem[];

  onAddSort?: (field: string) => void;
  onDeleteSort?: () => void;
  onChangeSort?: (field: string, order: "ascending" | "descending", oldField: string) => void;
  onChangeSortOrder?: (field: string, order: "ascending" | "descending") => void;
}

type FilterProps = {
  appearance: 'filter';
  filterOptions: {
    label: string;
    value: string;
  }[],
  open?: boolean;
  value?: { value: string; filterOption: string } | null;
  field: string;

  onSetFilterOption?: (option: string) => void;
  onSetFilterValue?: (value: string) => void;
  onClearFilter?: () => void;
};

type StateProps = (FilterProps | Sortprops);

function ProviderWrapper(props: StateProps & { children?: ReactNode }) {
  // Internal state if not provided
  const [internalFilter, internalSetFilter] = useState<{ value: string; filterOption: string } | null>(null);
  const [internalSort, internalSetSort] = useState<SortItem[]>([]);

  const value = {
    ...props,
    filter: internalFilter,
    setFilter: internalSetFilter,
    sort: internalSort,
    setSort: internalSetSort,
    availableSortFields: 'availableSortFields' in props ? props.availableSortFields : [],
    filterOptions: 'filterOptions' in props ? props.filterOptions : [],
    open: props.open,
    valueSort: 'value' in props && props.appearance === 'sort' ? props.value : undefined,
    valueFilter: 'value' in props && props.appearance === 'filter' ? props.value : undefined,
    filterField: 'field' in props && props.appearance === 'filter' ? props.field : undefined
  };

  return <DetailSelectContext.Provider value={value}>{props.children}</DetailSelectContext.Provider>;
}

// Final export
export default function DetailSelect(props: StateProps) {
  return (
    <ProviderWrapper {...props} >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <DetailSelectContent appearance={props.appearance} />
      </Box>
    </ProviderWrapper>
  );
}

const DetailSelectContent = ({ appearance }: { appearance: 'sort' | 'filter' }) => {
  return (
    appearance === "filter" ? <DetailSelectPending /> : <DetailSelectSort />
  )
}

const randomStringId = () => {
  return Math.random().toString(36).substring(2, 15);
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
  const { sort, setSort, open, onChangeSort, onAddSort, onDeleteSort, onChangeSortOrder, availableSortFields, valueSort } = useContext(DetailSelectContext)!;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const [anchorAddSort, setAnchorAddSort] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleClickOnAddSort = (e: React.MouseEvent<HTMLLIElement>) => setAnchorAddSort(e.currentTarget);
  const handleCloseAdd = () => setAnchorAddSort(null);


  const handleSetSortField = (field: string, replaced: string) => {
    setSort(prev => prev.map((item) => {
      // Replace the field if it matches the replaced one
      // This ensures that the field is updated correctly without mutating the original array
      if (item.field === replaced) {
        return { ...item, field };
      }
      return item;
    }));
    onChangeSort?.(field, (sort.find(item => item.field === replaced)?.order as "ascending" | "descending") || 'ascending', replaced);
  };

  const handleSetSortOrder = (order: "ascending" | "descending", field: string) => {
    setSort(prev => prev.map((item) => item.field === field ? { ...item, order } : item));
    onChangeSortOrder?.(field, order);
  };

  const handleAddSort = (field: string) => {
    setSort(prev => {
      return [...prev, { field, order: 'ascending' }]
    });
    onAddSort?.(field);
    if (sort.length === availableSortFields.length - 1) {
      handleCloseAdd();
    }
  };


  const handleDeleteSort = () => {
    setSort([]);
    onDeleteSort?.();
  };

  const usedFields = sort.map(s => s.field);



  const randomId = randomStringId()

  useEffect(() => {
    // Simulate a reference to a button
    const menu = document.getElementById(randomId);
    if (open) {
      if (menu) {
        setAnchorEl(menu);
      }
    }
    else {
      setAnchorEl(null);
    }
  }, [open]);


  // when Provide a Value
  useEffect(() => {
    setSort(valueSort || [])
  }, [valueSort])




  return (
    <>
      <Button
        color="info"
        id={randomId}
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
        {
          sort.length > 1 ? (
            <SwapVertIcon sx={{ fontSize: 22, color: '#0288D1' }} />
          ) : (
            <ArrowUpwardIcon sx={{ fontSize: 18, color: '#0288D1' }} />
          )
        }
        <Typography sx={{ color: '#0288D1', fontWeight: 500, ml: 0.5 }} variant="body2">
          {
            sort.length === 0 ?
              "Value"
              :
              sort.length === 1
                ? `${sort[0].field}`
                : `${sort.length} Sorts`
          }
        </Typography>
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
            {/* Remove the add sort option if all fields are used */}
            {
              sort.length !== availableSortFields.length ? (
                <MenuItem onClick={handleClickOnAddSort} sx={{ color: 'text.disabled' }}>
                  <ListItemIcon sx={{ color: 'text.disabled' }}><AddIcon fontSize="small" /></ListItemIcon>
                  <ListItemText><Typography variant="body2">Add sort</Typography></ListItemText>
                </MenuItem>
              ) : null
            }
            {/* Remove the add sort option if not all fields are used */}
            {
              sort.length > 0 ? (
                <MenuItem sx={{ color: 'text.disabled' }} onClick={handleDeleteSort} disabled={sort.length === 0}>
                  <ListItemIcon sx={{ color: 'text.disabled' }}><DeleteIcon fontSize="small" /></ListItemIcon>
                  <ListItemText><Typography variant="body2">Delete sort</Typography></ListItemText>
                </MenuItem>
              ) : null
            }
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
  onSetOrder: (order: "ascending" | "descending", field: string) => void;
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
    if (order === "ascending" || order === "descending") {
      setLocalOrder(order);
      onSetOrder(order, localField);
    }
  }
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (searchTerm === "") return;
    setSearchTerm("");
  }, []);

  const search = availableSortFields.filter(f => f.label.toLowerCase().includes(searchTerm.toLowerCase()));

  const isEqual = usedFields.length === availableSortFields.length;

  return (
    <Box sx={{ display: 'flex', gap: "2px" }}>
      <TinySelect
        value={localField}
        onChange={handleSetLocalField}
        FormControlProps={{ sx: { width: "auto" } }}
        MenuProps={{
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          transformOrigin: {
            vertical: "top",
            horizontal: 8,
          },
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
        {
          isEqual ? null : (
            <ListSubheader disableGutters sx={{ lineHeight: "normal" }}>
              <Input
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
                  sx: { width: "100%", mb: "4px", }
                }}
                onKeyDown={(e) => {
                  e.stopPropagation(); // prevent key events from being captured by the menu
                }}
                // elevation={1}
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </ListSubheader>
          )
        }
        {/* </ListSubheader> */}
        {search.map(f => (
          usedFields.includes(f.value) ? null : // Skip if the field is already used
            <MenuItem key={f.value} value={f.value} disabled={usedFields.includes(f.value) && f.value !== field}>
              <ListItemIcon>{f.icon}</ListItemIcon>
              <ListItemText>{f.label}</ListItemText>
            </MenuItem>
        ))}
        {
          search.length === 0 && searchTerm !== "" && availableSortFields.length > 0 && (
            <MenuItem disabled>
              <ListItemText>No fields found</ListItemText>
            </MenuItem>
          )
        }
        {
          isEqual && (
            <MenuItem disabled>
              <ListItemText>All Sorts are Applied</ListItemText>
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
            horizontal: 78,
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

            width: "100%",
            "& .MuiInputBase-input": {
              padding: "4px 8px"
            }
          }}
          FormControlProps={{
            sx: { width: "100%", mb: "4px", }
          }}
          onKeyDown={(e) => {
            e.stopPropagation(); // prevent key events from being captured by the menu
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        {search.map(f => (
          usedFields.includes(f.value) ? null : // Skip if the field is already used
            <MenuItem key={f.value} onClick={() => onAddSort(f.value)} disabled={usedFields.includes(f.value)}>
              <ListItemIcon>{f.icon}</ListItemIcon>
              <ListItemText>{f.label}</ListItemText>
            </MenuItem>
        ))}
        {
          search.length === 0 && searchTerm !== "" && availableSortFields.length > 0 && (
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
  const { filter, setFilter, open, onSetFilterValue, onClearFilter, onSetFilterOption, valueFilter, filterField } = useContext(DetailSelectContext)!;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSetFilter = (field: string) => {
    setFilter((prev) => ({
      value: prev?.value ?? "",
      filterOption: field || "contains"
    }));
    onSetFilterOption?.(field);

  };

  const [searchTerm, setSearchTerm] = useState<string>(filter?.value || "");

  useEffect(() => {
    if (searchTerm === "") return;
    setSearchTerm("");
  }, [])

  const handleChangeFilterValue = (value: string) => {
    setSearchTerm(value);
    if (value === "") {
      setFilter(null);
      onClearFilter?.();
    } else {
      setFilter((prev) => ({
        value: value || "",
        filterOption: prev?.filterOption ?? "contains"
      }));
      onSetFilterValue?.(value);
    }
  }


  const randomId = randomStringId();

  useEffect(() => {
    // Simulate a reference to a button
    const menu = document.getElementById(randomId);
    if (open) {
      if (menu) {
        setAnchorEl(menu);
      }
    }
    else {
      setAnchorEl(null);
    }
  }, [open])

  // When provide a Value 
  useEffect(() => {
    setFilter(valueFilter || null);
    setSearchTerm(valueFilter?.value || "");
  }, [valueFilter])

  const active = filter?.filterOption === "is empty" || filter?.filterOption === "is not empty";

  return (
    <>
      <Button
        color="info"
        id={randomId}
        sx={{
          backgroundColor: filter?.value || active ? '#0288D114' : "transparent",
          borderRadius: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          px: 1.5, py: 0.5, width: 'fit-content',

          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: filter?.value || active ? '#0288D129' : "#EEEDF4"
          },
          boxShadow: "none !important"

        }}
        onClick={handleClick}
      >
        <Badge color="error" variant="dot" sx={{ alignItems: "center" }} >
          <Typography
            sx={{ color: filter?.value || active ? '#0288D1' : "#0000008F", fontWeight: 500, ml: 0.5 }} variant="body2"
          >
            <Typography
              sx={{
                fontWeight: 600,
                mr: 0.5,
                color: filter?.value || active ? undefined : "#0000008F",
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
              {/* {filter?.filterOption ? `${filter?.filterOption} :` : ""} */}
              {filterField} {filter?.value || active ? ":" : ""}
            </Typography>
            <Box sx={{
              maxWidth: "120px",
              display: "inline-flex",
            }}>
              <Typography
                sx={{
                  mr: 0.5,
                  fontSize: "0.875rem",
                  maxWidth: "120px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textTransform: filter?.value && filter?.filterOption !== "is empty" && filter?.filterOption !== "is not empty" ? "none" : "capitalize",
                }}
                component="span"
                noWrap={true}
              >
                {
                  // filter?.value || "Value"

                  filter?.filterOption && active ? `${filter?.filterOption}` : filter?.value && filter?.value.length > 0 ? filter.value : ""
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
            borderRadius: "5px",
          }}
        >
          <FilterRow
            filterField={filterField || undefined}
            field={filter?.filterOption || "contains"}
            onSetField={handleSetFilter}
          />
          {
            active ? null : (
              <Input
                appearance="distinct"
                placeholder="Type a value..."
                size="small"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    padding: "4px 8px"
                  },
                }}
                FormControlProps={{
                  sx: { width: "100%" }
                }}
                // elevation={1}
                onChange={(e) => handleChangeFilterValue(e.target.value)}
                value={searchTerm}
              />
            )
          }
        </Paper>
      </Menu>
    </>
  );
}

// Filter row component
function FilterRow({ field, onSetField, filterField }: {
  field: string;
  onSetField: (field: string) => void;
  filterField?: string
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
        sx={{ fontSize: "12px", color: "#0000001F", textTransform: "capitalize" }}
        component={"span"}
      >
        {filterField}
      </Typography>
      <TinySelect
        value={localField}
        onChange={handleSetLocalField}
        FormControlProps={{ sx: { width: "auto" } }}
        MenuProps={{
          anchorOrigin: { vertical: 20 as const, horizontal: 'center' as const },
          // transformOrigin: {
          //   vertical: -30 as const,
          //   horizontal: 'center' as const
          // },
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