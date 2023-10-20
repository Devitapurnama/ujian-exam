const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


/*-------------------------Implementasi body-parser-------------------------*/
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }))


/*-------------------------Implementasi cors-------------------------*/
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// Codingan disini
app.post("/berat", (req,res) => 
{
    let tipe_berat = req.body.tipe_berat
    let berat = Number(req.body.berat)
    let hold =0
    let response
    let kg,hg,dag,g,dg,cg,mg

    if (tipe_berat === "mg") 
    {
        mg = berat
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi MG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "cg")
    {
        mg = berat / 10
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi CG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "dg")
    {
        mg = berat / 100
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi DG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "g")
    {
        mg = berat / 1000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi G",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "dag")
    {
        mg = berat / 10000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi DAG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "hg")
    {
        mg = berat / 100000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi HG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "kg")
    {
        mg = berat / 1000000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi KG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }

    res.json(response)
})


app.get("/kecepatan/:type/:diket1/:diket2", (req,res) => 
{
    let soal = req.params.type
    let var1 = Number(req.params.diket1)
    let var2 = Number(req.params.diket2)
    let hasil = 0
    let response

    if (soal === "v") 
    {
        hasil = var1/var2
        response = {
            Soal: "Mencari kecepatan(Velocity) per detik",
            Jarak: var1 + ' meter',
            Waktu: var2 + ' detik',
            Hasil: hasil + ' m/detik',
        }
    }
    else if(soal === "s")
    {
        hasil = var1*var2
        response = {
            Soal: "Mencari Jarak(Space)",
            Kecepatan: var1 + ' m/detik',
            Waktu: var2 + ' detik',
            Hasil: hasil + ' meter',
        }
    }
    else if(soal === "t")
    {
        hasil = var1/var2
        response = {
            Soal: "Mencari Waktu(Time)",
            Jarak: var1 +' Meter',
            Kecepatan: var2 + ' m/detik',
            Hasil: hasil.toFixed(2) + ' detik',
        }
    }
    else
    {
        response = "Tipe tidak ada!\n<br>Coba salah satu dari berikut Tipe:[v,s,t]"
    }

    res.json(response)
})
app.get("/berat/:tipe_berat/:berat", (req, res) => {
    let tipe_berat = req.params.tipe_berat; 
    let berat = Number(req.params.berat);
    let response;
    let kg, hg, dag, g, dg, cg, mg;

    if (tipe_berat === "mg") {
        mg = berat;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi MG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "cg") {
        mg = berat / 10;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi CG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "dg") {
        mg = berat / 100;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi DG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "g") {
        mg = berat / 1000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi G",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "dag") {
        mg = berat / 10000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi DAG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "hg") {
        mg = berat / 100000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi HG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "kg") {
        mg = berat / 1000000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi KG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    }

    res.json(response);
});


app.post("/kecepatan", (req, res) => {
    const { type, diket1, diket2 } = req.body;
    let hasil = 0;
    let response;

    if (type === "v") {
        hasil = Number(diket1) / Number(diket2);
        response = {
            dicari: "v",
            Jarak: diket1 + ' meter',
            Waktu: diket2 + ' detik',
            Hasil: hasil + ' m/detik',
        };
    } else if (type === "s") {
        hasil = Number(diket1) * Number(diket2);
        response = {
            dicari: "s",
            Kecepatan: diket1 + ' m/detik',
            Waktu: diket2 + ' detik',
            Hasil: hasil + ' meter',
        };
    } else if (type === "t") {
        hasil = Number(diket1) / Number(diket2);
        response = {
            dicari: "t",
            Jarak: diket1 + ' Meter',
            Kecepatan: diket2 + ' m/detik',
            Hasil: hasil.toFixed(2) + ' detik',
        };
    } else {
        response = "Tipe tidak ada!\nCoba salah satu dari berikut Tipe:[v,s,t]";
    }

    res.json(response);
});

// Codingan disini

const portt = 8000
app.listen(portt, () => 
{
    console.log("Server run on port \""+portt+'\"');
})
