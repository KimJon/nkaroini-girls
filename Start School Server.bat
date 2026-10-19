@echo off
title Nkaroni Girls Senior School - Web Server
echo ========================================================
echo   NKARONI GIRLS SENIOR SCHOOL
echo   Receipt & Fee Structure Local Server
echo ========================================================
echo.
echo Starting server on http://localhost:3000 ...
start "" http://localhost:3000
node "%~dp0server.js"
pause
