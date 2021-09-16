FROM node:16-alpine
RUN npm run build
COPY dist dist
ENTRYPOINT [ "node", "/dist/index.js" ]
