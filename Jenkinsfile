pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
        AWS_CREDENTIALS_ID = 'aws-credentials'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        API_ID = '******APIID******'
        STAGE_NAME = 'dev'
        CONFIG_FILE = './api-gateway-config/gateway-config.yaml'
    }

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    withDockerRegistry([credentialsId: DOCKER_CREDENTIALS_ID, url: 'https://index.docker.io/v1/']) {
                        sh 'docker-compose push'
                    }
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    def services = ['order-service', 'customer-service', 'inventory-service']
                    for (service in services) {
                        sh "docker tag ${service}:${IMAGE_TAG} your-dockerhub-repo/${service}:${IMAGE_TAG}"
                        sh "docker push your-dockerhub-repo/${service}:${IMAGE_TAG}"
                    }
                }
            }
        }

        stage('Deploy to AWS ECS') {
            steps {
                script {
                    def services = ['order-service', 'customer-service', 'inventory-service']
                    for (service in services) {
                        sh "aws ecs update-service --cluster your-cluster --service ${service}-service --force-new-deployment --region us"
                    }
                }
            }
        }

        stage('Upload API Gateway Configuration') {
            steps {
                script {
                    sh """
                        aws apigateway put-rest-api --rest-api-id ${API_ID} --body file://${CONFIG_FILE} --mode overwrite --region us
                    """
                }
            }
        }

        stage('Deploy API Gateway') {
            steps {
                script {
                    sh """
                        aws apigateway create-deployment \
                            --rest-api-id ${API_ID} \
                            --stage-name ${STAGE_NAME} \
                            --region us
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}