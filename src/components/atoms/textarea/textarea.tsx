import { type FC } from 'react';
import { Input, type InputProps } from '../input/input';

type TextareaProps = Omit<InputProps, 'appearance' | "size"> & {
    appearance: 'standard' | 'filled' | 'outlined' | "patientForm";
};

const Textarea: FC<TextareaProps> = (props) => {
    const { appearance, ...rest } = props
    if (appearance === "patientForm") {
        return (
            <Input
                multiline
                placeholder={typeof props.label === 'string' ? props.label : undefined}
                appearance="distinct"
                hiddenLabel
                // sx={{
                // "& .MuiOutlinedInput-notchedOutline": {
                // top: 0,
                // borderColor: '#0000003B !important',
                // },
                // "&:hover .MuiOutlinedInput-notchedOutline": {
                //     borderColor: '#0000003B !important',
                // },
                // "&:focus .MuiOutlinedInput-notchedOutline": {
                //     borderColor: '#0000003B !important',
                // },
                // "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                //     borderColor: '#0000003B !important',
                // },
                // }}
                {...rest}
            />
        );
    }
    return (
        <Input
            {...props}
            appearance={appearance}
            multiline
        />
    );
};

export default Textarea;