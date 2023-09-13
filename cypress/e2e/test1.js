describe("default Economy", () => {
    before(() => {
        
        cy.visit("https://www.almosafer.com/en");
    });
    it(" Economy ", () => {

        cy.get('.cta__saudi').click()
        cy.get('.sc-jWxkHr')
            .should('include.text', "Economy");

    });
});


describe("date Tomorrow", () => {
    before(() => {

        cy.visit("https://www.almosafer.com/en");
    });

    it(" tomorrow", () => {

        cy.get('.cta__saudi').click({ force: true });
        cy.get('[data-testid="FlightSearchBox__FromDateButton"]').click({ force: true });

        const today = new Date();
        today.setDate(today.getDate() + 1); 
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
        const day = today.getDate().toString().padStart(2, '0'); 
        const tomorrow = `${year}-${month}-${day}`;
        
        cy.get('.hyEhCr .DayPicker-Day--selected,:hover', { timeout: 20000 }).each(($el) => {
          
            const dateText = $el.text().trim();

           
            if (dateText === tomorrow) {
                
                const bgColor = $el.css('background-color');
                expect(bgColor).to.equal('rgb(2, 100, 122)'); 
            }
        });
    });
});




describe("date day after Tomorrow", () => {
    before(() => {

        cy.visit("https://www.almosafer.com/en");
    });

    it("date day after Tomorrow", () => {
      
        cy.get('.cta__saudi').click({ force: true });
        cy.get('[data-testid="FlightSearchBox__ToDateButton"]').click({ force: true });

        
        const today = new Date();
        today.setDate(today.getDate() + 2); 
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
        const day = today.getDate().toString().padStart(2, '0'); 
        const twoDaysFromToday = `${year}-${month}-${day}`;

        cy.get('.jlvzzg .DayPicker-Day--selected, .jlvzzg .DayPicker-Day--selected:hover', { timeout: 20000 }).each(($el) => {
           
            const dateText = $el.text().trim();

           
            if (dateText === twoDaysFromToday) {
               
                const bgColor = $el.css('background-color'); 
                expect(bgColor).to.equal('rgb(2, 100, 122)');
            }
        });


    });





});









