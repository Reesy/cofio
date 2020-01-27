import express  = require("express");
import bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//////// Get Decks

/*
 
 The purpose of this will be to get an accumulation of flashcards,
 this will have a property that states when its next to be shown 
 Essentially be a reference to cards 

*/

//////// Get flashcards

/*
 With a specific ID this will get the desired card from the deck
   
 /card 
      CardID <A Guid representing the card>

      Cards may exist in multiple decks so the association needs to be thin. 

*/
app.get('/card', (req: express.Request, res: express.Response) =>
{
    console.log("Library api called from" + req.ip);
    res.send('Card Successfully GOT');
});


//////// PUT Card 
/**
  this will put an existing card

  /card 
      cardID <A Guid representing the card>

 */
app.put('/card', (req: express.Request, res: express.Response) =>
{
    console.log("Library api called from" + req.ip);
    res.send('Card Successfully PUT');
});

console.log("Listening on port 3050");

app.listen(3050);
 

