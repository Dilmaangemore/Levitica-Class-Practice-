      //old way 
      let school= new Object()
      school.name="Vidyasgar"
      school.location="Delhi"
      school.estd=1997;
      console.log(school)

      //new way

      let school2={
          name:"Vivekanand school",
          location:"Delhi",
          estd:"1998",
          20 : 10000,

          //including function in object

          displayInfo : function(){
              console.log("the value of 20 is "+school2[20] ); // the value of 20 is 10000
              console.log(`the value of 20 is ${school2['20']}`); // the value of 20 is 10000
              

          }
      }
      school2.displayInfo();

      // split
      console.log(`${school2.name.split(' ')[0]}`)