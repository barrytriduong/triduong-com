// Renders cv.html to A4 PDFs (EN + VI). Run: node cv/build-pdf.js
const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
// private versions (with phone) stay in cv/; public versions (no phone) go to /files for the website
const jobs=[['en','',path.join(__dirname,'Duong_Minh_Tri_CV.pdf')],['vi','',path.join(__dirname,'Duong_Minh_Tri_CV_VI.pdf')],
  ['en','&public=1',path.join(__dirname,'..','files','Duong_Minh_Tri_CV.pdf')],['vi','&public=1',path.join(__dirname,'..','files','Duong_Minh_Tri_CV_VI.pdf')]];
require('fs').mkdirSync(path.join(__dirname,'..','files'),{recursive:true});
for(const [lang,q,file] of jobs){
  await p.goto('file://'+path.join(__dirname,'cv.html')+'?lang='+lang+q);
  await p.waitForSelector('body[data-ready="1"]');
  const h=await p.evaluate(()=>document.querySelector('.page').scrollHeight);
  await p.pdf({path:file,format:'A4',printBackground:true,preferCSSPageSize:true});
    console.log(lang,q||'private',path.relative(path.join(__dirname,'..'),file));}
await b.close();})();
