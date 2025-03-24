const express = require('express');
const app = express();
const port = 3000;

app.get('/response1', (req, res) => {
    res.json({
        transverifyDebitcard: true,
        transVerifyAccts: [
            {
                accountnumber: "123456",
                accountType: "DDA"
            }
        ]
    });
});

app.get('/response2', (req, res) => {
    res.json({
        erros: [
            {
                id: "t4546665",
                code: "1001",
                source: {
                    pointers: "text"
                },
                meta: {
                    appid: "appid"
                }
            }
        ]
    });
});

app.get('/response3', (req, res) => {
    res.json({
        erros: [
            {
                adviceTest: "Inavlid Values",
                code: "1001",
                details: []
            }
        ]
    });
});

app.get('/response4', (req, res) => {
    res.json({
        erros: [
            {
                adviceTest: "Inavlid Values",
                code: "2000",
                title: "title1"
            },
            {
                adviceTest: "Inavlid Values",
                code: "2001",
                title: "title1"
            },
            {
                adviceTest: "Inavlid Values",
                code: "2002",
                title: "title1"
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
