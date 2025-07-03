let ville= "paris"
let apiKey="126afd21959569a7350166283306d135"
let url=`https://api.openweathermap.org/data/2.5/forecast?q=Havre&appid=126afd21959569a7350166283306d135 `

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById ("ttInfos").innerHTML+=`
 
        <div class="parentInfos" id="ttInfos">
            <div class="infos" id="temperature">
 
            </div>

              <div class="infosPasTresUtiles" id="ciel"> 
                <p class="InfosPasTresUtiles" id="km">         </p>
                <p class="InfosPasTresUtiles" id="update" >  </p>
              </div>

        </div>
        <div class="containerJour"> 
<div class="semaine"> 
<p class="pSemaine" id="iconLundi"  id="degre"             >Lundi <br> 07/07/2025    </p>
</div>
<div class="semaine"> 
    <p class="pSemaine"id="iconMardi" id="degre"           >Mardi <br> 08/08/2025 </p>
</div>
<div class="semaine"> 
    <p class="pSemaine"id="iconMercredi"  id="degre"      >Mercredi <br> 09/08/2025 </p>
</div>
<div class="semaine"> 
    <p class="pSemaine" id="iconJeudi" id="degre"       >Jeudi <br> 10/08/2025  </p>
</div>
<div class="semaine"> 
    <p class="pSemaine" id="iconVendredi" id="degre"    >Vendredi <br> 11/08/2025 </p>
</div>
<div class="semaine"> 
    <p class="pSemaine" id="iconSamedi"  id="degre"        >Samedi <br> 12/08/2025  </p>
</div>
<div class="semaine"> 
    <p class="pSemaine" id="iconDimanche" id="degre"      >Dimanche <br> 13/08/2025  </p>
</div>






        </div>






              `




  });



