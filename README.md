# 2021_22_project-2

## Introduction
This is a project for Hackathon 2021 Sami Shamoon Beer Sheva College for Engineering

The "CodoGlyph" game we are developing is suitable for ages 5-99 who are interested in acquiring a basic knowledge of programming languages.
The system will include design and implementation of a computerized game site, which delivers educational and learning content of software languages (C, Python, X86asm) in a stress-free and fun environment.
There are 3 different types of users: regular user, premium user, and administrator.



## How to use the database steps:

1. Download and install Docker Desktop.

2. When you first install the Docker Desktop application, it will
   tell you to go and download WSL2 and set as a default and download
   a Linux kernel. Those addtions are to insure that the Docker Desktop
   application works and behaves as it should be.

3. Download and install the Node.js application.

4. in the files you've downloaded from the Git, there is a PowerShell
   script. In order to run it you need to open up cmd or PowerShell.
   and in the window type the line:
   "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass"
   and then, use the cd command to go to path where the files from Git
   can be found

5. After using the cd command to get to the files, type "runmongo"
   and press the tab key, and run the line. This allows Docker to run
   a container with the latest version of MongoDB with it.

6. After the container is installed, and is running, cd into the folder Database
   and type the command "npm i"

7. After the node modules are installed install another one with the command
   "npm i --save nodemailer" in order that the E-mail functionality to work

8. When nodemailer is installed, type the command "npm run start"
   to start the Database, and voilla! You're ready to get users and play!


## Languages Used In The Project
* HTML
* CSS
* JavaScript

## Technology
* mongoDB
* Flexbox layout system

## Contributors 
* Alon Yehuda Levi
* Ram Rahamim Eliyahu
* Vladislav Golobin
* Amit Yoshkovich
