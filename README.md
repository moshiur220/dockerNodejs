# dockerNodejs
# This is simple node and docker how to use with docker and node
# Building your image
Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:
# docker build . -t <your username>/node-web-app
# Run the image
Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:
# docker run -p 49160:8080 -d <your username>/node-web-app
# docker exec -it <container id> /bin/bash
