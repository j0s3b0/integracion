pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'sh yarn add --dev jest'
            }
        }
        stage('Test') { 
            steps {
                sh './jenkins/script/test.sh'
            }
        }
    }
}
