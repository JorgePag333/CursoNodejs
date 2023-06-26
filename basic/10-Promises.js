/**
 * Promesas
 */

//then catch

const getData = (error) => {
  return new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          nombre: "Jorge",
          Apellido: "Pages",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos ");
    }
  });
};

const getData2 = (error) => {
    return new Promise((resolve, reject) => {
      if (!error) {
        setTimeout(() => {
          resolve({
            nombre: "Rocio",
            Apellido: "DeMartino",
          });
        }, 3000);
      } else {
        reject("No pudimos obtener los datos 2 ");
      }
    });
  };
console.log('Inicio');
getData(false)
  .then((data) => {
    console.log(data);
    return getData2(true);
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('Final');
/*
const getData = () => new Promise( (resolve,reject) =>{

})
*/
const suma = new Promise((resolve, reject) => {
    if (true) {
        resolve()
    } else {
        reject( )
    }
})




//async-await

const getData3 = (error) => {
    return new Promise((resolve, reject) => {
      if (!error) {
        setTimeout(() => {
          resolve({
            nombre: "Jorge",
            Apellido: "Pages",
          });
        }, 3000);
      } else {
        reject("No pudimos obtener los datos ");
      }
    });
  };
  const getData4 = (error) => {
    return new Promise((resolve, reject) => {
      if (!error) {
        setTimeout(() => {
          resolve({
            nombre: "Rocio",
            Apellido: "DeMartino",
          });
        }, 3000);
      } else {
        reject("No pudimos obtener los datos 2 ");
      }
    });
  };

  const main =async () =>{
    
        try{
            let resultado =  await getData3(false)
            let resultado2 =  await getData4(true)
            console.log(resultado);
            console.log(resultado2);
        }catch(e){
            console.log(e);
        }
        
  }
  main()