// console.log("This is working")


// // Imports for Node packages
// var express = require("express"); // Handles routing
// var app = express(); // Server for handling routes, the heart of our app
// var axios = require("axios"); // Handles GET, POST etc request and responses
// const bodyParser = require("body-parser"); // Middleware for dealing with form input data

// // Express server setup (boilerplate code from the docs)
// app.set("view engine", "ejs");

// // BodyParser middleware setup (boilerplate code from the docs)
// app.use(
// 	bodyParser.urlencoded({
// 		extended: true,
// 	})
// );

// // Tells express where to find any static files like images
// app.use(express.static("public"));

// // GET Home page which renders the index.ejs template. No data needed for plain HTML.
// app.get("/", function (req, res) {
// 	res.render("pages/index");
// });
// // POST a new employee route
// app.post("/create_employee", function (req, res) {
// console.log("TEST POST ");
// var newUser = req;
// console.log(newUser);
// var data = `{"email": newUser.email, "firstName": newUser.firstName, "id": newUser.id, "lastName": newUser.lastName, "picture": newUser.picture, "title": newUser.title}`;
// //console.log(data)
// var config = {
// method: 'post',
// url: 'https://potatotime-950d2-default-rtdb.firebaseio.com/data/.json',
// headers: { 
// 'Content-Type': 'text/plain'
// },
// data : data
// };

// axios(config)
// .then(function (response) {
// console.log(JSON.stringify(response.data.data));
// res.render("pages/create_employee");
// })
// .catch(function (error) {
// console.log(error);
// });


// // console.log(res)
	
// });


// app.get("/create_employee", function (req, res) {
// 	//console.log(req)
// 	var config = {
// 	  method: 'get',
// 	  url: 'https://potatotime-950d2-default-rtdb.firebaseio.com/data/.json',
// 	};

// 	axios(config)
// 	.then(function (response) {
// 	  //console.log(JSON.stringify(response.data));
// 	  //res.render("pages/directory")
// 	  res.render("pages/create_employee");

// 	})
// 	.catch(function (error) {
// 	  console.log(error);
// 	});

// 	// Useful for console logging the form inputs
// 	// console.log(console.log(req.body))
// 	// Example of form data for adding a new user
// 	// var data = `{"email":"${req.body.user.email}","firstName":"${req.body.user.firstName}","id":"${req.body.user.id}","lastName":"${req.body.user.lastName}","picture":"${req.body.user.picture}","title":"${req.body.user.title}"}`;
// 	// Your code goes here



// });






// // GET Directory of employees, returns an array of objects from the server.
// app.get("/directory", function (req, res) {
// 	// Modify this route and the views

// 	var config = {
// 		method: "get",
// 		url: "https://potatotime-950d2-default-rtdb.firebaseio.com/.json",
// 		headers: {}
// 	};
// 	axios(config)
// 	.then(function (employees) {
// 		//console.log((employees.data));

// 		var employees =  Object.entries(employees.data.data)
// 		//console.log(employees.data)
// 		return employees;
// 	})
// 	.then((employees) => {
// 		res.render("pages/directory", {
// 			employees: employees,
// 		});
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});
// 	//console.log(employees)
// });

// // GET static about page
// app.get("/about", function (req, res) {
// 	res.render("pages/about");
// });

// // Single Employee
// // "Render" the person view here!
// app.get("/directory/:uid", function (req, res) {
// let id= req.params.uid;
// //console.log('this is the id ' + id)
// var config = {
// 	method: 'get',
// 	url: `https://potatotime-950d2-default-rtdb.firebaseio.com/data/${id}.json`,
// 	headers: { }
//   };
  
//   axios(config)
//   .then((response) => {
// 	let dataFromAPI = response.data;
// 	return dataFromAPI
//   })
//   .then((response) => {
// 	res.render("pages/person",{ 
// 		employee: response });
// 	})
//   .catch(function (error) {
// 	console.log(error);
//   });
// })

// // GET Form to add new employee (GET the form first, then the forms "submit" button handles the POST request.


// // Express's .listen method is the final part of Express that fires up the server on the assigned port and starts "listening" for request from the app! (boilerplate code from the docs)

// app.listen(2001);
// console.log("Port 2001 is open");
var express = require("express"); // Handles routing
var app = express(); // Calls the function which is the "app"
var axios = require("axios"); // Handles GET, POST etc request and responses
const bodyParser = require("body-parser"); // Middleware for dealing with form data

// Express server setup (boilerplate code from the docs)
app.set("view engine", "ejs");

// BodyParser middleware setup (boilerplate code from the docs)
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

/// ** -- ROUTES -- ** ///

// GET Home page which renders the index.ejs template. No data needed for plain HTML.

app.get("/", function (req, res) {
	res.render("pages/index");
});

// POST a new employee route

app.post("/add", function (req, res) {
	// Uncomment the console log below to see your form data
	// console.log(console.log(req.body))
	var data = `{"email":"${req.body.user.email}","firstName":"${req.body.user.firstName}","id":"${req.body.user.id}","lastName":"${req.body.user.lastName}","picture":"${req.body.user.picture}","title":"${req.body.user.title}"}`;

	var config = {
		method: "post",
		url: "https://spaexample-f6590-default-rtdb.firebaseio.com/data/.json",
		headers: {
			"Content-Type": "text/plain",
		},
		data: data,
	};

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});

	res.redirect("/directory");
});

// GET Directory of employees, returns an array of objects from the server.
app.get("/directory", function (req, res) {
	var config = {
		method: "get",
		url: "https://spaexample-f6590-default-rtdb.firebaseio.com/data/.json",
	};
	axios(config)
		.then(function (employees) {
			// View
			// console.log("THE EMPLOYEES ARE " , Object.entries(employees) );
			var employees = Object.entries(employees.data);
			console.log("new employees are ", employees);
			return employees;
		})
		.then((employees) => {
			res.render("pages/directory", {
				employees: employees,
			});
		})
		.catch(function (error) {
			console.log(error);
		});
});

// about page
app.get("/about", function (req, res) {
	res.render("pages/about");
});

// Single Employee
app.get("/directory/:uid", function (req, res) {
	console.log("The empUID is ", req.params);
	empUID =
		"https://spaexample-f6590-default-rtdb.firebaseio.com/data/" +
		req.params.uid +
		".json";
	//console.log("THE EMP UID IS ", empUID)

	var config = {
		method: "get",
		url: empUID,
		headers: {},
	};
	axios(config)
		.then(function (singleEmployee) {
			console.log("THE EMPLOYEES ARE ", JSON.stringify(singleEmployee.data));
			var singleEmployee = singleEmployee.data;
			res.render("pages/person", {
				employee: singleEmployee,
			});
		})
		.catch(function (error) {
			console.log(error);
		});
});

// GET Add new employee form (the post route is part of the form which we have to GET first. The forms "submit" button handles the POST request.

app.get("/add", function (req, res) {
	res.render("pages/post_user");
});

// Express's .listen method is the final part of Express that fires up the server on the assigned port and starts "listening" for request from the app! (boilerplate code from the docs)

app.listen(2001);
console.log("Space Port Odyssey 2001 is open");
