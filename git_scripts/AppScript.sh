#!/bin/bash

projectDir="$(cd -P -- "$(dirname -- "$0")" && pwd -P)"
declare -a validUsers=( "Ethan" "Evan" )

function dirChange {
  cd $projectDir
  cd ../
  if test "$1" == "run"
  then
    cd ./source_code_app
  fi
}

function join {
  local IFS="$1"; shift; echo "$*";
}

while :
do
  echo "Who are you?"
  read user
  for (( i=0; i<${#validUsers[@]}; i++ ));
  do
    if test "$user" == "${validUsers[$i]}"
    then
      branch="$user""Branch"
      echo "Your branch is $branch"
      echo
      break 3
    fi
  done
  echo "Invalid user."
done

while :
do

  echo "Would you like to update your branch (a), merge your branch with the master (b), update your local directory (c), start expo (d), or exit (exit)?"
  read option

  if test "$option" == "a"
  then
    dirChange
    echo "What is your commit message?"
    read -a commitM
    git checkout EthanBranch
    git add -A
    git commit -m "$(join " " ${commitM[@]})"
    git push origin EthanBranch
  fi

  if test "$option" == "b"
  then
    dirChange
    git checkout master
    git pull origin master --allow-unrelated-histories
    git merge EthanBranch
    git push origin master
    git checkout EthanBranch
  fi

  if test "$option" == "c"
  then
    dirChange
    git pull origin master --allow-unrelated-histories
  fi

  if test "$option" == "d"
  then
    dirChange run
    expo start
  fi

  if test "$option" == "exit"
  then
    break
    exit
  fi

done
