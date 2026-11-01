import {DateUtility} from "../../../../src/lib/utility/date/dateUtility.ts";

if (typeof gs["tests"] == 'undefined') {
    gs["tests"] = {};
}
if (typeof gs["tests"]["lib"] == 'undefined') {
    gs["tests"]["lib"] = {};
}
if (typeof gs["tests"]["lib"]["utility"] == 'undefined') {
    gs["tests"]["lib"]["utility"] = {};
}
if (typeof gs["tests"]["lib"]["utility"]["date"] == 'undefined') {
    gs["tests"]["lib"]["utility"]["date"] = {};
}

const testsNs = gs["tests"]["lib"]["utility"]["date"];

testsNs.run = function () {
    const fns = [this.dateUtility_asDow_test,
                        this.dateUtility_asDowName_test];
    console.log(`ℹ️ Testing ${fns.length} functions.`)
    fns.forEach(fn => fn());
    console.log(`ℹ️ End️ Test.`)
}
testsNs.dateUtility_asDow_test = function (){
    const actual = testsNs.asDow(new Date());
    Logger.log(`Testing: DateUtility.asDow(dto) is 0-6 --> ${actual}`);
    Logger.log(`Test End: DateUtility.asDow(dto)`);
}
testsNs.dateUtility_asDowName_test = function (){
    const actual = testsNs.asDowName(new Date());
    Logger.log(`Testing: DateUtility.asDowName(dto) --> ${actual}`);
    Logger.log(`Test End: DateUtility.asDowName(dto)`);
}
