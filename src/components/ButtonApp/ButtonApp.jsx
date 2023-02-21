import { Button } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
export const ButtonApp = ({icon = <DownloadIcon/>, label, variant = 'contained', onClick}) => {
	return (
		<Button size="medium" fullWidth={false} startIcon={icon} variant={variant} onClick={onClick}>{label}</Button>
	)
}