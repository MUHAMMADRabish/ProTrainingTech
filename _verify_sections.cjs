const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  await p.setViewportSize({ width: 1280, height: 900 });
  await p.goto('http://localhost:5175/', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await p.waitForTimeout(2000);

  const sections = [
    ['.vs',  'verify_values.png'],
    ['.ct',  'verify_corp.png'],
    ['.tst', 'verify_testi.png'],
    ['.oc',  'verify_tabs.png'],
    ['.sf',  'verify_footer.png'],
    ['.ef',  'verify_enroll.png'],
    ['.ts',  'verify_services.png'],
  ];

  for (const [sel, file] of sections) {
    const el = await p.$(sel);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await p.waitForTimeout(500);
      await el.screenshot({ path: file });
      console.log('Saved', file);
    } else {
      console.log('MISSING', sel);
    }
  }
  await b.close();
})().catch(e => { console.error('ERR:', e.message); process.exit(1); });
