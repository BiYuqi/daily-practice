var buf = new Buffer('loading.more');

var json = buf.toJSON(buf);

console.log(json.data)
