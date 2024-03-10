const http = require("http");
const url = require('url');
const PORT = 3000;
const DEFAULT_HEADER = { 'Content-type': 'application/json' }

const HeroFactory = require('./factories/heroFactory')
const heroService = HeroFactory.generateInstance()
const Hero = require('./entities/hero')

const routes = {
  '/heroes:get': async (request, response) => { 
    const { id } = request.queryString
    const heroes = await heroService.find(id) 
    response.writeHead(200, DEFAULT_HEADER);
    response.write(JSON.stringify({ results: heroes }))
    
    return response.end()
  },
  '/heroes:post': async (request, response) => {
      // async iterator 
      for await (const data of request) {
       try { 
        const item = JSON.parse(data)
        // await Promise.reject('/heroes:get')        
        const hero = new Hero(item)
        const { error, valid } = hero.isValid()
        if(!valid){
          response.writeHead(400, DEFAULT_HEADER)
          response.write(JSON.stringify({ error: error.join(',') }))
          return response.end()
        }
        
        const id = await heroService.create(hero)
        response.writeHead(201, DEFAULT_HEADER)
        response.write(JSON.stringify({ sucess: 'User Create with Sucess!!', id}))

        // Just use the return, because you know it's a single object body for the request.
        // If the file is requested, treat it like a demand.
        // There could be multiple openings of the file on the same event. Here, the return is removed.
        return response.end()
      } catch(error){
        return handleError('error', error)
      }
    }
  },
  default: (request, response) => {
    response.write('Hello!')
    response.end()
  }
}

const handleError = response => {
  return error => {
    console.log('Deu ruim!', error)
    response.writeHead(500, DEFAULT_HEADER)
    response.write(JSON.stringify({ error: 'Internal Server Error!!'}))
    
    return response.end()
  }
}
const handler = (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const { pathname, query } = parsedUrl;
  const splitPathname = pathname.split('/');
  const id = splitPathname.length > 2 ? splitPathname[2] : null;

  const method = request.method.toLowerCase();
  const route = splitPathname[1];

  request.queryString = { id: isNaN(id) ? id : Number(id) };

  const key = `/${route}:${method}`;

  const chosen = routes[key] || routes.default;
  return chosen(request, response).catch(handleError(response));
};

http.createServer(handler)
  .listen(PORT, () => console.log("server running at", PORT));