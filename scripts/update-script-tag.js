import fs from 'fs';

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of files) {
  let h = fs.readFileSync(f, 'utf8');
  h = h.replaceAll('src="script.js"', 'src="script.js?v=2.0"');
  fs.writeFileSync(f, h, 'utf8');
}

let gen = fs.readFileSync('scripts/generate-city-pages.js', 'utf8');
gen = gen.replaceAll('src="script.js"', 'src="script.js?v=2.0"');
fs.writeFileSync('scripts/generate-city-pages.js', gen, 'utf8');

console.log(`Updated script.js?v=2.0 across ${files.length} HTML files and generator!`);
