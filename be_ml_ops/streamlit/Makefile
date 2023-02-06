app:
	streamlit run app.py
build:
	docker build -f Dockerfile -t eu.gcr.io/third-ridge-138414/yolo-v5-streamlit:1.4 .
run:
	docker run --rm -p 8501:8501 eu.gcr.io/third-ridge-138414/yolo-v5-streamlit:1.4
push:
	docker push eu.gcr.io/third-ridge-138414/yolo-v5-streamlit:1.4

build-my-image:
	docker build -t eu.gcr.io/isae-sdd/arthur-yolov5-front:1.0 -f Dockerfile .

run-my-image:
	docker run --rm -p 8501:8501 eu.gcr.io/isae-sdd/arthur-yolov5-front:1.0

push-my-image:
	docker push eu.gcr.io/isae-sdd/arthur-yolov5-front:1.0