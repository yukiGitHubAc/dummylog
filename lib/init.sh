# login ECS Repository
$(aws ecr get-login --no-include-email)

# create ecr repository
aws ecr create-repository \
    --repository-name nginx-log-dummy