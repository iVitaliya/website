const http = require("http");
const express = require("express");

module.exports = () => {
    /** @typedef {"HTTP" | "HTTPS"} Types */
    /**
     * @typedef IRepsonse
     * @property {Types} Type - The type of the response. (e.g.: http)
     * @property {number} Port - The port the server is running on
     * @property {string} [State] - The state of the server
     * @property {boolean} IsPaused - If the server is paused or running
     */
    /** @typedef {IReponse[]} IResponses */

    // Application
    const app = express();

    // HTTP/HTTPS Server
    const SERVER = http.createServer(app);
    SERVER.listen(80, null, null, () => {
        console.log("Starting and serving server at port 80");
    });
    new http.Agent({ keepAlive: true });

    const Connection = SERVER;
    return Connection;
};