const _data = require("./data/data5");
const docs = _data.data;

for (let loop=0, length = docs.length; loop<length; loop++) {
	const row = docs[loop];
	console.log(row);
}
