import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)`
        color: ${(props) => props.theme.fg};
        border: 2px solid ${(props) => props.theme.fg};
        background: ${(props) => props.theme.bg};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 5px;
`;


export default StyledButton;