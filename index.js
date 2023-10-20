const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express() //implementasi express

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-poi   // membuat objek yang berisi data yang akan dijadikan response
      let response = {
          message: "Ini end-point pertama ku", // menampilkan data 
          method: req.method, // menampilkan method 
          code: res.statusCode // menampilkan response code 
        }
  
     // memberikan response dengan format JSON yang berisi objek di atas
     res.json(response)
  })

// endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
  // :name dan :age 🡪 diberikan titik dua didepan menunjukkan "name" dan "age" 
  // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

  // menampung data yang dikirimkan
  let name = req.params.name // mengambil nilai pada parameter name
  let age = req.params.age // mengambil nilai pada parameter age

  // membuat objek yang berisi data yang akan dijadikan response
  // response berisi data nama dan umur sesuai dengan nilai parameter
  let response = {
      nama: name,
      umur: age
  }

  // memberikan response dengan format JSON yang berisi objek di atas
  res.json(response)
})


// end-point "/bujur_sangkar" dengan method POST3
app.post("/bujur_sangkar", (req,res) => {

  let panjang = Number(req.body.panjang) 
  let lebar = Number(req.body.lebar)

  let luas = panjang *lebar
  let keliling = 2 * (panjang + lebar)

// membuat objek yang berisi data yang akan dijadikan response
  let response = {
      panjang: panjang,
      lebar: lebar,
      luas: luas,
      keliling: keliling
}
res.json(response)
})

// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {

  let panjang = Number(req.body.panjang)
  let lebar = Number(req.body.lebar)
  let tinggi = Number(req.body.lebar)

  let volume = panjang * lebar*tinggi
  let luasalas = 2*(panjang*lebar + panjang*tinggi + lebar*tinggi)

// membuat objek yang berisi data yang akan dijadikan response
  let response = {
      panjang: panjang,
      lebar: lebar,
      tinggi:tinggi,
      volume: volume,
      luasalas:luasalas
}
  res.json(response)
})

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {

  let sisi = Number(req.body.panjang)

  let volume = sisi * sisi*sisi
  let luasalas=6*sisi*sisi

// membuat objek yang berisi data yang akan dijadikan response
  let response = {
      sisi: sisi,
      volume: volume,
      luasalas: luasalas
}
res.json(response)
})

// end-point "/limas" dengan method POST
app.post("/limas", (req, res) => {
        
  let panjangAlas = Number(req.body.panjangAlas); 
  let lebarAlas = Number(req.body.lebarAlas); 
  let tinggi = Number(req.body.tinggi); 

  let volume = (1/3) * panjangAlas * lebarAlas * tinggi;
  let luasPermukaan = panjangAlas * lebarAlas + 2 * (panjangAlas * tinggi + lebarAlas * tinggi);

  let response = {
      panjangAlas: panjangAlas,
      lebarAlas: lebarAlas,
      tinggi: tinggi,
      volume: volume,
      luasPermukaan: luasPermukaan
  };
  res.json(response);
});

// end-point "/kerucut" dengan method POST
app.post("/VolumeLuasP_Kerucut", (req, res) =>{
  let garisP = Number (req.body.garisP);
  let jari = Number (req.body.jari);
  let tinggi = Number (req.body.tinggi);
  let VolumeKerucut = (1/3) * Math.PI * jari *jari*tinggi;
  let LuasP_Kerucut = (Math.PI * jari * garisP) + (Math.PI * jari *jari);

  let response = {
      garisP: garisP,
      jari: jari,
      tinggi: tinggi,
      VolumeKerucut: VolumeKerucut,
      LuasP_Kerucut: LuasP_Kerucut

  }

  res.json(response);
})

// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {

  let tinggi = Number(req.body.panjang)
  let jarijari = Number(req.body.panjang)


  let volume =phi * r2*tinggi
  let luastabung = 2*phi*jarijari*(jarijari+t)

  let response = {
      tinggi: tinggi,
      jarijari: jarijari,
      volume:volume,
      luastabung: luastabung
}
res.json(response)
})

