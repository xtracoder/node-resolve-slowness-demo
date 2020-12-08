const {module1_1} = require("./module1");
const {module1_2} = require("./module1");
const {module2_1} = require("./module2");
const {module2_2} = require("./module2");
const {module3_1} = require("./module3");
const {module3_2} = require("./module3");
const {module4_1} = require("./module4");
const {module4_2} = require("./module4");

function m5_all() {
    return module1_1() + module1_2()
         + module2_1() + module2_2()
         + module3_1() + module3_2()
         + module4_1() + module4_2()
}

module.exports = {m5_all}
