describe('Blog app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const user = {
            name: 'Mauno Malmivaara',
            username: 'maukka',
            password: 'salasanam'
        }
        cy.request('POST', 'http://localhost:3003/api/users/', user)

        cy.visit('http://localhost:3000')
    })
  
    it('Login form is shown', function() {
        cy.contains('Blog App')
        cy.contains('Login').click()
        cy.contains('Username:')
        cy.contains('Password:')
    })

    describe('Login', function() {
        it('succeeds with correct credentials', function() {
            cy.contains('Login').click()
            cy.get('#username').type('maukka')
            cy.get('#password').type('salasanam')
            cy.get('#login-button').click()

            cy.contains('Logged in as Mauno Malmivaara')
        })
    
        it('fails with wrong credentials', function() {
            cy.contains('Login').click()
            cy.get('#username').type('maukka')
            cy.get('#password').type('wrong')
            cy.get('#login-button').click()

            cy.get('#notification').should('contain', 'Login failed: Incorrect credentials')

            cy.get('html').should('not.contain', 'Logged in as Mauno Malmivaara')
        })
    })

    describe('When logged in', function() {
        beforeEach(function() {
            cy.contains('Login').click()
            cy.get('#username').type('maukka')
            cy.get('#password').type('salasanam')
            cy.get('#login-button').click()
        })
        
        it('A blog can be created', function() {
            cy.contains('Add New Blog').click()
            cy.get('#BlogTitle').type('Cypress Title')
            cy.get('#BlogAuthor').type('Cypress Author')
            cy.get('#BlogUrl').type('www.cypressurl.com')
            cy.contains('Save Blog').click()
            cy.contains('Cypress Title')
        })

        describe('With a blog', function() {
            beforeEach(function() {
                cy.contains('Add New Blog').click()
                cy.get('#BlogTitle').type('Cypress Title')
                cy.get('#BlogAuthor').type('Cypress Author')
                cy.get('#BlogUrl').type('www.cypressurl.com')
                cy.contains('Save Blog').click()
            })

            it('A blog can be liked', function() {
                cy.contains('Show').click()
                cy.get('.blog-likes')
                    .contains('Like').click()
            })

            it('A blog can be removed', function() {
                cy.contains('Show').click()
                cy.contains('Remove').click()
                cy.on('window:confirm', (str) => {
                    expect(str).to.equal('Do you really want to delete "Cypress Title"?')
                    return true
                })
                cy.get('html').should('not.contain', 'Cypress Title')
            })
        })

        it('Blogs are in order by amount of likes', function () {
            //Add three blogs:
            for (let i = 1; i < 4; i++) {
                cy.contains('Add New Blog').click()
                cy.get('#BlogTitle').type('Cypress Title'.concat(' ', i))
                cy.get('#BlogAuthor').type('Cypress Author'.concat(' ', i))
                cy.get('#BlogUrl').type('www.cypressurl'.concat(i, '.com'))
                cy.contains('Save Blog').click()
                cy.contains('Cypress Title'.concat(' ', i))
            }
            //Like the third blog twice:
            cy.contains('All Blogs').parent()
                .contains('Cypress Title 3').parent()
                    .contains('Show').click()
            cy.contains('All Blogs').parent()
                .contains('Cypress Title 3').parent()
                    .contains('Like')
                        .click()
                        .click()

            //Like the second blog once:
            cy.contains('All Blogs').parent()
                .contains('Cypress Title 1').parent()
                    .contains('Show').click()
            cy.contains('All Blogs').parent()
                .contains('Cypress Title 1').parent()
                    .contains('Like')
                        .click()
        
            cy.reload()

            //Check that blogs are sorted by amount of likes:
            let strings = []
            cy.get('#blogs-listed').each(elements => {
                strings.push(elements.text())
            })
            cy.wrap(strings[0]).contains('Cypress Title 3')
            cy.wrap(strings[1]).contains('Cypress Title 1')
        })
    })

})