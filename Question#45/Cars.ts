interface Cars {
    builter: string;
    model: string;
    [key: string]: any;
  }
  
  function builtcar(builter: string, model: string, ...args: any[]): Cars {
    const car: Cars = { builter, model };
    args.forEach((arg, index) => {
        
      if (index % 2 == 0) {
        car[args[index]] = args[index + 1];
      }
    });
    return car;
  }
  
  const myCar = builtcar('Ford', 'Transit',"Color",'Black',"silincer","exhaust");
  console.log(myCar);
  