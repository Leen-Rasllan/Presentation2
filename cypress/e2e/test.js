describe("Almosafer Flight Search Test", () => {
    before(() => {
      // Visit the Almosafer website
      cy.visit("https://www.almosafer.com/ar");
    });
  
    it("should have departure date set to today's date +1", () => {
        cy.get('.cta__saudi').click(); // You were missing parentheses after click
        const today = new Date();
        today.setDate(today.getDate() + 1);
        const tomorrow = today.toISOString().split('T')[0];
    
        // Check if the departure date input field value matches tomorrow's date
        cy.get('[data-testid="FlightSearchBox__FromDateButton"]').should('have.value', tomorrow); // You should use FromDateButton instead of ToDateButton
    });
   
    it("should have return date set to today's date +2", () => {
        // Calculate today's date +2 days
        const today = new Date();
        today.setDate(today.getDate() + 2);
        const dayAfterTomorrow = today.toISOString().split('T')[0];
        
        // Check if the return date input field value matches day after tomorrow's date
        cy.get('[data-testid="FlightSearchBox__ToDateButton"]').should('have.value', dayAfterTomorrow);
    });
    
    it("should have flight class set to economy by default", () => {
        // Check if the flight class input field has "economy" selected by default
        cy.get('.sc-jWxkHr').should('have.value', 'economy');
    });


    
    
    
    
   

    });