## Akan Name Generator

### Description
In this project, using a simple web application that calculates the day of the week a user was born and assigns them an Akan name based on their gender. Akan names come from Ghanaian culture, where children are named based on the day they were born.
We shall start by familiarizing ourselves with Akan names that have been included in the project

Akan Names

Day   	   Male Name       Female Name
Sunday	   Kwasi	           Akosua
Monday	   Kwadwo	        Adwoa
Tuesday    Kwabena	        Abenaa
Wednesday  Kwaku	           Akua
Thursday   Yaw	              Yaa
Friday	   Kofi	           Afua
Saturday   Kwame	           Ama

#### Author
{Priscilla}

This web application has been created and founded by Priscilla Mbuthia
a learner at Moringa School.It has been crafted using technologies such as HTML,CSS and Javascript to bring about format,styling and interactivity of the webpage.
Installation:Download the webpage for gh- page and run the webpage

#### Project Setup

### Live site
You can have a look of the setup through this link:

### Installation guide
-Download the github
-Download or clone the resporitory
-Open index.html in browser

#### Behaviour Division Development
BDD is a refinement of Test-Driven Development (TDD) that encourages collaboration among all project stakeholders to define the desired behavior of a system before development begins. It involves writing specifications in a natural language format that is understandable by both technical and non-technical team members.
In this project the input taken is in form of birthdate and gender to provide output of the corresponding Akan name.
The following steps are required;
-Retrieve the user’s input (day, month, year, and gender)
-Validate the input to ensure:
   The day is between 1 and 31
   The month is between 1 and 12
   A gender has been selected
-Calculate the day of the week using the formula:

d=[(CC/4 -2*CC-1) + (5*YY/4) +(26*(MM+1)/10)+DD] mod 7

Where:
CC is the first two digits of the year (e.g., for 1989, CC = 19)
YY is the last two digits of the year (e.g., for 1989, YY = 89)
MM is the month
DD is the day of the month
mod is the modulus operator %

Match the calculated day to the corresponding Akan name.
Display the result on the webpage.

#### Technologies used
-HTML
-CSS
-JAVASCRIPT

#### Contact Information
You can reach out to me through github @priscillambuthia-coder

#### License
{MIT License}

Copyright (c) [2026] -Priscilla
