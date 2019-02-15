FROM node:10
RUN mkdir -p /opt/app/
WORKDIR /opt/app/
ADD . /opt/app/
CMD ["npm", "start"]
