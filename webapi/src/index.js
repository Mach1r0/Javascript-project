const http = require("http");
const url = require('url');
const PORT = 3000;
const DEFAULT_HEADER = { 'Content-type': 'application/json' }

const routes = {
  '/heroes:get': async (request, response) => { 
    const { id } = request.queryString
    console.log({ id })
    return response.end()
  },
  
  default: (request, response) => {
    response.write('Hello!')
    response.end()
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

  response.writeHead(200, DEFAULT_HEADER);

  const chosen = routes[key] || routes.default;
  return chosen(request, response);
};

http.createServer(handler)
  .listen(PORT, () => console.log("server running at", PORT));