FROM node:16-alpine
COPY . .
RUN npm run build
ENTRYPOINT [ "node", "/dist/index.js" ]
