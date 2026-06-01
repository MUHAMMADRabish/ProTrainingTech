
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  await p.setViewportSize({ width: 1280, height: 900 });
  await p.goto('http://localhost:5175/', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await p.waitForTimeout(2000);
  const secs = await p.evaluate(() => {
    const checks = ['.hs','.cc','.oc','.ts','.vs','.dm','.ct','.mnc','.tst','.ps','.bl','.dc','.ef','.sf','.navbar__search'];
    const names = ['HeroSlider','CourseCarousel','CourseTabs','TrainingServices','Values','Domains','Corporate','MNCLogos','Testimonials','PlacedStudents','BlogCarousel','DigitalClasses','EnrollForm','Footer','SearchBar'];
    return checks.map((s,i)=>{ const el=document.querySelector(s); return names[i]+':'+(el?'FOUND(h='+el.offsetHeight+')':'MISSING'); });
  });
  secs.forEach(s=>console.log(s));
  const errs = [];
  p.on('console', m => { if(m.type()==='error') errs.push(m.text()); });
  await p.screenshot({ path: 'verify_home.png', fullPage: false });
  await p.screenshot({ path: 'verify_home_full.png', fullPage: true });
  console.log('Screenshots saved');
  await b.close();
})().catch(e=>{ console.error('ERR:',e.message); process.exit(1); });
