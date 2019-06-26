module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["hirudinee"] = {
        host: process.env.EndPoint_rdsHirudinee,
        port: process.env.Port_rdsHirudinee,
        user: process.env.User_rdsHirudinee,
        password: process.env.Password_rdsHirudinee,
        database: "TestHiruDB"
    };
};