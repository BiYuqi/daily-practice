function ajax(o) {
  console.log(o)
  return new Promise((resolve, reject) => {
    $.ajax({
      type: o.type,
      url: o.url,
      data: o.data || {},
      success: function (ss) {
        resolve(ss)
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}