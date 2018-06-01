pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh "npm install"
                sh 'npm install --save-dev jest'
            }
        }
        stage('Test') { 
            steps {
                sh './jenkins/script/test.sh'
            }
        }
    }
}
