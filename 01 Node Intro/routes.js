const fs = require('fs')

const requestHandler = (req, res) => {
  const { url, method, headers } = req

  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Form</title></head>')
    res.write(`
      <body>
        <form action='/message' method='POST'>
          <input type='text' name='message'/>
          <button>Submit</button>
        </form>
      </body>
    `)
    res.write('<html/>')
    return res.end()
  }5
  
  if (url === '/message' && method === 'POST') {
    const body = []
    
    req.on('data', chunk => {
      console.log(chunk)
      body.push(chunk)
    })
    
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      console.log(parsedBody)
      fs.writeFileSync('message.txt' , message)
      res.statusCode = 302
      res.setHeader('Location', '/message')
      return res.end()
    })
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Main</title></head>')
  res.write('<body>This is my first pge</body>')
  res.write('<html/>')
  res.end()
}

module.exports = {
  handler: requestHandler
}