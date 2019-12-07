:start
@echo off
echo Copyright 2019 Evan Sonin
echo _________________________
set /P folder="What folder do you want this in? The folder must be in the Documents folder of the main user of the main drive, and it must contain "app" within it. "
echo You said your folder was %folder%!
set /P correct="Is this correct? Y/N "
if %correct%==Y (echo You said it was correct. Proceeding.)
if %correct%==N (echo You big dumb dumb! Now we gotta start over!)
if %correct%==N goto start
cd ../
cd Documents
cd %folder%
cd app
cd FBLA_app
set /P name="What's your name? Capital E!"
:repeatpoint:
set /P message="What should the commit message be? "
set /P task="What do you want to do? A: Add your branch, B: Merge with the master, E: Do A and B, C: Download new files (Use this when someone has deleted files), or D: Total sync? "
set /P clean="Would you like the program to run cleanly (Y), or show all tasks (N)? "
if %clean%==Y @echo off
if %clean%==N @echo on
if %task%==A (git checkout %name%Branch)
if %task%==A (git add -A)
if %task%==A (git commit -m "%message%")
if %task%==A (git push origin %name%Branch)
if %task%==B ( 
	git checkout master
	git pull origin master
	git merge %name%Branch
	git push origin master
	git checkout %name%Branch 
)
if %task%==C (
	git pull --allow-unrelated-histories

)
if %task%==D (
	git checkout %name%Branch
	git add -A
	git commit -m "%message%"
	git push origin %name%Branch
	git checkout master
	git pull origin master
	git merge %name%Branch
	git push origin master
	git checkout %name%Branch 
	git pull origin master
)
if %task%==E (
	git checkout %name%Branch
	git add -A
	git commit -m "%message%"
	git push origin %name%Branch
	git checkout master
	git pull origin master
	git merge %name%Branch
	git push origin master
	git checkout %name%Branch 
)
if %task%==F (
	cd source_code_app
	expo start
)
set /P repeat="Would you like to do another step? Y/N "
if %repeat% == Y goto repeatpoint
echo Task successful.
pause
