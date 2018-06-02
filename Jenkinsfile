pipeline {
    agent any 
    stages {
        stage('jest') { 
            steps {
                sh 'yarn add --dev jest'
            }
        
        stage('Inicio de scripts') { 
            steps {
                sh './jenkins/script/test.sh'
          
 
        }
        }
}
