FROM node:18-alpine

ARG SHOPIFY_API_KEY
ENV SHOPIFY_API_KEY=16a9a3dca149851e8c57d4ab629a20bc
ENV SCOPES=write_script_tags
ENV SHOPIFY_API_SECRET=cecd5a95c37edbe8f020d8050a903c60
ENV HOST=localhost
ENV PORT=8081
ENV BACKEND_PORT=64864
EXPOSE 8081
WORKDIR /app
COPY web .
RUN npm install
RUN cd frontend && npm install && npm run build
CMD ["npm", "run", "serve"]
