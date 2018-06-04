pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
        environment { HOME="."
            CI = 'true' 
        }
        stage('Test') { 
            steps {
                sh ' npm test ./jenkins/script'
            }
        }
    }
}
