/**
 * Get the version from the package.json file and copy it in the charts
 *
 * @params branchName - the branch name
 * @params environment - the environment we build for
 * @params buildNumber - the current build number
 * return the version
 */
def getVersion(String branchName, String environment, String buildNumber) {
    def version = sh returnStdout: true, script: "cat package.json | jq -r '.version'"
    version = version.trim()

    def majorMinorPatch = version.split("\\.")
    def major = majorMinorPatch[0]
    def minor = majorMinorPatch[1]
    def patch = majorMinorPatch[2].toInteger()

    // Verify that the version matches the branch
    if (branchName.startsWith("release/")) {
        def branchMajorMinorPatch = branchName.split("/")[1].split("\\.")
        def branchMajor = branchMajorMinorPatch[0]
        def branchMinor = branchMajorMinorPatch[1]

        if (branchMajor != major || branchMinor != minor) {
            throw new Exception("${version} does not belong to branch ${env.BRANCH_NAME_PARAM} as the major or minor version changed. Please create another release branch.")
        }
    }

    def suffix = ""
    if(environment == "prod") patch += 1;
    else suffix += "-${environment}-${buildNumber}"

    def newVersion = "${major}.${minor}.${patch}${suffix}"

    sh "sed -i 's/\"version\":\\ \"${version}\"/\"version\":\\ \"${newVersion}\"/g' package.json"

    return newVersion
}


return this
