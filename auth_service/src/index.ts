import express, { Request, Response, json } from 'express'
const server = express();

server.use(json())

const users: { [key: string  | number ]: any } = {}

server.get('/api', (req: Request, res: Response) => {
  res.send(users)
})

server.get('/api/:id', (req: Request, res: Response) => {
  res.send(users[req.params.id])
})

server.post('/api', (req: Request, res: Response) => {
  const id = Math.ceil((Math.random() * 10000 ))
  users[id] = {
    id,
    ...req.body
  }
  res.send(users[id])
})

server.patch('/api/:id', (req: Request, res: Response) => {
  const { id } = req.params
  users[id] = {
    id,
    ...req.body
  }
  res.send(users[id])
})

server.delete('/api/:id', (req: Request, res: Response) => {
  const { id } = req.params
  delete users[id]
  res.send()
})

server.listen(80, () => {
  console.log('App is up and running')
})