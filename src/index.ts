import server from './server'

server.listen(server.get('port'), ()=>{
    console.log('Server is running on port, '+server.get('port'))
})