tried running what i had made till time
## Powershell CLI
``` powershell
PS C:\Users\VIRAT\projects\Epics\App-Sehat\Sehat-Application\sehat> npm run android

> Sehat@0.0.1 android
> react-native run-android

'"adb"' is not recognized as an internal or external command,
operable program or batch file.
info Launching emulator...
error Failed to launch emulator. Reason: No emulators found as an output of `emulator -list-avds`.
warn Please launch an emulator manually or connect a device. Otherwise app may fail to launch.
info Installing the app...
Downloading https://services.gradle.org/distributions/gradle-8.3-all.zip


info 💡 Tip: Make sure that you have set up your development environment correctly, by running npx react-native doctor. To read more about doctor command visit: https://github.com/react-native-community/cli/blob/main/packages/cli-doctor/README.md#doctor 

Exception in thread "main" java.io.IOException: Downloading from https://services.gradle.org/distributions/gradle-8.3-all.zip failed: timeout (10000ms)
        at org.gradle.wrapper.Download.downloadInternal(Download.java:151)
        at org.gradle.wrapper.Download.download(Download.java:109)
        at org.gradle.wrapper.Install.forceFetch(Install.java:171)
        at org.gradle.wrapper.Install.fetchDistribution(Install.java:104)
        at org.gradle.wrapper.Install.access$400(Install.java:46)
        at org.gradle.wrapper.Install$1.call(Install.java:81)
        at org.gradle.wrapper.Install$1.call(Install.java:68)
        at org.gradle.wrapper.ExclusiveFileAccessManager.access(ExclusiveFileAccessManager.java:69)
        at org.gradle.wrapper.Install.createDist(Install.java:68)
        at org.gradle.wrapper.WrapperExecutor.execute(WrapperExecutor.java:102)
        at org.gradle.wrapper.GradleWrapperMain.main(GradleWrapperMain.java:66)
Caused by: java.net.SocketTimeoutException: connect timed out
        at java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)
        at java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)
        at java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)
        at java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)
        at java.net.AbstractPlainSocketImpl.connect(Unknown Source)
        at java.net.PlainSocketImpl.connect(Unknown Source)
        at java.net.SocksSocketImpl.connect(Unknown Source)
        at java.net.Socket.connect(Unknown Source)
        at sun.security.ssl.SSLSocketImpl.connect(Unknown Source)
        at sun.net.NetworkClient.doConnect(Unknown Source)
        at sun.net.www.http.HttpClient.openServer(Unknown Source)
        at sun.net.www.http.HttpClient.openServer(Unknown Source)
        at sun.net.www.protocol.https.HttpsClient.<init>(Unknown Source)
        at sun.net.www.protocol.https.HttpsClient.New(Unknown Source)
        at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.getNewHttpClient(Unknown Source)
        at sun.net.www.protocol.http.HttpURLConnection.plainConnect0(Unknown Source)
        at sun.net.www.protocol.http.HttpURLConnection.plainConnect(Unknown Source)
        at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.connect(Unknown Source)
        at sun.net.www.protocol.http.HttpURLConnection.getInputStream0(Unknown Source)
        at sun.net.www.protocol.http.HttpURLConnection.getInputStream(Unknown Source)
        at sun.net.www.protocol.https.HttpsURLConnectionImpl.getInputStream(Unknown Source)
        at org.gradle.wrapper.Download.downloadInternal(Download.java:129)
        ... 10 more
error Failed to install the app. Command failed with exit code 1: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081
Exception in thread "main" java.io.IOException: Downloading from https://services.gradle.org/distributions/gradle-8.3-all.zip failed: timeout (10000ms) at org.gradle.wrapper.Download.downloadInternal(Download.java:151) at org.gradle.wrapper.Download.download(Download.java:109) at org.gradle.wrapper.Install.forceFetch(Install.java:171) at org.gradle.wrapper.Install.fetchDistribution(Install.java:104) at org.gradle.wrapper.Install.access$400(Install.java:46) at org.gradle.wrapper.Install$1.call(Install.java:81) at org.gradle.wrapper.Install$1.call(Install.java:68) at org.gradle.wrapper.ExclusiveFileAccessManager.access(ExclusiveFileAccessManager.java:69) at org.gradle.wrapper.Install.createDist(Install.java:68) at org.gradle.wrapper.WrapperExecutor.execute(WrapperExecutor.java:102) at org.gradle.wrapper.GradleWrapperMain.main(GradleWrapperMain.java:66) Caused by: java.net.SocketTimeoutException: connect timed out at java.net.DualStackPlainSocketImpl.waitForConnect(Native Method) at java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source) at java.net.AbstractPlainSocketImpl.doConnect(Unknown Source) at java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source) at java.net.AbstractPlainSocketImpl.connect(Unknown Source) at java.net.PlainSocketImpl.connect(Unknown Source) at java.net.SocksSocketImpl.connect(Unknown Source) at java.net.Socket.connect(Unknown Source) at sun.security.ssl.SSLSocketImpl.connect(Unknown Source) at sun.net.NetworkClient.doConnect(Unknown Source) at sun.net.www.http.HttpClient.openServer(Unknown Source) at sun.net.www.http.HttpClient.openServer(Unknown Source) at sun.net.www.protocol.https.HttpsClient.<init>(Unknown Source) at sun.net.www.protocol.https.HttpsClient.New(Unknown Source) at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.getNewHttpClient(Unknown Source) at sun.net.www.protocol.http.HttpURLConnection.plainConnect0(Unknown Source) at sun.net.www.protocol.http.HttpURLConnection.plainConnect(Unknown Source) at sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.connect(Unknown Source) at sun.net.www.protocol.http.HttpURLConnection.getInputStream0(Unknown Source) at sun.net.www.protocol.http.HttpURLConnection.getInputStream(Unknown Source) at sun.net.www.protocol.https.HttpsURLConnectionImpl.getInputStream(Unknown Source) at org.gradle.wrapper.Download.downloadInternal(Download.java:129) ... 10 more.
info Run CLI with --verbose flag for more details.
PS C:\Users\VIRAT\projects\Epics\App-Sehat\Sehat-Application\sehat> 
```
this was what showed up in my npm ie node CLI

