const jsonServer=require('json-server')

const employeeServer=jsonServer.create()

const router=jsonServer.router('db.json')

const middleware=jsonServer.defaults()

employeeServer.use(middleware)
employeeServer.use(router)


const port=3006 || process.env.PORT


employeeServer.listen(port,()=>{
    console.log(`employee server running at ${port}`)
})