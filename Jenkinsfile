pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'npm install --save-dev jest'
            }
        }
        stage('Test') { 
            steps {
                sh ' npm test ./jenkins/script'
            }
        }
    }
}
