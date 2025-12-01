FROM nginx:alpine

ADD ./dist/ /usr/share/nginx/html/nrp-web/

COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 80
