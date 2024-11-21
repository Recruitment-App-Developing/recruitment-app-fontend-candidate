import { Radio } from '@mui/material';

export default function GeneralRadio({ selected, value, onChange }) {
    return (
        <Radio
            checked={selected}
            value={value}
            onChange={onChange}
            sx={{
                color: 'gray',
                '&.Mui-checked': {
                    color: 'green',
                },
            }}
        />
    );
}
