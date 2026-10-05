import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':'index.html','/index.html':'index.html','/styles.css':'styles.css','/app.js':'app.js','/model.js':'model.js'};
const types={html:'text/html; charset=utf-8',css:'text/css',js:'text/javascript'};
http.createServer(async(req,res)=>{const path=new URL(req.url,'http://localhost').pathname,file=files[path];if(!file){res.writeHead(404);res.end('Not found');return}try{res.writeHead(200,{'Content-Type':types[file.split('.').pop()],'X-Content-Type-Options':'nosniff'});res.end(await readFile(new URL('./dist/'+file,import.meta.url)))}catch{res.writeHead(500);res.end('Unable to load application')}}).listen(4173,'127.0.0.1',()=>console.log('Revenue Signal Lab ready at http://127.0.0.1:4173'));
