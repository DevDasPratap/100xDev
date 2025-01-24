# Bootstrap application (When create a image)
FROM node:16-alpine
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
RUN npx prisma generate

ENV DATABASE_URL

EXPOSE 3000

# Run application (When start a image/container)
CMD ["node", "dist/index.js"]