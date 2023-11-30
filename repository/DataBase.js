var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bdmvc'
});

function selectPersons(){

    const personList = []

    connection.connect();
 
    connection.query('SELECT * FROM PERSONAGENS', function (error, results, fields) {
    if (error) throw error;
    
    if(results){
        for(row in results){
            personList.push(results[row])
        }
    }

    });
        
    connection.end();

    console.log(personList)
}

selectPersons()