// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const express_1 = __importDefault(require("express"));
// const route_1 = __importDefault(require("./api/route"));
// const generalErrorHandler_1 = __importDefault(require("./errors/generalErrorHandler"));
// const app = (0, express_1.default)();
// // import connectDB from "./Loaders/db";
// // Connect Database
// // connectDB();
// app.use(express_1.default.urlencoded());
// app.use(express_1.default.json());
// app.use(route_1.default);
// app.use(generalErrorHandler_1.default);
// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "production" ? err : {};
//     // render the error page
//     res.status(err.status || 500);
//     res.render("error");
// });
// app
//     .listen(3000, () => {
//     console.log(`
//     ################################################
//     🛡️  Server listening on port: 3000 🛡️
//     ################################################
//   `);
// })
//     .on("error", (err) => {
//     console.error(err);
//     process.exit(1);
// });
