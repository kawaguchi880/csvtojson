const fs = require('fs');
const csv = require('csv');

const path = '/same-info0717.csv';

fs.createReadStream(__dirname + path)
  .pipe(csv.parse({ columns: true }, function (err, data) {
    data = (JSON.stringify(data, null, 2));
    fs.writeFileSync('output.json', data);
  }));

