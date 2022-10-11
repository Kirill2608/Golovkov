/*
describe('re',() => {
    it('api', () => {
        cy.request('GET', 'https://dummy.restapiexample.com/')
        .its('status').should('equal', 200);
    });

    it('api-1', () => {
        cy.request('GET', 'https://dummy.restapiexample.com/')
        .its('body')
        .its('data')
        .should('not.be.empty')
        .should('deep.include','{"id":1,"employee_name":"Tiger Nixon","employee_salary":320800,"employee_age":61,"profile_image":""}');
    });

    it('api-2', () => {
        const body = {"name":"test","salary":"123","age":"23"};
        cy.request('POST', 'https://dummy.restapiexample.com/api/v1/create', body)
        .its('body')
        .its('message').should('contain', 'Record')
        .its('message').should('equal', 'Successfully! Record has been added.')
        
    });

    it.only('api-3', () => {
        const body = {
            "id": 2,
            "category": {
              "id": 5,
              "name": "doggie"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 6,
                "name": "string"
              }
            ],
            "status": "available"
          };
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', body)
        .its('status').should('equal', 200)
        //.its('body').should('not.be.empty')
        .then((response) => {
            //const resp = response.body
            //cy.log(resp)
            expect(response.body).to.have.property
            expect(response.body).to.not.be.null
            //expect(response.body).to.have.length(4)
            //expect(response.body).to.have.property('status')
            //expect(response.body.category).to.deep.equal({"id": 5, "name": "doggie"})


            
        })

    });

    it('api-3', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    .then((resp) => {
        cy.log(resp.body[0].category)
    })
    .its('status').should('equal', 200)
    })
})

*/

// Домашка

const id = 9;
describe('STORE', () => {
    it('POST /order', () => {
        const body = {
            "id":id,
            "petId": 8,
            "quantity": 10,
            "shipDate": "2022-10-06T11:01:50.040+0000",
            "status": "200",
            "complete": true
          }
        cy.request('POST', 'https://petstore.swagger.io/v2/store/order', body).then((response) => {
            expect(response.status).have.to.equal(200)
            expect(response.body.id).to.eq(id)
        })
    });

    it('GET /order', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/store/order/9').then((response) => {
            expect(response.status).have.to.equal(200)
            expect(response.body.id).to.eq(id)
            expect(response.body.petId).to.eq(8)
            expect(response.body.quantity).to.eq(10)
            expect(response.body.shipDate).to.eq('2022-10-06T11:01:50.040+0000')
        })
    });

    it('DELETE /order', () => {
        cy.request('DELETE', 'https://petstore.swagger.io/v2/store/order/9').then((response) => {
            const {code, message} = response.body
            expect(code).to.have.eq(200)
            expect(message).have.eq("9")
        })
    });
    
    /*
    Comments:
    
    
    1)  expect(response.body).to.contain.key(
          "totvs"
          //   "sold",
          //   "string",
          //   "null",
          //   "avaliable",
          //   "pending",
          //   "available",
          //   "not available",
          //    "connector_up",
          //   "Available",
          //   "soldout"
        );
        
        и еще если ты делаешь проверку на 
    expect(response.body).to.have.all.keys. то тебе надо все и поля передать, иначе падает
    
     expect(response.body).to.have.any.key("totvs");
    
  */  

    it('GET /inventory', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory').then((response) => {
            expect(response.body).to.have.all.keys('totvs','sold','Ready','string','avaliable','pending','available','connector_up','Available')
            //expect(response.body).to.have.any.keys("totvs")
        })
    })    
})
