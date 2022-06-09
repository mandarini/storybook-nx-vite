describe('web: App component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=app--primary&args=title;rating;flag:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to App!');
    });
});
