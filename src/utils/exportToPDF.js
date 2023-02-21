import jsPDF from "jspdf";
import "jspdf-autotable";
export const exportToPDF = (data, columns, fileName) => {
	const doc = new jsPDF();
	const tableColumn = columns.map((column) => column.id);
	const tableRows = [];
	data.forEach((row) => {
		const rowData = [];
		columns.forEach((column) => {
			rowData.push(row[column.id]);
		});
		tableRows.push(rowData);
	});
	doc.addFont('c:/Windows/Fonts/arial.ttf', 'Arial', 'normal');
	doc.autoTable(tableColumn, tableRows, { startY: 20, theme: 'grid', styles: { textColor: 'black', fontSize: 10, overflow: 'linebreak', halign: 'center', valign: 'middle' }});
	doc.save(`${fileName}.pdf`);
};