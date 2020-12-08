const {m1_all} = require("./module1/m1_all");
const {m2_all} = require("./module2/m2_all");
const {m3_all} = require("./module3/m3_all");
const {m4_all} = require("./module4/m4_all");
const {m5_all} = require("./module5/m5_all");
const {m6_all} = require("./module6/m6_all");
const {m7_all} = require("./module7/m7_all");
const {m8_all} = require("./module8/m8_all");
const {m9_all} = require("./module9/m9_all");

function dist() {
    return m1_all() 
         + m2_all()
         + m3_all()
         + m4_all()
         + m5_all()
         + m6_all()
         + m7_all()
         + m8_all()
         + m9_all()
}

module.exports = {dist}
