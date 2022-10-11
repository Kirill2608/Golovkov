///<reference types= "Cypress"/>
import { faker } from '@faker-js/faker';
//import { method } from 'cypress/types/bluebird';
//import { ceil } from 'cypress/types/lodash';
 
// describe('Api OAuth', () => {
 
// const accessToken = 'Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50';
// const generateEmail = faker.internet.email();

// it('create user', () => {
// cy.request({
//      method: 'POST',
//      url: 'https://gorest.co.in/public/v1/users',
//      headers:{
//               Authorization: accessToken
//             },
//       body:{
//             name:"T1est N1ame",
//             gender:"male",
//             email: generateEmail,
//             status:"active"
//             }      
// }).then(function(response){
//    expect(response).to.have.property('status', 201); 
// })
// })
// })


//Практика 
/* 
describe('booking process', () => {
it('create user', () => {
cy.request({
     method: 'POST',
     url: 'https://restful-booker.herokuapp.com/booking',
     body: {
        firstname : "Jim",
        lastname : "Brown",
        totalprice : 111,
        depositpaid : true,
        bookingdates : {
            checkin : "2018-01-01",
            checkout : "2019-01-01"
        },
        additionalneeds : "Breakfast"
    }
}).then((response) => {
  expect(response).to.have.property('status', 200);
  expect(response.body).to.have.any.keys('bookingid');
  const bookingid = response.body.bookingid;
  cy.request({
  method: 'POST',
     url: 'https://restful-booker.herokuapp.com/auth',
     body: {
      username : "admin",
      password : "password123"
  }
}).then((responseAuth) =>{
  const token = responseAuth.body.token;
  cy.request({
  method: 'PUT',
     url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,
     body: {
      firstname : "Jim",
      lastname : "Brown",
      totalprice : 111,
      depositpaid : true,
      bookingdates : {
          checkin : "2018-01-02",
          checkout : "2019-01-02"
      },
      additionalneeds : "Breakfast"
  },
     headers: {
      Cookie: `token=${token}`
     }
    });
});
});
});
})
*/

//Домашка

/*
Comments:
1. body выноси в константы так будет легче вопринимать 
 body:{name:"Tenali Ramakrishna", gender:"male", email:generateEmail, status:"active"},
2. Где интерполяция (литерал) `https://gorest.co.in/public/v2/users/`+client_id, => `https://gorest.co.in/public/v2/users/${client_id}`
3. Cылку на сервер можно вынести в константу => const baseUrl]= https://gorest.co.in/public/v2/users/
а путь передавать будет как то так `${baseUrl}\path`
3. Отлично.
*/

describe('gorest.co.in', () => {
    const generateEmail = faker.internet.email();
    const emailNew = faker.internet.email();
    const token = 'ed09bec150da77b3cd8fa34ad030ca2eeb802dd64bd96d5db2a0e1213f6f275e'
    let client_id = '';
    let emailOld = '';
    
    
    it('POST create user', () =>{
        cy.request({
            method:'POST', 
            url:'https://gorest.co.in/public/v2/users', 
            body:{name:"Tenali Ramakrishna", gender:"male", email:generateEmail, status:"active"},
            headers:{Authorization:'Bearer '+token}})
            .then((response) => {
        const {id, email, status} = response.body;
        client_id=id;
        emailOld=email;
        expect(response).to.have.property('status', 201)
        expect(response.body).to.have.all.keys('id','name', 'email', 'gender', 'status')       
        })
    });

    it('check user create', () => {
        cy.request({
            method:'GET',
            url:`https://gorest.co.in/public/v2/users/`+client_id,
            headers:{Authorization:'Bearer '+token}})
            .then((response) => {
            expect(client_id).to.have.equal(response.body.id)
            expect(response).to.have.property('status', 200)
        })
    });

    it('PATCH update user', () => {
        cy.request({
            method:'PATCH', 
            url:`https://gorest.co.in/public/v2/users/`+client_id, 
            body:{name:"Tenali Ramakrishna",email:emailNew, status:"active"},
            headers:{Authorization:'Bearer '+token}})
            .then((response) => {
        const {email:emailNew} = response.body
        expect(emailNew).to.not.equal(emailOld)
        expect(response).to.have.property('status', 200);
        expect(response.body).to.have.all.keys('id','name', 'email', 'gender', 'status');      
        })
    });
    
    it('DELETE user', () => {
        cy.request({
            method:'DELETE',
            url:`https://gorest.co.in/public/v2/users/`+client_id,
            headers:{Authorization:'Bearer '+token}})
            .then((response) => {
            expect(response).to.have.property('status', 204);
        })
    });

    it('check delete user', () => {
        cy.request({
            method:'GET',
            url:`https://gorest.co.in/public/v2/users/`,
            headers:{Authorization:'Bearer '+token}})
            .then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body[0].id).to.not.equal(client_id)
        })
    })
})
