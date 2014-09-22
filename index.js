/**
 * Created by DarkRider on 23.09.2014.
 */

exports.simpleUnparamedTest = function (func, times) {
    var _times = times || 1e6;
    var start;
    var end;
    var time = 0;
    for (var i=0; i<_times; ++i){
        start = process.hrtime();
        func();
        end =  process.hrtime(start);
        time += end[0] + end[1] * 1e-9;
    }
    return (time / _times);
};

exports.simpleTest = function (func, times, thisArg, params) {
    var _times = times || 1e6;
    var _this = thisArg || null;
    var args = params || [];
    var start;
    var end;
    var time = 0;
    for (var i=0; i<_times; ++i){
        start = process.hrtime();
        func.apply(_this, args);
        end =  process.hrtime(start);
        time += end[0] + end[1] * 1e-9;
    }
    return (time / _times);
};