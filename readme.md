# ทดสอบบน local 

## ติดตั้ง argocd
## https://argoproj.github.io/argo-cd/getting_started/

## ติดตั้ง chartmuseum ผ่าน argocd helm
## https://chartmuseum.github.io/charts
- service.externalPort:5000
- service.nodePort:5000
- env.open.DISABLE_API:false
- service.type:LoadBalancer

## API chartmuseum
- POST http://localhost:5000/api/charts multipart/form-data charts:file
- GET http://localhost:5000/api/charts get list charts

----
    "proxy-app": [
        {
            "name": "proxy-app",
            "version": "0.1.0",
            "description": "A Helm chart for Kubernetes",
            "apiVersion": "v2",
            "appVersion": "1.16.0",
            "type": "application",
            "urls": [
                "charts/proxy-app-0.1.0.tgz"
            ],
            "created": "2021-08-31T13:24:38.9569187Z",
            "digest": "d2968e6a8e03a60e895933d0a76556f89d0b2d606a90e9814fb5871ecab5844e"
        }
    ]
----

- GET http://localhost:5000/api/charts/:name/:version delete  charts

## เช็ค CLUSTER-IP จาก kubectl get service -A (chartmuseum)
## http://xxxxxx:5000