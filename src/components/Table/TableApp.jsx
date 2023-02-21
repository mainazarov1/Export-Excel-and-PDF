import { users } from "../../mockApi/mockApi"
import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ButtonApp } from "../ButtonApp/ButtonApp";
import { exportToExcel } from "../../utils/exportToExcel";
import { exportToPDF } from "../../utils/exportToPDF";
// import { ExportToExcel } from "../../utils/ExportToExcel";
// import { CSVLink } from "react-csv";

export const TableApp = ({ columns, rows }) => {
	const tableHeader = <TableHead>
		<TableRow>
			{columns && columns?.map(col => {
				return <TableCell
					key={col.id}
				>
					{col.label}
				</TableCell>
			})}
		</TableRow>
	</TableHead>
	const tableBody = <TableBody>
		{rows && rows?.map(row => {
			return (
				<TableRow
					key={row.id}
				>
					{columns && columns?.map(column => {
						const value = row[column.id]
						return <TableCell
							key={column.id}
						>
							{value}
						</TableCell>
					})}
				</TableRow>
			)
		})}
	</TableBody>
	return (
		<Box sx={{ width: '100%' }}>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					{tableHeader}
					{tableBody}
				</Table>
			</TableContainer>
			<Stack display={'flex'} justifyContent={'flex-start'}>
				<ButtonApp label={'PDF'} onClick={(e) => exportToPDF(rows, columns, 'UsersPDF')} />
				<ButtonApp label={'Excel'} onClick={(e) => exportToExcel(rows, 'UsersExcel')} />

			</Stack>
		</Box>
	)
}