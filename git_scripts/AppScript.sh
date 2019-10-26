#!/bin/bash

projectDir="../$(cd -P -- "$(dirname -- "$0")" && pwd -P)"

function join { local IFS="$1"; shift; echo "$*"; }

while :
do

  echo "Would you like to update your branch (a), merge your branch with the master (b), update your local directory (c), start expo (d), or exit (exit)?"
  read option

  if test "$option" == "a"
  then
    cd $projectDir
    echo "What is your commit message?"
    read -a commitM
    git checkout EthanBranch
    git add -A
    git commit -m "$(join " " ${commitM[@]})"
    git push origin EthanBranch
  fi

  if test "$option" == "b"
  then
    cd $projectDir
    git checkout master
    git pull origin master
    git merge EthanBranch
    git push origin master
    git checkout EthanBranch
  fi

  if test "$option" == "c"
  then
    cd $projectDir
    git pull origin master
  fi

  if test "$option" == "d"
  then
    cd $projectDir
    cd ./source_code_app
    expo start
  fi

  if test "$option" == "exit"
  then
    break
    exit
  fi

done
