export interface InpCompProps {
    id: string;
    type: string
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    placeholder?: string;
    label?: string
    className?: '';
}
export default InpCompProps