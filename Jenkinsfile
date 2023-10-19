pipeline {
    environment { author = "" }
    options {
        buildDiscarder(logRotator(numToKeepStr: "3"))
    }
    agent {
        node {
            label 'linux-spot-agent || jenkins-linux-agent || jenkins-linux-agent-2'
        }
    }
    parameters {
        string(name: 'ENVIRONMENT_PARAM', defaultValue: '', description: 'On which environment do we want to deploy to?')
    }
    stages {
      stage('Preparations') {
        steps {
          echo 'Initialize parameters as environment variables due to https://issues.jenkins-ci.org/browse/JENKINS-41929'
          evaluate """${def script = ""; params.each { k, v -> script += "env.${k} = '''${v}'''\n" }; return script}"""
          script { author = sh(returnStdout: true, script: "git log -1 --pretty=format:'%an'").trim() }
        }
      }
      stage("Sync translations") {
          when {
              allOf {
                  anyOf {
                      branch 'main'
                      changeRequest target: 'main'
                  }
                  changeset "**/i18n/**"
                  expression { author != "POEditor" }
              }
          }
          steps {
            script {
              def responseEN = httpRequest 'https://api.poeditor.com/webhooks/7a3a23cc94'
              println("Language status en: " + responseEN.status)
            }
          }
      }
      stage("Get the latest translations") {
        when {
            allOf {
                expression { author != "POEditor" }
                not { changeRequest() }
                not { changeset "**/i18n/**" }
                anyOf {
                    branch pattern: "release\\/.+", comparator: "REGEXP"
                    branch 'main'
                    expression { env.ENVIRONMENT_PARAM != '' }
                }
            }
        }
        steps {
          script {
            httpRequest 'https://api.poeditor.com/webhooks/e4427f26a7'
            httpRequest 'https://api.poeditor.com/webhooks/5398eb5dd3'
            httpRequest 'https://api.poeditor.com/webhooks/12527ce36d'
            httpRequest 'https://api.poeditor.com/webhooks/72bac822ef'
            httpRequest 'https://api.poeditor.com/webhooks/6a24dba552'
            httpRequest 'https://api.poeditor.com/webhooks/f054fd6c64'
            httpRequest 'https://api.poeditor.com/webhooks/aac0491f7c'
            httpRequest 'https://api.poeditor.com/webhooks/7d5797c08c'
            httpRequest 'https://api.poeditor.com/webhooks/57bcc2fa4a'
            httpRequest 'https://api.poeditor.com/webhooks/3f625e4218'
            httpRequest 'https://api.poeditor.com/webhooks/e4dd7c924d'
          }
        }
    }
      stage('Publish') {
        when {
            allOf {
                expression { author != "POEditor" }
                not { changeRequest() }
                anyOf {
                    branch pattern: "release\\/.+", comparator: "REGEXP"
                    branch 'main'
                    expression { env.ENVIRONMENT_PARAM != '' }
                }
            }
        }
        steps {
          withCredentials([gitUsernamePassword(credentialsId: 'jenkins.gitlab-pat', gitToolName: 'git-tool')]) {
            script {
              def environment = ""
              def version = ""
              def branch = BRANCH_NAME
              def buildNumber = env.BUILD_NUMBER
              util = load "jenkins.groovy"
              switch (env.ENVIRONMENT_PARAM) {
                  case '':
                      if (branch == "main") environment = "dev"
                      else if (branch.startsWith("release/")) environment = "stage"
                      break
                  case 'prod':
                  case 'stage':
                  case 'dev':
                      environment = env.ENVIRONMENT_PARAM
                      break
                  default :
                      throw new Exception("Environment not accepted. This should be dev, stage or prod but was ${env.ENVIRONMENT_PARAM} instead.")
              }

              version = util.getVersion(branch, environment, buildNumber)

              sh """
                git add package.json
                git commit -m "bump version"
                git branch -D distribute &>/dev/null
                git checkout -b distribute
                git push origin distribute -f
              """

              slackSend channel: 'proj-inf-retain-builds',
                        color: 'good',
                        message: "Triggering ${environment} build for inf-companion version ${version}."
            }
          }
        }
      }
    }
    post {
      always {
        cleanWs(deleteDirs: true)
      }
    }
}
