//안씁니다.

// import express from "express"; 
// // import router from "./api/route";
// import UserRouter from "./api/route/UserRouter"
// const app = express(); 
// import connectDB from "./Loaders/db";


// connectDB();

// app.use(express.urlencoded);
// app.use(express.json());  

// app.use(UserRouter);   //라우터 
// // error handler
// app.use(function (err, req, res, next) {

//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "production" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// app 
//   .listen(3001, () => {
//     console.log(`
//     ################################################
//     🛡️  Server listening on port: 27017 🛡️
//     ################################################
//   `);
//   })
//   .on("error", (err) => {
//     console.error(err);
//     process.exit(1);
//   });