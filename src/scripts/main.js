const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//     let zipCode = business.addressZipCode

//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}
//     ${business["addressStateCode"]}
//     ${zipCode}
//     </section>
//   `
//     outEl.innerHTML += "<hr/>"
// });


// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false

//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }

//     return inNewYork
//   })

//   console.log(newYorkBusinesses)

//   newYorkBusinesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//     `
//     outEl.innerHTML += "<hr/>"
//   });


//   const manufacturingBusinesses = businesses.filter(business => {
//       let manufacturing = false

//       if (business.companyIndustry === "Manufacturing"){
//           manufacturing = true
//       }
//       return manufacturing
//   })

//   console.log(manufacturingBusinesses)

//     manufacturingBusinesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//     `
//     outEl.innerHTML += "<hr/>"
//   });

outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
        return {

            "fullName": business.purchasingAgent.nameFirst + " " + business.purchasingAgent.nameLast,
            "company": business.companyName,
            "phoneNumber": business.phoneWork
        }
    }

)

console.log(agents)

agents.forEach(agent => {
    outEl.innerHTML += `<h2>${agent.fullName}</h2>
                        <section>${agent.company}<br>
                        ${agent.phoneNumber}
                        </section>`;
    outEl.innerHTML += "<hr/>";
});



// Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number