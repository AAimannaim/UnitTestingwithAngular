// run-tests-and-generate-pdf.js
const { execSync } = require('child_process');
const puppeteer = require('puppeteer-core');

async function runTestsAndGeneratePdf() {
  try {
    // Run ng test
    console.log('Running ng test...');
    execSync('ng test');

    // Generate PDF using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://' + __dirname + '/coverage/index.html', { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'coverage-report.pdf', format: 'A4' });
    await browser.close();

    console.log('PDF generated successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

runTestsAndGeneratePdf();
