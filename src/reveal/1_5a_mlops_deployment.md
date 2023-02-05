---
title: Deployment & MLOPS
theme: evo
highlightTheme: vs
separator: <!--s-->
verticalSeparator: <!--v-->
revealOptions:
    transition: 'fade'
    transitionSpeed: 'default'
    controls: true
    slideNumber: true
    width: '100%'
    height: '100%'
---

This class

- **Cloud Computing & Docker applied to AI**
- **Intro to MLOps**
- **Hands on : Deploy your model in production**

<!--s-->

## Intro to MLOps / ML Systems Design

![mlops](https://radiant.digital/wp-content/uploads/2021/02/MLOps_2-1024x677.png) <!-- .element: height="50%" width="50%" -->

<!--v-->

![mlsystems](https://huyenchip.com/machine-learning-systems-design/assets/ml_project_flow.png) <!-- .element: height="40%" width="40%" -->

<!--v-->

![mlops](https://ml-ops.org/img/mlops-loop-en.jpg) <!-- .element: height="50%" width="50%" -->

<!--v-->

- https://huyenchip.com/machine-learning-systems-design/toc.html
- https://ml-ops.org/content/references.html

<!--s-->

## Intro to deployment

<!--v-->

### Architecturing (web) applications

<!--v-->

### Communicating between applications

![api](https://www.aloi.io/wp-content/uploads/2019/09/api-visual.png) <!-- .element: height="50%" width="50%" -->

<!--v-->

### REST API

Representational state transfer (REST)

![rest](https://images.tutorialedge.net/uploads/rest-api.png) <!-- .element: height="50%" width="50%" -->

<!--v-->

### Microservices vs "monoliths"

![microservices](https://www.sourcefuse.com/wp-content/uploads/2021/01/D-image4-min.png) <!-- .element: height="50%" width="50%" -->

PS: [Microservices are hard](https://dwmkerr.com/the-death-of-microservice-madness-in-2018/)

<!--v-->

### Multi applications & docker

![docker-compose](https://hosting.analythium.io/content/images/2021/06/compose-3.png) <!-- .element: height="50%" width="50%" -->

<!--v-->

### How does it relate to me ?

<!--v-->

### Hands-On

- How to expose an ML model to a community of users through a web app
- How to build a companion app to interact with your model in an ergonomic fashion
- How to deploy both applications on a single instance (for now)

<!--v-->

![](static/img/mlworkflow.png)  <!-- .element: height="50%" width="50%" -->

<!--v-->

### I have an **awesome** ML model

![model](static/img/meme_2.jpg)  <!-- .element: height="30%" width="30%" -->

<!--v-->

### Just kidding

![model](static/img/meme_3.jpg)  <!-- .element: height="30%" width="30%" -->

<!--v-->

### What I want to do...

![deploy](https://pbs.twimg.com/media/DoGygAjXkAE-ORD.jpg) <!-- .element: height="30%" width="30%" -->

<!--v-->

### How I would do it

![deploy](static/img/deploy.jpg)  <!-- .element: height="50%" width="50%" -->

<!--v-->

### Modern way of doing things

![package](static/img/packaging.png)

- cog : https://github.com/replicate/cog
- pesto : https://github.com/AirbusDefenceAndSpace/pesto

Today, we will do it "manually"

<!--v-->

### Interaction with user ? We use CURL 👎 


```bash
curl -X POST "http://my-instance/predict" \
    -H  "accept: application/json" \
    -H  "Content-Type: application/json" \
    -d "{\"model\":\"string\",\"image\":\"...\"}"
```

<!--v-->

### Interaction with user ? We use CURL 👎 

![json](static/img/json.png)  <!-- .element: height="30%" width="30%" -->

<!--v-->

### Interaction with users ? 👍

![](static/img/results.png)  <!-- .element: height="50%" width="50%" -->

<!--v-->

### Webapp builder for data scientists

![](static/img/streamlit.png)  <!-- .element: height="50%" width="50%" -->

<!--v-->

### Webapp builder for data scientists

- [streamlit](https://streamlit.io/)
- [gradio](https://gradio.app/)

<!--v-->

### Let's build it !

- A model behind a Restful API, packaged in a docker
- A frontend using streamlit, packaged in a docker
- Deploy it on Google Cloud Platform using GCE & docker-compose
- Send it to your friends !

<!--v-->

### More links

- https://github.com/EthicalML/awesome-production-machine-learning
