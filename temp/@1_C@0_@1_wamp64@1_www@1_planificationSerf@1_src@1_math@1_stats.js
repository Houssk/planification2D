
var __cov_goZp$WM3m1wXA6uNkJkALw = (Function('return this'))();
if (!__cov_goZp$WM3m1wXA6uNkJkALw.__coverage__) { __cov_goZp$WM3m1wXA6uNkJkALw.__coverage__ = {}; }
__cov_goZp$WM3m1wXA6uNkJkALw = __cov_goZp$WM3m1wXA6uNkJkALw.__coverage__;
if (!(__cov_goZp$WM3m1wXA6uNkJkALw['C:\\wamp64\\www\\planificationSerf\\src\\math\\stats.js'])) {
   __cov_goZp$WM3m1wXA6uNkJkALw['C:\\wamp64\\www\\planificationSerf\\src\\math\\stats.js'] = {"path":"C:\\wamp64\\www\\planificationSerf\\src\\math\\stats.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":10,"loc":{"start":{"line":10,"column":20},"end":{"line":11,"column":0}}},"2":{"name":"(anonymous_2)","line":46,"loc":{"start":{"line":46,"column":16},"end":{"line":47,"column":0}}}},"statementMap":{"1":{"start":{"line":2,"column":0},"end":{"line":2,"column":20}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":26}},"3":{"start":{"line":10,"column":0},"end":{"line":39,"column":2}},"4":{"start":{"line":12,"column":4},"end":{"line":12,"column":23}},"5":{"start":{"line":13,"column":4},"end":{"line":13,"column":18}},"6":{"start":{"line":14,"column":4},"end":{"line":14,"column":17}},"7":{"start":{"line":15,"column":4},"end":{"line":15,"column":16}},"8":{"start":{"line":16,"column":4},"end":{"line":16,"column":19}},"9":{"start":{"line":17,"column":4},"end":{"line":17,"column":19}},"10":{"start":{"line":18,"column":4},"end":{"line":18,"column":21}},"11":{"start":{"line":20,"column":4},"end":{"line":20,"column":16}},"12":{"start":{"line":21,"column":4},"end":{"line":31,"column":5}},"13":{"start":{"line":22,"column":8},"end":{"line":22,"column":23}},"14":{"start":{"line":23,"column":8},"end":{"line":28,"column":9}},"15":{"start":{"line":24,"column":12},"end":{"line":24,"column":22}},"16":{"start":{"line":26,"column":13},"end":{"line":28,"column":9}},"17":{"start":{"line":27,"column":12},"end":{"line":27,"column":22}},"18":{"start":{"line":29,"column":8},"end":{"line":29,"column":19}},"19":{"start":{"line":30,"column":8},"end":{"line":30,"column":28}},"20":{"start":{"line":33,"column":4},"end":{"line":33,"column":30}},"21":{"start":{"line":35,"column":4},"end":{"line":35,"column":51}},"22":{"start":{"line":36,"column":4},"end":{"line":36,"column":33}},"23":{"start":{"line":38,"column":4},"end":{"line":38,"column":70}},"24":{"start":{"line":46,"column":0},"end":{"line":49,"column":2}},"25":{"start":{"line":48,"column":4},"end":{"line":48,"column":55}}},"branchMap":{"1":{"line":2,"type":"binary-expr","locations":[{"start":{"line":2,"column":10},"end":{"line":2,"column":13}},{"start":{"line":2,"column":17},"end":{"line":2,"column":19}}]},"2":{"line":3,"type":"binary-expr","locations":[{"start":{"line":3,"column":11},"end":{"line":3,"column":19}},{"start":{"line":3,"column":23},"end":{"line":3,"column":25}}]},"3":{"line":23,"type":"if","locations":[{"start":{"line":23,"column":8},"end":{"line":23,"column":8}},{"start":{"line":23,"column":8},"end":{"line":23,"column":8}}]},"4":{"line":26,"type":"if","locations":[{"start":{"line":26,"column":13},"end":{"line":26,"column":13}},{"start":{"line":26,"column":13},"end":{"line":26,"column":13}}]}}};
}
__cov_goZp$WM3m1wXA6uNkJkALw = __cov_goZp$WM3m1wXA6uNkJkALw['C:\\wamp64\\www\\planificationSerf\\src\\math\\stats.js'];
__cov_goZp$WM3m1wXA6uNkJkALw.s['1']++;var dwv=(__cov_goZp$WM3m1wXA6uNkJkALw.b['1'][0]++,dwv)||(__cov_goZp$WM3m1wXA6uNkJkALw.b['1'][1]++,{});__cov_goZp$WM3m1wXA6uNkJkALw.s['2']++;dwv.math=(__cov_goZp$WM3m1wXA6uNkJkALw.b['2'][0]++,dwv.math)||(__cov_goZp$WM3m1wXA6uNkJkALw.b['2'][1]++,{});__cov_goZp$WM3m1wXA6uNkJkALw.s['3']++;dwv.math.getStats=function(array){__cov_goZp$WM3m1wXA6uNkJkALw.f['1']++;__cov_goZp$WM3m1wXA6uNkJkALw.s['4']++;var min=array[0];__cov_goZp$WM3m1wXA6uNkJkALw.s['5']++;var max=min;__cov_goZp$WM3m1wXA6uNkJkALw.s['6']++;var mean=0;__cov_goZp$WM3m1wXA6uNkJkALw.s['7']++;var sum=0;__cov_goZp$WM3m1wXA6uNkJkALw.s['8']++;var sumSqr=0;__cov_goZp$WM3m1wXA6uNkJkALw.s['9']++;var stdDev=0;__cov_goZp$WM3m1wXA6uNkJkALw.s['10']++;var variance=0;__cov_goZp$WM3m1wXA6uNkJkALw.s['11']++;var val=0;__cov_goZp$WM3m1wXA6uNkJkALw.s['12']++;for(var i=0;i<array.length;++i){__cov_goZp$WM3m1wXA6uNkJkALw.s['13']++;val=array[i];__cov_goZp$WM3m1wXA6uNkJkALw.s['14']++;if(val<min){__cov_goZp$WM3m1wXA6uNkJkALw.b['3'][0]++;__cov_goZp$WM3m1wXA6uNkJkALw.s['15']++;min=val;}else{__cov_goZp$WM3m1wXA6uNkJkALw.b['3'][1]++;__cov_goZp$WM3m1wXA6uNkJkALw.s['16']++;if(val>max){__cov_goZp$WM3m1wXA6uNkJkALw.b['4'][0]++;__cov_goZp$WM3m1wXA6uNkJkALw.s['17']++;max=val;}else{__cov_goZp$WM3m1wXA6uNkJkALw.b['4'][1]++;}}__cov_goZp$WM3m1wXA6uNkJkALw.s['18']++;sum+=val;__cov_goZp$WM3m1wXA6uNkJkALw.s['19']++;sumSqr+=val*val;}__cov_goZp$WM3m1wXA6uNkJkALw.s['20']++;mean=sum/array.length;__cov_goZp$WM3m1wXA6uNkJkALw.s['21']++;variance=sumSqr/array.length-mean*mean;__cov_goZp$WM3m1wXA6uNkJkALw.s['22']++;stdDev=Math.sqrt(variance);__cov_goZp$WM3m1wXA6uNkJkALw.s['23']++;return{'min':min,'max':max,'mean':mean,'stdDev':stdDev};};__cov_goZp$WM3m1wXA6uNkJkALw.s['24']++;dwv.math.guid=function(){__cov_goZp$WM3m1wXA6uNkJkALw.f['2']++;__cov_goZp$WM3m1wXA6uNkJkALw.s['25']++;return Math.random().toString(36).substring(2,15);};