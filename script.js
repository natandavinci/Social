function toggleMode(){
  const html = document.documentElement

  if(html.classList.contains("light")){
html.classList.remove("light") 
} else {
   html.classList.add("light")
  
}
}
//obs: html.classlist.toggle("light") faz toda essa condicional!

//setAttribute precisa estudar
