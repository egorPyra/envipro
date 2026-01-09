// scripts/swap-app.js
const fs = require('fs');
const path = require('path');

const mode = process.argv[2]; // 'desktop' | 'mobile' | 'restore'
const root = process.cwd();
const app = path.join(root, 'app');
const appDesktop = path.join(root, 'app_desktop');
const appMobile  = path.join(root, 'app_mobile');
const appBackup  = path.join(root, '.app_backup');

function rimraf(p){ if(fs.existsSync(p)) fs.rmSync(p, { recursive:true, force:true }); }
function copyDir(src, dest){
  fs.mkdirSync(dest, { recursive:true });
  for(const e of fs.readdirSync(src, { withFileTypes:true })){
    const s = path.join(src, e.name), d = path.join(dest, e.name);
    e.isDirectory() ? copyDir(s,d) : fs.copyFileSync(s,d);
  }
}

if(mode==='desktop' || mode==='mobile'){
  rimraf(appBackup);
  if(fs.existsSync(app)) fs.renameSync(app, appBackup);
  rimraf(app);
  copyDir(mode==='desktop' ? appDesktop : appMobile, app);
  process.exit(0);
}

if(mode==='restore'){
  rimraf(app);
  if(fs.existsSync(appBackup)) fs.renameSync(appBackup, app);
  process.exit(0);
}

console.error('Usage: node scripts/swap-app.js [desktop|mobile|restore]');
process.exit(1);