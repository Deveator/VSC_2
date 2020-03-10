class LoginPage{

    getUsernameString(){
        return cy.get("input[name='username']");
    }

    

    getUsernameString(){
        return cy.get("input[name='username']");
    }

    getPasswordString(){
        return cy.get("input[name='password']");
    }

}

export default LoginPage;