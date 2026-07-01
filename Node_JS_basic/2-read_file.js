const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  try {
    const files = fs.readFileSync(path, 'utf8').trim();

    const lines = files
      .split('\n')
      .filter((line) => line.trim().length > 0);

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const stdRows = lines.slice(1);
    console.log(`Number of students: ${stdRows.length}`);

    const field = {};

    for (const row of stdRows) {
      const studentData = row.split(',');
      const firstName = studentData[0].trim();
      const field = studentData[studentData.length - 1].trim();

      if (!field[field]) {
        field[field] = [];
      }

      field[field].push(firstName);
    }

    for (const [field, names] of Object.entries(field)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;