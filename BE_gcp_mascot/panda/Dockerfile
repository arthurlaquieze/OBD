FROM python:3.8-alpine
WORKDIR /app/

ENV CREATOR=${USER}
RUN pip install flask jinja2 

COPY . /app/

EXPOSE 5004

CMD ["python", "/app/app.py"]
