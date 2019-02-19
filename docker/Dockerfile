FROM nginx:1.13.5-alpine

MAINTAINER "oujinlong"<q616559837@qq.com>

ADD dist /usr/share/nginx/html
COPY nginx_prod.conf /etc/nginx/nginx.conf

RUN chmod o+r /etc/nginx/nginx.conf && chmod -R o+xr /usr/share/nginx/html

#USER nginx
