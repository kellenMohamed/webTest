# webTest
# Test Plan

# In this Sprint will be test EPA’s Carbon Footprint Calculator, for this, will be created:
# -> Automation API Test in Karate framework for each API field. TIME: 2 days
# 	Parameters for each field:
# 		* Max and Min values
# 		* Invalid Values, e.g., if field is number, send a character and special character.
# 		* Null value
# 		* EMpty Value
# 		* SQL Injection, e.g., SELECT * FROM table_name
# 		* XSS (Cross-Scripting), e.g. according https://owasp.org/www-community/attacks/xss/, <IMG SRC=j&#X41vascript:alert('test2')>
# -> Automation API Test in Karate framework for specific scenarios according business documentation. TIME: 2 days
# -> Performance Test in Gattling in side Karate Framework. TIME: 1 day
# -> Automation Frontend Test in Cypress. TIME: 4 days
# -> Smoke Testing to verify if the application is responsive and layout (colors and font)
# -> Documentation on Confluence. TIME: 1 day.

# *******  Execution *******  #
# Inside the project folder execute both commands below:
npm install
./node_modules/.bin/cypress open


# ******* BUGS *******  #
1. Follow command failed because the title is wrong in Accessibility page
   // Error: pected <h1.page-title> to have text Section 508: Accessibility, but the text was \n Section 508: Accessibility\n

2. Follow command failed because the title is wrong in Privacy and Security Notice
   // Error: expected '<h1.page-title>' to have text 'Section 508: Accessibility', but the text was '\n  Section 508: Accessibility\n'

3. Needs to Update the value kWh for kwh because only the letter in the middle is in uppercase (field #electricitySelectInput from Home Energy page)

4. Page https://www3.epa.gov/carbon-footprint-calculator/ ::::: 
   By automation the field #ppl-in-household-input is not allowing many INPUT number size such as 999999999999999999999999999999999. But in the web is allowing.
   Needs to be investigated and Needs to define the field size (Min and Max)

5. Follow command failed because the title is wrong in Transportation page:
   Expected <header> to have text [-] Your Current Emissions from Transportation, but the text was **\n [-] Your Current Emissions from Transportation\n \n **

# ******* NOTE: Important to verify each calculation formule to match the values. *******  #