// end-point "/tabung" dengan method POST
app.post("/bola", (req,res) => {
  
  let jari_jari = Number(req.body.panjang)
  let jarijari = Number(req.body.panjang)


  let volume =(4/3)*phi*jarijari3
  let luasbola = 4*phi*jarijari2

  // membuat objek yang berisi data yang akan dijadikan response
  let response = {
      jarijari:jarijari,
      volume: volume,
      luasbola: luasbola
}
  res.json(response)
})

app.get("/convert/:suhu/:number", (req, res)=>{
  let suhu = req.params.suhu;
  let number = parseFloat (req.params.number);
  let Celcius = number - 273;
  let Fahrenheit = (9/5) * (number - 273.15) + 32;
  let Reamur = (4/5 ) * (number-273.15);

  let response = {
      suhu: suhu,
      number: number,
      Celcius: Celcius,
      Fahrenheit: Fahrenheit,
      Reamur: Reamur
  }

  res.json(response);
})
// End-point untuk mengkonversi dari Celsius ke Fahrenheit
app.get('/convert/celsius-to-fahrenheit', (req, res) => {
const celsius = parseFloat(req.query.value);
if (isNaN(celsius)) {
res.status(400).json({ error: 'Invalid input. Please provide a numeric value.' });
return;
}
const fahrenheit = (celsius * 9/5) + 32;
res.json({ result: fahrenheit });
});

// End-point untuk mengkonversi dari Fahrenheit ke Celsius
app.get('/convert/fahrenheit-to-celsius', (req, res) => {
const fahrenheit = parseFloat(req.query.value);
if (isNaN(fahrenheit)) {
res.status(400).json({ error: 'Invalid input. Please provide a numeric value.' });
return;
}
const celsius = (fahrenheit - 32) * 5/9;
res.json({ result: celsius });
});

// End-point untuk mengkonversi dari Celsius ke Kelvin
app.get('/convert/celsius-to-kelvin', (req, res) => {
const celsius = parseFloat(req.query.value);
if (isNaN(celsius)) {
res.status(400).json({ error: 'Invalid input. Please provide a numeric value.' });
return;
}
const kelvin = celsius + 273.15;
res.json({ result: kelvin });
});

// End-point untuk mengkonversi dari Kelvin ke Reamur
app.get('/convert/kelvin-to-reamur', (req, res) => {
const kelvin = parseFloat(req.query.value);
if (isNaN(kelvin)) {
res.status(400).json({ error: 'Invalid input. Please provide a numeric value.' });
return;
}
const reamur = (kelvin - 273.15) * 0.8;
res.json({ result: reamur });
});

// End-point untuk mengkonversi dari Decimal ke Binary
app.get('/convert/decimal-to-binary', (req, res) => {
const decimal = parseInt(req.query.value, 10);
if (isNaN(decimal)) {
res.status(400).json({ error: 'Invalid input. Please provide a valid decimal number.' });
return;
}
const binary = decimal.toString(2);
res.json({ result: binary });
});

// End-point untuk mengkonversi dari Binary ke Decimal
app.get('/convert/binary-to-decimal', (req, res) => {
const binary = req.query.value;
if (!/^[01]+$/.test(binary)) {
res.status(400).json({ error: 'Invalid input. Please provide a valid binary number.' });
return;
}
const decimal = parseInt(binary, 2);
res.json({ result: decimal });
});

// End-point untuk mengkonversi dari Decimal ke Octal
app.get('/convert/decimal-to-octal', (req, res) => {
const decimal = parseInt(req.query.value, 10);
if (isNaN(decimal)) {
res.status(400).json({ error: 'Invalid input. Please provide a valid decimal number.' });
return;
}
const octal = decimal.toString(8);
res.json({ result: octal });
});

// End-point untuk mengkonversi dari Decimal ke Hexadecimal
app.get('/convert/decimal-to-hexadecimal', (req, res) => {
const decimal = parseInt(req.query.value, 10);
if (isNaN(decimal)) {
res.status(400).json({ error: 'Invalid input. Please provide a valid decimal number.' });
return;
}
const hexadecimal = decimal.toString(16).toUpperCase();
res.json({ result: hexadecimal });
});

  // menjalankan server pada port 8000
app.listen(8000, () => {
     console.log("Server run on port 8000");
  })