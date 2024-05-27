getParameter = (key) => {
    address = window.location.search; //url de la ventana actual 
    //Objeto de tipo URLSearchParams
    parameterList = new URLSearchParams(address); 
    //Regresa el valor del parámetro “key”
    return parameterList.get(key);
  }