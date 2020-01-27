var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("main.cofiodb");
 
db.serialize(function() {
  db.run("CREATE TABLE DECK (info TEXT)");
  
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM lorem", function(err: any, row: any) {
      console.log(row.id + ": " + row.info);
  });
});
 
db.close();