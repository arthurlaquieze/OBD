build:
	docker build -t flask-app:1.0 .

run:
	docker run --rm -p 8888:5000 --name flask-app flask-app:1.0

stop:
	docker stop flask-app

rm:
	docker rm flask-app

stop_rm: stop rm
