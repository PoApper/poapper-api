# PoApper API

## Develop

```bash
npm run start:debug
```

or with Docker

```bash
docker build . -t 151345152001.dkr.ecr.ap-northeast-2.amazonaws.com/poapper-api:latest
docker compose -f docker-compose.dev.yaml up -d
```

On EC2 instance,

```bash
$ aws ecr get-login-password --region ap-northeast-2 | \
  docker login --username AWS --password-stdin 151345152001.dkr.ecr.ap-northeast-2.amazonaws.com  
$ docker pull 151345152001.dkr.ecr.ap-northeast-2.amazonaws.com/poapper-api:latest
$ docker-compose -f ./docker-compose.prod.yaml up -d

# 옛날 이미지를 주기적으로 삭제해줘야 한다.
$ docker container prune # 중지된 모든 컨테이너 삭제
$ docker image prune # 사용하지 않는 이미지 삭제
```
