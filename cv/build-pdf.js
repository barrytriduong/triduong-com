// Renders cv.html to A4 PDFs (EN + VI). Run: node cv/build-pdf.js
const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
for(const [lang,file] of [['en','Duong_Minh_Tri_CV.pdf'],['vi','Duong_Minh_Tri_CV_VI.pdf']]){
  await p.goto('file://'+path.join(__dirname,'cv.html')+'?lang='+lang);
  await p.waitForSelector('body[data-ready="1"]');
  const h=await p.evaluate(()=>document.querySelector('.page').scrollHeight);
  await p.pdf({path:path.join(__dirname,file),format:'A4',printBackground:true,preferCSSPageSize:true});
  await p.screenshot({path:path.join(process.argv[2]||__dirname,'preview-'+lang+'.png'),fullPage:true});
  console.log(lang,file,'page height px',h,'(A4 = 1123)');}
await b.close();})();