## npm CLI
``` node
info Welcome to React Native v0.73
info Starting dev server on port 8081...

                        ▒▒▓▓▓▓▒▒
                     ▒▓▓▓▒▒░░▒▒▓▓▓▒
                  ▒▓▓▓▓░░░▒▒▒▒░░░▓▓▓▓▒
                 ▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓
                 ▓▓░░░░░▒▓▓▓▓▓▓▒░░░░░▓▓
                 ▓▓░░▓▓▒░░░▒▒░░░▒▓▒░░▓▓
                 ▓▓░░▓▓▓▓▓▒▒▒▒▓▓▓▓▒░░▓▓
                 ▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░▓▓
                 ▓▓▒░░▒▒▓▓▓▓▓▓▓▓▒░░░▒▓▓
                  ▒▓▓▓▒░░░▒▓▓▒░░░▒▓▓▓▒
                     ▒▓▓▓▒░░░░▒▓▓▓▒
                        ▒▒▓▓▓▓▒▒


                Welcome to Metro v0.80.6
              Fast - Scalable - Integrated


info Dev server ready

i - run on iOS
a - run on Android
d - open Dev Menu
r - reload app

info Opening app on Android...
info A dev server is already running for this project on port 8081.
info Launching emulator...
info Installing the app...
Downloading https://services.gradle.org/distributions/gradle-8.3-all.zip
...................10%...................20%...................30%...................40%...................50%...................60%...................70%...................80%...................90%...................100%

Welcome to Gradle 8.3!

Here are the highlights of this release:
 - Faster Java compilation
 - Reduced memory usage
 - Support for running on Java 20

For more details see https://docs.gradle.org/8.3/release-notes.html

Starting a Gradle Daemon (subsequent builds will be faster)

info 💡 Tip: Make sure that you have set up your development environment correctly, by running npx react-native doctor. To read more about doctor command visit: https://github.com/react-native-community/cli/blob/main/packages/cli-doctor/README.md#doctor


FAILURE: Build failed with an exception.

* What went wrong:
org.gradle.api.internal.catalog.GeneratedClassCompilationException: No Java compiler found, please ensure you are running Gradle with a JDK
> No Java compiler found, please ensure you are running Gradle with a JDK

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

BUILD FAILED in 2m 1s
info Run CLI with --verbose flag for more details.
info Opening app on iOS...
info A dev server is already running for this project on port 8081.
Error: Error: Command failed with exit code 1: xcodebuild -list -json
'xcodebuild' is not recognized as an internal or external command,
operable program or batch file.
    at getInfo (C:\Users\VIRAT\projects\Epics\App-Sehat\Sehat-Application\Sehat\node_modules\@react-native-community\cli-platform-ios\build\tools\getInfo.js:31:11)
    at getConfiguration (C:\Users\VIRAT\projects\Epics\App-Sehat\Sehat-Application\Sehat\node_modules\@react-native-community\cli-platform-ios\build\commands\buildIOS\getConfiguration.js:34:37)
    at Object.runIOS [as func] (C:\Users\VIRAT\projects\Epics\App-Sehat\Sehat-Application\Sehat\node_modules\@react-native-community\cli-platform-ios\build\commands\runIOS\index.js:115:52)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Command.handleAction (C:\Users\VIRAT\projects\Epics\App-Sehat\Sehat-Application\Sehat\node_modules\@react-native-community\cli\build\index.js:118:9)
warn No apps connected. Sending "devMenu" to all React Native apps failed. Make sure your app is running in the simulator or on a phone connected via USB.
info Opening Dev Menu...
```
god knows whats the problem tbh too tired to read shit

and somehow tsconfig.json file got fucked up... i didn't even touch it... NOTE: it happen when i tried running the app.
JSON expert apni rai de

## tsconfig.json
```JSON 
{
  "extends": "@react-native/typescript-config/tsconfig.json"
}

```

made by Virat ;)