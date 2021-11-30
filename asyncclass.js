async function user(){
    try {
      let identity = await axios.get ('https://jsonplaceholder.typicode.com/users')

      document.getElementById("name").innerHTML = "Name: " + identity.data[1].name;
      document.getElementById("username").innerHTML = "Username: " + identity.data[1].username;
      document.getElementById("email").innerHTML = "Email: " + identity.data[1].email;
      document.getElementById("address").innerHTML = "Street: " + identity.data[1].address.street; 
      document.getElementById("address2").innerHTML = "Suit: " + identity.data[1].address.suite;
      document.getElementById("address3").innerHTML = "City: " + identity.data[1].address.city;
      document.getElementById("address4").innerHTML = "Zipcode: " + identity.data[1].address.zipcode;
      document.getElementById("address5").innerHTML = "Lat: " + identity.data[1].address.geo.lat;
      document.getElementById("address6").innerHTML = "lng: " + identity.data[1].address.geo.lng;
      document.getElementById("phone").innerHTML = "Phone: " + identity.data[1].phone;
      document.getElementById("website").innerHTML = "Website: " + identity.data[1].website;
      document.getElementById("company").innerHTML = "Company name: " + identity.data[1].company.name;
      document.getElementById("company2").innerHTML = "CatchPhrase: " + identity.data[1].company.catchPhrase;
      document.getElementById("company3").innerHTML = "Company bs: " + identity.data[1].company.bs;


      document.getElementById("Name").innerHTML = "Name: " + identity.data[2].name
      document.getElementById("Username").innerHTML = "Username: " + identity.data[2].username
      document.getElementById("Email").innerHTML = "Email: " + identity.data[2].email
      document.getElementById("Address").innerHTML = "Street: " + identity.data[2].address.street 
      document.getElementById("Address2").innerHTML = "suit: " + identity.data[2].address.suite
      document.getElementById("Address3").innerHTML = "City: " + identity.data[2].address.city
      document.getElementById("Address4").innerHTML = "Zipcode: " + identity.data[2].address.zipcode
      document.getElementById("Address5").innerHTML = "Lat: " + identity.data[2].address.geo.lat
      document.getElementById("Address6").innerHTML = "lng: " + identity.data[2].address.geo.lng
      document.getElementById("Phone").innerHTML = "Phone: " + identity.data[2].phone
      document.getElementById("Website").innerHTML = "Website: " + identity.data[2].website
      document.getElementById("Company").innerHTML = "Company name: " +identity.data[2].company.name
      document.getElementById("Company2").innerHTML = "CatchPhrase: " + identity.data[2].company.catchPhrase
      document.getElementById("Company3").innerHTML = "Company bs: " + identity.data[2].company.bs


      document.getElementById("NAme").innerHTML = "Name: " + identity.data[3].name
      document.getElementById("USername").innerHTML = "Username: " + identity.data[3].username
      document.getElementById("EMail").innerHTML = "Email: " + identity.data[3].email
      document.getElementById("ADdress").innerHTML ="Street: " + identity.data[3].address.street 
      document.getElementById("ADdress2").innerHTML = "Suit:" + identity.data[3].address.suite
      document.getElementById("ADdress3").innerHTML = "City:" + identity.data[3].address.city
      document.getElementById("ADdress4").innerHTML = "Zipcode: " + identity.data[3].address.zipcode
      document.getElementById("ADdress5").innerHTML = "Lat: " + identity.data[3].address.geo.lat
      document.getElementById("ADdress6").innerHTML = "lng: " + identity.data[3].address.geo.lng
      document.getElementById("PHone").innerHTML = "phone: " + identity.data[3].phone
      document.getElementById("WEbsite").innerHTML = "Website: " + identity.data[3].websit
      document.getElementById("COmpany").innerHTML = "Company name: " +identity.data[3].company.name
      document.getElementById("COmpany2").innerHTML = "CatchPhrase: " + identity.data[3].company.catchPhrase
      document.getElementById("COmpany3").innerHTML = "Company bs: " + identity.data[3].company.bs


      document.getElementById("NAMe").innerHTML = "Name: " + identity.data[4].name
      document.getElementById("USErname").innerHTML = "Username: " + identity.data[4].username
      document.getElementById("EMAil").innerHTML = "Email: " + identity.data[4].email
      document.getElementById("ADDress").innerHTML = "Street: " + identity.data[4].address.street 
      document.getElementById("ADDress2").innerHTML = "Suit:" + identity.data[4].address.suite
      document.getElementById("ADDress3").innerHTML = "City:" + identity.data[4].address.city
      document.getElementById("ADDress4").innerHTML = "Zipcode: " + identity.data[4].address.zipcode
      document.getElementById("ADDress5").innerHTML = "Lat: " + identity.data[4].address.geo.lat
      document.getElementById("ADDress6").innerHTML = "lng: " + identity.data[4].address.geo.lng
      document.getElementById("PHOne").innerHTML = "phone: " + identity.data[4].phone
      document.getElementById("WEBsite").innerHTML = "Website: " + identity.data[4].website
      document.getElementById("COMpany").innerHTML = "Company name: " +identity.data[4].company.name
      document.getElementById("COMpany2").innerHTML = "CatchPhrase: " + identity.data[4].company.catchPhrase
      document.getElementById("COMpany3").innerHTML = "Company bs: " + identity.data[4].company.bs


      document.getElementById("NAME").innerHTML = "Name: " + identity.data[5].name
      document.getElementById("USERname").innerHTML = "Username: " + identity.data[5].username
      document.getElementById("EMAIl").innerHTML = "Email: " + identity.data[5].email
      document.getElementById("ADDRess").innerHTML = "Street: " + identity.data[5].address.street 
      document.getElementById("ADDRess2").innerHTML = "Suit:" + identity.data[5].address.suite
      document.getElementById("ADDRess3").innerHTML = "City:" + identity.data[5].address.city
      document.getElementById("ADDRess4").innerHTML = "Zipcode: " + identity.data[5].address.zipcode
      document.getElementById("ADDRess5").innerHTML = "Lat: " + identity.data[5].address.geo.lat
      document.getElementById("ADDRess6").innerHTML = "lng: " + identity.data[5].address.geo.lng
      document.getElementById("PHONe").innerHTML = "phone: " + identity.data[5].phone
      document.getElementById("WEBSite").innerHTML = "Website: " + identity.data[5].website
      document.getElementById("COMPany").innerHTML = "Company name: " +identity.data[5].company.name
      document.getElementById("COMPany2").innerHTML = "CatchPhrase: " + identity.data[5].company.catchPhrase
      document.getElementById("COMPany3").innerHTML = "Company bs: " + identity.data[5].company.bs


      document.getElementById("nAME").innerHTML = "Name: " + identity.data[6].name
      document.getElementById("uSERname").innerHTML = "Username: " + identity.data[6].username
      document.getElementById("eMAIl").innerHTML = "Email: " + identity.data[6].email
      document.getElementById("aDDRess").innerHTML = "Street: " + identity.data[6].address.street 
      document.getElementById("aDDRess2").innerHTML = "Suit:" + identity.data[6].address.suite
      document.getElementById("aDDRess3").innerHTML = "City: " + identity.data[6].address.city
      document.getElementById("aDDRess4").innerHTML = "Zipcode: " + identity.data[6].address.zipcode
      document.getElementById("aDDRess5").innerHTML = "Lat: " + identity.data[6].address.geo.lat
      document.getElementById("aDDRess6").innerHTML = "Lng: " + identity.data[6].address.geo.lng
      document.getElementById("pHONe").innerHTML = "Phone: " + identity.data[6].phone
      document.getElementById("wEBSite").innerHTML = "Website: " + identity.data[6].website
      document.getElementById("cOMPany").innerHTML = "Company name: " +identity.data[6].company.name
      document.getElementById("cOMPany2").innerHTML = "CatchPhrase: " + identity.data[6].company.catchPhrase
      document.getElementById("cOMPany3").innerHTML = "Company bs: " + identity.data[6].company.bs

    }
      catch (err){
          console.error (err)
      }
     
    }
    user()

    