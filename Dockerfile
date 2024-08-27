FROM node:18 AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
ENV NODE_ENV=production
COPY . ./
RUN yarn run build


FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html/react
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 85

CMD ["nginx", "-g", "daemon off;"]

