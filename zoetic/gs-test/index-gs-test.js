if (typeof gs["tests"] == 'undefined') {
    gs["tests"] = {};
}

const testsNs = gs["tests"] || {};

testsNs.run = function () {
    const fns = [this.fn_logInfo_test];
    console.log(`ℹ️ Testing ${fns.length} functions.`)
    fns.forEach(fn => fn());
    console.log(`ℹ️ End️ Test.`)
}
testsNs.fn_logInfo_test = function (){
    Logger.log(`Testing: logInfo('foo') [default]`);
    gs.logInfo('foo');
    Logger.log(`Testing: logInfo('foo', '[TEST] ')`);
    gs.logInfo('foo', '[TEST] ');
    Logger.log(`Test End: logInfo('foo')`);
}
