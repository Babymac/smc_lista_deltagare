//================== Imports ========================================
import XLSX from "xlsx";
//================== Constants ======================================

//================== CSV File Reciver ===============================
const handleExcelFile = {
  reciveFile: async (file,  cb) => {
  	const excelfile = XLSX.readFile(file.path);
  	//const json = XLSX.utils.sheet_to_json(excelfile)
  	console.log(excelfile);
		cb(excelfile);
  },
};

export default handleExcelFile;
