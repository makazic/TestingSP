$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hjk.feature");
formatter.feature({
  "line": 1,
  "name": "Add new user",
  "description": "",
  "id": "add-new-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Navigate to correct page",
  "description": "",
  "id": "add-new-user;navigate-to-correct-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should see on the left",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.iAmLoggedIn()"
});
formatter.result({
  "duration": 3253730752,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldSeeOnTheLeft()"
});
formatter.result({
  "duration": 38334259,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"Google\"}\n  (Session info: chrome\u003d54.0.2840.99)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 34 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:48:19 -0700\u0027\nSystem info: host: \u0027Makazic-PC\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Makazic\\AppData\\Local\\Temp\\scoped_dir6808_27071}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d54.0.2840.99, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 62b7815c7d47fcd8fa8703fa5308ae43\n*** Element info: {Using\u003dname, value\u003dGoogle}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat stepDefinitions.Login.iShouldSeeOnTheLeft(Login.java:24)\r\n\tat ✽.Then I should see on the left(hjk.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});