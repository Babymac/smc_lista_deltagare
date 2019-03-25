//================== Imports ========================================
import XLSX from "xlsx";
import FS from 'fs';
//================== Constants ======================================
const interval = 7;
const groups = 4;
const green = []; //restart to empty, empty if project will be hosted
const yellow = []; //restart to empty, empty if project will be hosted
const blue = []; //restart to empty, empty if project will be hosted
const red = []; //restart to empty, empty if project will be hosted
const done = []; //restart to empty, empty if project will be hosted
//================== CSV File Reciver ===============================
const handleExcelFile = {
	reciveFile: async (file,  cb) => {
		const excelfile = XLSX.readFile(file.path);

		let excelArray = Object.entries(excelfile.Sheets.Deltagare);

		excelArray.splice(-1,1);

		for(let x = 0; x < interval; x++){
			excelArray.shift();
		}

		let sortedList = handleExcelFile.initialSorter(excelArray);

		cb(excelfile);
	},

	initialSorter: (list) => {
		let checker = 1;
		let temp = {};
		let participants = [];
		list.map((slot, i) => {
			if(checker <= 6) {
				if(checker == 1) {
					temp.speed = slot[1].w;
				};
				if(checker == 2) {
					temp.stage = slot[1].w;
				};
				if(checker == 3) {
					temp.firstname = slot[1].w;
				};
				if(checker == 4) {
					temp.lastname = slot[1].w;
				};
				if(checker == 5) {
					temp.age = slot[1].w;
				};
				if(checker == 6) {
					temp.bike = slot[1].w;
					participants.push(temp);
					temp = {};
					checker = 1;
					return;
				};
				checker = checker + 1;
			}
		});

		return handleExcelFile.sortOnSpeed(participants);
	},

	sortOnSpeed: (list) => {
		list.sort((a, b) => {
			if(a.speed > b.speed) {
				return -1;
			}
			if(a.speed < b.speed) {
				return 1;
			}
			return 0;
		});
		const groupLengths = Math.ceil(list.length / groups);
		return handleExcelFile.sortRed(list, groupLengths);
	},

	sortRed: (L, gL) => {
		const RML = (gL - 2); //RML = redMaxLength
		for(let p = 0; p < L.length; p++) {
			if(
				L[p].stage == '4' && L[p].speed == 'Snabb' && red.length < RML ||
				L[p].stage == '3' && L[p].speed == 'Snabb' && red.length < RML ||
				L[p].stage == '2' && L[p].speed == 'Snabb' && red.length < RML ||
				L[p].stage == '4' && L[p].speed == 'Medel' && red.length < RML ||
				L[p].stage == '3' && L[p].speed == 'Medel' && red.length < RML ||
				L[p].stage == '2' && L[p].speed == 'Medel' && red.length < RML
				) {
				L[p].tent = 'Röd';
				red.push(L[p]);
				L.splice(p, 1);
				p--;
			}
		}
		return handleExcelFile.sortBlue(L, gL);
	},

	sortBlue: (L, gL) => {
		for(let p = 0; p < L.length; p++) {
			if(
				L[p].stage == '4' && L[p].speed == 'Snabb' && blue.length < gL ||
				L[p].stage == '3' && L[p].speed == 'Snabb' && blue.length < gL ||
				L[p].stage == '2' && L[p].speed == 'Snabb' && blue.length < gL ||
				L[p].stage == '4' && L[p].speed == 'Medel' && blue.length < gL ||
				L[p].stage == '3' && L[p].speed == 'Medel' && blue.length < gL ||
				L[p].stage == '2' && L[p].speed == 'Medel' && blue.length < gL ||
				L[p].stage == '4' && L[p].speed == 'Lugn' && blue.length < gL ||
				L[p].stage == '3' && L[p].speed == 'Lugn' && blue.length < gL
				) {
				L[p].tent = 'Blå';
				blue.push(L[p]);
				L.splice(p, 1);
				p--;
			}
		}
		return handleExcelFile.sortYellow(L, gL);
	},

	sortYellow: (L, gL) => {
		for(let p = 0; p < L.length; p++) {
			if( yellow.length < gL ) {
				L[p].tent = 'Gul';
				yellow.push(L[p]);
				L.splice(p, 1);
				p--;
			}
		}
		return handleExcelFile.sortGreen(L, gL);
	},

	sortGreen: (L, gL) => {
		const GE = (gL + 2); //GE = greenExtra, to compensate for red's -2
		for(let p = 0; p < L.length; p++) {
			if( green.length < GE) {
				L[p].tent = 'Grön';
				green.push(L[p]);
				L.splice(p, 1);
				p--;
			}
		}
		return handleExcelFile.createWorkBook()
		//console.log(green.length, 'green', yellow.length, 'yellow', blue.length, 'blue', red.length, 'red', L.length, 'List');
	},

	createWorkBook: () => {
		done.push(...green, ...yellow, ...blue, ...red);
		const workSheet = XLSX.utils.json_to_sheet(done);
		const workBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workBook, workSheet, 'smcWorkBook');
		XLSX.writeFile(workBook, 'smc_deltagarlista.xlsx');
	},

};

export default handleExcelFile;
