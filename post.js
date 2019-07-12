const http = require('http')

/*
data={
    userame="",
    password=""
}
*/
function apiCall1(data){
    console.log(`API invoked username=${data.username}, password=${data.password}`)
}

const server = http.createServer(function(request, response) {
    if (request.method == 'POST') {
        var body = ''
        request.on('data', function(data) {
            body += data
        })
        request.on('end', function() {
            if(request.url == "/apicall1") {
                apiCall1(JSON.parse(body))
            }
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end('API invoked')
        })
}
});

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
