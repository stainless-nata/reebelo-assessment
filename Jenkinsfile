pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
        AWS_CREDENTIALS_ID = 'aws-credentials'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        API_ID = 'your-api-id' // The API Gateway ID
        STAGE_NAME = 'your-stage-name' // The API Gateway stage name (e.g., 'prod')
        CONFIG_FILE = './api-gateway-config/gateway-config.yaml'
    }

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    def services = ['auth-service', 'order-service', 'customer-service', 'inventory-service']
                    for (service in services) {
                        sh "docker build -t ${service}:${IMAGE_TAG} ./${service}"
                    }
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    def services = ['auth-service', 'order-service', 'customer-service', 'inventory-service']
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
                    def services = ['auth-service', 'order-service', 'customer-service', 'inventory-service']
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
                        # Create or update the API Gateway using the configuration file
                        aws apigateway put-rest-api --rest-api-id ${API_ID} --body file://${CONFIG_FILE} --mode overwrite --region us
                    """
                }
            }
        }

        stage('Deploy API Gateway') {
            steps {
                script {
                    sh """
                        # Deploy API Gateway changes
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