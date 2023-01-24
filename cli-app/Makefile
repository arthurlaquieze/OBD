build:
	docker build -t cli-app:1.0 .

run-config:
	docker run -v "/workspaces/OBD/cli-app/configs/":"/home/configs/" --rm cli-app:1.0 run-config --config "/home/configs/config.txt"

run-hello:
	docker run -v "/workspaces/OBD/cli-app/configs/":"/home/configs/" --rm cli-app:1.0 hello "Apple Pro"

stop:
	docker stop cli-app

rm:
	docker rm cli-app

stop_rm:
	stop rm
