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
                maxRows={9}
                rows={9}
                {...rest}
            />
        );
    }
    return (
        <Input
            {...props}
            appearance={appearance}
            multiline
            maxRows={9}
            rows={9}
        />
    );
};

export default Textarea;