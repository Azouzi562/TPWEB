<script>
function showcity(){

let nomVilleSelectionnee=document.getElementById("titi").value;
  let cities = document.getElementsByClassName("city");
  let l= cities.length;
  for(let i=0; i<l; i++){
  cities[i].style.display= "none"
  if(cities[i].id==nomVilleSelectionnee){
  cities[i].style.display= "block";
  }
  else{
  cities[i].style.display= " ";
  }
  }
  }
  
  
</script>