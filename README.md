Respose Type #1 

{
  "transverifyDebitcard":true,
  "transVerifyAccts":[
    {
      "accountnumber":"123456",
      "accountType":"DDA"
    }
    ]
}

==========================

Respose Type #2

{
  
  "erros":[
    {
      "id":"t4546665",
      "code":"1001",
      "source":{
        "pointers":"text"
      },
      "meta":{
        "appid":"appid"
      }
    }
    ]
}


=====================
Respose Type #3

{
  
  "erros":[
    {
      "adviceTest":"Inavlid Values",
      "code":"1001",
      "details":[ ]
    }
    ]
}



=================
Respose Type #4

{
  
  "erros":[
    {
      "adviceTest":"Inavlid Values",
      "code":"2000",
      "title":"title1"
    },
    {
      "adviceTest":"Inavlid Values",
      "code":"2001",
      "title":"title1"
    },
    {
      "adviceTest":"Inavlid Values",
      "code":"2002",
      "title":"title1"
    }
    ]
}
