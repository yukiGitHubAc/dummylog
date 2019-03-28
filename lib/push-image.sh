REPOSITORY_NAME="nginx-log-dummy"
# login ECS Repository
$(aws ecr get-login --no-include-email)

REPOSITORY_URI=$(aws ecr describe-repositories \
    --query "repositories[?repositoryName==\`${REPOSITORY_NAME}\`].repositoryUri" \
    --output text) && echo ${REPOSITORY_URI}

cat ./_docker-compose.yml |
    sed -e "s@###REPO_URI###@${REPOSITORY_URI}@g" > ../docker-compose.yml

docker-compose build

# push docker image ecs repository
docker push ${REPOSITORY_URI}