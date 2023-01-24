# our base image
FROM alpine:3.15

# Install python and pip
RUN apk add --update py3-pip

# install Python modules needed by the Python app
COPY requirements.txt /usr/src/app/
RUN pip3 install --no-cache-dir -r /usr/src/app/requirements.txt

# CLI app
COPY cli-app.py /usr/src/app/

# create entrypoint to run in CLI
ENTRYPOINT ["python3", "/usr/src/app/cli-app.py"]
