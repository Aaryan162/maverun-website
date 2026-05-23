import fs from 'fs';

const files = ['src/pages/Home.jsx', 'src/components/Navbar.jsx'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\\`/g, '`');
  content = content.replace(/\\\$\{/g, '${');
  fs.writeFileSync(file, content);
}
console.log('Fixed backticks and variables!');
