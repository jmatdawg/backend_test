// const express = require('express'); //i need this to use API requests
// // pulls in SQL library
// const mysql = require('mysql');

// let app = express();

// //creating but not yet connecting connection
// let connection = mysql.createConnection (
//     {
//         host: 'localhost', //connects us to the server
//         database: 'Chirpr', //what database on the server we want access to
//         user: 'chirprapp', //passing in username
//         password: 'innovatebham' //passing in password
//     }
// );

// connection.connect(); //connects us to the server, officially

// //grabs all chirps
// app.get('/chirps', function (req, res) {
//     console.log('get is working')
//     let getChirps = `CALL spGetChirps`;
//     connection.query(getChirps, (err, results, fields) => { //executes a query.
//         if(err) throw err;
//         res.send(results[0]);
//             console.log('got chirps!');
//     });
// });

// //gets a single chirp by ID
// app.get('/chirps/:id', function (req, res) {
//     let id = req.params.id;
//     let getChirpById = `CALL spGetChirpsById(?)`;
//     connection.query(getChirpById, [id], (err, results, fields) => { //executes a query.
//         if(err) throw err;
//         res.send(results[0]);
//     });
// });

// //update a chirp by id btw THIS DOESNT WORK
// app.put('/chirps/:id', function (req, res) {
//     let chirp = req.body;
//     let id = req.params.id;
//     let UpdateChirp = `call spUpdateChirp(?,?)`;
//     connection.query(UpdateChirp, [id, chirp], (err, results) => {
//         if (err) reject(newError());
//         res.send(results[0]);
//     })
// })

// app.listen(3000, function() {
//     console.log('Node app is listening on port 3000!')
// })


// //  //posts new app to db
// // app.post('/chirps', function (req, res) {
// //     let {userid, text, location} = req.body;
// //      console.log(req.body);
// //     // connection.query(`INSERT (userid, text, location) INTO CHIRPS VALUES (${userid},${text},${location})`), (err, results, fields) => { 
// //     //     if(err) throw err;
// //     //     console.log('posted chirp!');
// //     }
// // );


// // // let userid = 2;

// // // connection.query(`CALL spGetMentions(${userid})`, (err, results, fields) => { //executes a query.
// // //     if(err) {
// // //         connection.end();
// // //         return console.log(err);
// // //     }
// // //     results[0].forEach(item => {
// // //         console.log(item.text);
// // //     });
// // //     connection.end(); //ends our connection
// // // })
"use strict";