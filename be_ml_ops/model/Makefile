app:
	uvicorn app:app --reload
build:
	docker build -f Dockerfile -t eu.gcr.io/third-ridge-138414/yolo-v5:1.1 .
run:
	docker run --rm -p 8000:8000 eu.gcr.io/third-ridge-138414/yolo-v5:1.1
push:
	docker push eu.gcr.io/third-ridge-138414/yolo-v5:1.1

build-my-image:
	docker build -t eu.gcr.io/isae-sdd/arthur-yolov5:1.0 -f Dockerfile .

test-my-image:
	docker run --rm -p 8000:8000 eu.gcr.io/isae-sdd/arthur-yolov5:1.0

remove-all-images:
	docker rmi $(docker images -a -q)

remove-all-containers:
	docker rm $(docker ps -a -q)

push-my-image:
	docker push eu.gcr.io/isae-sdd/arthur-yolov5:1.0

run-my-image:
	docker run --rm -p 8000:8000 eu.gcr.io/isae-sdd/arthur-yolov5:1.0