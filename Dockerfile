FROM mhart/alpine-node:8

# Copy
COPY src/package.json /src/package.json

# Install app dependencies
RUN cd /src \
    && npm install --production

# Bundle app source
COPY ./src /src

CMD [ "node" ]
