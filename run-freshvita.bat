@echo off
setlocal

set "JAVA_HOME=%~dp0.tools\jdk17\jdk-17.0.14+7"
set "MAVEN_HOME=%~dp0.tools\maven\apache-maven-3.9.15"

if exist "%JAVA_HOME%\bin\java.exe" (
    set "PATH=%JAVA_HOME%\bin;%PATH%"
)

if exist "%MAVEN_HOME%\bin\mvn.cmd" (
    set "PATH=%MAVEN_HOME%\bin;%PATH%"
)

echo Iniciando FreshVita en la red local...
echo Abre: http://localhost:8080
echo O desde otro dispositivo en la misma red: http://192.168.0.7:8080
call "%MAVEN_HOME%\bin\mvn.cmd" spring-boot:run

endlocal
