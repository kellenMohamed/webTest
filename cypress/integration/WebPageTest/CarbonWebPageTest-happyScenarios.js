describe('Validate Carbon Footprint Calculator website', () => {

    it('Validate Texts inside Carbon Footprint Calculator page', () => {
      cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
      cy.url().should('eq', 'https://www3.epa.gov/carbon-footprint-calculator/')
      cy.wait(2000)
      cy.get('.site-name > a > span').should('be.visible')
      cy.get('.page-title').should('have.text','Carbon Footprint Calculator')
      cy.get('.left-form > h1').should('have.text','What is your carbon footprint?')
      cy.get('#house-image').should('be.visible')
      cy.get('.left-form > h2').should('have.text',"Take a few minutes to find out with EPA's Household Carbon Footprint Calculator.")
      cy.contains('About')
      cy.get('ul > :nth-child(1) > span').should('be.visible')
      cy.get('ul > :nth-child(2) > span').should('be.visible')
      cy.get('ul > :nth-child(3) > span').should('be.visible')
      cy.contains('How To')
      cy.get('#copy-driven-content > :nth-child(2) > ul > :nth-child(1)').should('be.visible')
      cy.get('#copy-driven-content > :nth-child(2) > ul > :nth-child(2)').should('be.visible')
      cy.contains('Download')
      cy.get('#copy-driven-content > :nth-child(3) > ul > li').should('be.visible')
      cy.get('.region-footer').should('be.visible')
    })

    it('Validate Household Carbon Footprint Calculator page - HOME ENERGY', () => {
      cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
      cy.get('#ppl-in-household-input').click()
      cy.get('#ppl-in-household-input').should('be.visible').type('99')
      cy.get('#zip-code-input').click()
      cy.get('#zip-code-input').type('22044')
      cy.get('#get-started').click()
      cy.contains('Home Energy')
      cy.wait(2000)
      cy.get('#primaryHeatingSource').select('Natural Gas')
      cy.get('#naturalGasTextInput').should('be.visible').type('18')
      cy.get('.naturalGas > .inner-container > .green-lb-total > span').should('have.text','2,418')
      cy.get('.naturalGas > .inner-container > .green-lb-total').should('have.contain','lbs.')
      cy.get('#electricityTextInput').should('be.visible').type('10')
      cy.get('#electricitySelectInput').select('kWh')
      cy.get('.electricity > .inner-container > .green-lb-total > span').should('have.text','130')
      cy.get('#electricityGreenTextInput').type('52')
      cy.get('.electricity > .inner-container > .green-lb-total > span').should('have.text','63')
      cy.get('.electricity > .inner-container > .green-lb-total').should('have.contain','lbs.')
      cy.get('#fuelTextInput').type('33')
      cy.get('.fuel > .inner-container > .green-lb-total > span').should('have.text','2,227')
      cy.get('.fuel > .inner-container > .green-lb-total').should('have.contain','lbs.')
      cy.get('#propaneTextInput').type('888')
      cy.get('.propane > .inner-container > .green-lb-total > span').should('have.text','53,625')
      cy.get('.propane > .inner-container > .green-lb-total').should('have.contain','lbs.')
      cy.get('#energyAC').type('123')
      cy.get('.bold > .ac-energy-co2-saved').should('have.text','134')
      cy.get('#energyHeat').type('12')
      cy.get('.bold > .heat-energy-co2-saved').should('have.text','549')
      cy.get('#lightsToReplace').type('123')
      cy.get('.bold > .lightEnergyCo2Saved').should('have.text','4,382')
      cy.get('#pwrMgmtSelect').select('Already Done')
      cy.get('.bold > .computerPwrCo2Saved').should('have.text','116')
      cy.get('#increaseGreenInput').type('12')
      cy.get('.bold > .increaseGreenPwrCo2Saved').should('have.text','16')
      cy.get('#coldWaterSelect').select('Will Do')
      cy.get('#loadsPerWeek').type('10')
      cy.get('.bold > .coldWaterCo2Saved').should('have.text','539')
      cy.get('#AirDrySelect').select('Already Done')
      cy.get('#percentageAirDrySelect').select('50% of my Laundry')
      cy.get('.bold > .airDryCo2Saved').should('have.text','415')
      cy.get('#fridgeSelect').select('Will Do')
      cy.get('.bold > .fridgeDollarsSaved').should('have.text','38')
      cy.get('.bold > .fridgeCo2Saved').should('have.text','348')
      cy.get('#furnaceSelect').select('Will Not Do')
      cy.get('.bold > .furnaceCo2Saved').should('have.text','0')
      cy.get('#windowSelect').select('Already Done')
      cy.get('.bold > .windowCo2Saved').should('have.text','2,947')
      cy.get('#to-transportation').should('have.text','Continue to Transportation')
      cy.get('#to-transportation').click()
      cy.get('#transportation-emissions > header').should('have.text','\n                        [-]  Your Current Emissions from Transportation\n                        \n                    ')
      cy.get('#info-car-emissions').click()
    })

    it('Validate Buttons redirect EPA home page', () => {
      cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
      cy.get('.size-2of5 > .pipeline > :nth-child(1) > a').click()
      cy.get('.site-logo__svg').should('be.visible')
      //cy.contains('Driving Toward a Cleaner Future')
      cy.contains('U.S. Environmental Protection Agency')
      cy.wait(1000)
      cy.get('.tns-nav-active').click()
      cy.get('[data-nav="1"]').click()
      //cy.contains('One Year of Accomplishments Under the Bipartisan Infrastructure Law')
      cy.get('[data-nav="2"]').click()
      cy.contains('Investing in Community Air Pollution Monitoring')
      cy.get('[data-nav="3"]').click()
      //cy.contains('Making Electric School Buses the American Standard')
      cy.get('#zipcode').click()
       cy.get('#zipcode').should('be.visible').type('2')
       cy.get('#zipcode').should('be.visible').type('2')
       cy.get('#zipcode').should('be.visible').type('0')
       cy.get('#zipcode').should('be.visible').type('4')
       cy.get('#zipcode').should('be.visible').type('4')
       cy.get('#form-content > .usa-button').click()
       cy.wait(2000)
       cy.get('#myenvlogo').should('be.visible')
       cy.contains('MyMap')
       cy.contains('MyAir')
       cy.contains('MyWater')
       cy.contains('MyEnergy')
       cy.contains('MyHealth')
       cy.contains('MyClimate')
       cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .iconText').click()
       cy.wait(4000)
       cy.get('[title="Go to the MyEnvironment water page"]').click()
       cy.wait(4000)
       cy.get('#mapFrame').should('be.visible')
    })

    it('Validate Buttons redirect Privacy and Security Notice page', () => {
      cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
      cy.get('.size-2of5 > .pipeline > :nth-child(2) > a').click()
      cy.get('.site-logo__svg').should('be.visible')
      // Follow command failed because the title is wrong
      // Error: expected <h1.page-title> to have text Privacy and Security Notice, but the text was \n Privacy and Security Notice\n
      cy.get('.page-title').should('have.text','\n  Privacy and Security Notice\n')
      cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ul > :nth-child(1) > a').click()
    })

    it('Validate Buttons redirect Accessibility page', () => {
      cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
      cy.get('.size-2of5 > .pipeline > :nth-child(3) > a').click()
      cy.get('.site-logo__svg').should('be.visible')
      // Follow command failed because the title is wrong
      // Error: expected '<h1.page-title>' to have text 'Section 508: Accessibility', but the text was '\n  Section 508: Accessibility\n'
      cy.get('.page-title').should('have.text','\n  Section 508: Accessibility\n')
    })

    it('Validate Buttons redirect Career page', () => {
      cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
      cy.get('.size-2of5 > .pipeline > :nth-child(1) > a').click()
      cy.get(':nth-child(4) > .l-sidebar__sidebar > .box > .box__image-link > .box__image').should('be.visible')
      cy.get('.box__content > :nth-child(3) > .usa-button').click()
      cy.get('.l-constrain > [data-nav="1"]').click()
      cy.contains('Apply Today')
    })

})



