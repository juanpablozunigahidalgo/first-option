let tshirtw=110;
let tshirtv=0.22;
let fleecew=220;
let fleecev=0.44;
let lwindjw=180;
let lwindjv=0.36;
let wpjackw=300;
let wpjackv=0.6;
let tjackw=800;
let tjackv=1.6;
let fllegsw=150;
let fllegsv=0.3;
let flsleevsw=150;
let flsleevsv=0.3;
let lwpantw=150;
let lwpantv=0.3;
let skiw=560;
let skiv=1.2;
let shortw=100;
let shortv=0.2;
let boxerw=100;
let boxerv=0.2;
let socketw=100;
let socketv=0.2;
let glovew=180;
let glovev=0.36;
let shoew=800;
let shoev=1.5;
let capw=100;
let capv=0.2;
let feetw=100;
let feetv=0.2;
let neckw=30;
let neckv=0.06;
let towellw=100;
let towellv=0.2;
let helmw=220;
let helmv=2;
let multitw=130;
let multitv=0.09;
let stubew=130;
let stubev=0.25;
let pumpw=50;
let pumpv=0.09;
let sgooglew=30;
let sgooglev=0.1;
let tubefixw=30;
let tubefixv=0.05;
let leverw=30;
let leverv=0.05;
let tentw=1800;
let tentv=3.5;
let matresw=500;
let matresv=1;
let slepbw=900;
let slepbv=4;
let pillow=60;
let pillov=0.2;
let headw=70;
let headv=0.3;
let floorinsw=200;
let floorinsv=0.5;
let soapw=20;
let soapv=0.016;
let tbrushw=10;
let tbrushv=0.012;
let tpastew=30;
let tpastev=0.108;
let suncw=50;
let suncv=0.04;
let potw=260;
let potv=1.8;
let cupw=100;
let cupv=0.2;
let utensilw=100;
let utensilv=0.05;
let stovew=300;
let stovev=0.3;
let canisterw=200;
let canisterv=1;
let igniterw=30;
let igniterv=0.05;
let petrolw=200;
let petrolv=0.2;
let detergentw=20;
let detergentv=0.05;
let dishcw=10;
let dishcv=0.05;
let docuw=150;
let docuv=0.2;
let phonew=180;
let phonev=0.098;
let chargerw=40;
let chargerv=0.027;
let pbankw=350;
let pbankv=0.063;
let pannierw=500;
let pannierv=23;
let lightfirstaidw=200;
let lightfirstaidv=0.2;
let equipment;
let equipment3;


equipment = function() {
        var dayslength = document.getElementById('triplenght').value;
        var campop = document.getElementById('camping').value;
        var rain = document.getElementById('rain').value;
        var tempmin = document.getElementById('mintemp').value;
        //clothing
        var tshirtq;
        var fleeceq;
        var lwindjq;
        var wpjackq;
        var tjackq;
        var fllegsq;
        var flsleevsq;
        var lwpantq;
        var skiq;
        var shortq;
        var boxerq;
        var socketq;
        var gloveq;
        var shoeq;
        var capq;
        var feetq;
        var neckq;
        var towellq;
        //bikestuff
        var helmq;
        var multitq;
        var stubeq;
        var pumpq;
        var sgoogleq;
        var tubefixq;
        var leverq;
        //camping
        var tentq;
        var matresq;
        var slepbq;
        var pilloq;
        var headq;
        var floorinsq;
        var potq;
        var cupq;
        var utensilq;
        var stoveq;
        var canisterq;
        var igniterq;
        var petrolq;
        var detergentq;
        var dishcq;
        var totalcampingw;
        var totalcampingv;
        //bodycare
        //documents
        //electronics
        //panniers
        var pannierq;
        //lets fix camping equipment
        if (campop >= 1 && dayslength >=2 ) {
          tentq=1;
          matresq=1;
          slepbq=1;
          pilloq=1;
          headq=1;
          floorinsq=1;
          potq=1;
          cupq=1;
          utensilq=1;
          stoveq=1;
          canisterq=1;
          igniterq=1;
          petrolq=1;
          detergentq=1;
          dishcq=1;
          soapq=1;
          tbrushq=1;
          tpasteq=1;

          document.getElementById("campinghead").innerHTML = "Camping Equipment";
          document.getElementById("tentcd").innerHTML = "Tent";
          document.getElementById("tentq").innerHTML = tentq + " [unit]";
          document.getElementById("tenttw").innerHTML = ((tentq*tentw)/1000) + " [kg]";
          document.getElementById("tenttv").innerHTML = (tentq*tentv) + " [lt]";
          document.getElementById("matrescd").innerHTML = "Air mattress";
          document.getElementById("matresq").innerHTML = matresq + " [unit]";
          document.getElementById("matrestw").innerHTML = ((matresq*matresw)/1000) + " [kg]";
          document.getElementById("matrestv").innerHTML = (matresq*matresv) + " [lt]";
          document.getElementById("slepbcd").innerHTML = "Sleeping bag";
          document.getElementById("slepbq").innerHTML = slepbq + " [unit]";
          document.getElementById("slepbtw").innerHTML = ((slepbq*slepbw)/1000) + " [kg]";
          document.getElementById("slepbtv").innerHTML = (slepbq*slepbv) + " [lt]";
          document.getElementById("pillocd").innerHTML = "Air pillow";
          document.getElementById("pilloq").innerHTML = pilloq + " [unit]";
          document.getElementById("pillotw").innerHTML = ((pilloq*pillow)/1000) + " [kg]";
          document.getElementById("pillotv").innerHTML = (pilloq*pillov) + " [lt]";
          document.getElementById("headcd").innerHTML = "Head lamp";
          document.getElementById("headq").innerHTML = headq + " [unit]";
          document.getElementById("headtw").innerHTML = ((headq*headw)/1000) + " [kg]";
          document.getElementById("headtv").innerHTML = (headq*headv) + " [lt]";
          document.getElementById("floorinscd").innerHTML = "Floor insulator";
          document.getElementById("floorinsq").innerHTML = floorinsq + " [unit]";
          document.getElementById("floorinstw").innerHTML = ((floorinsq*floorinsw)/1000) + " [kg]";
          document.getElementById("floorinstv").innerHTML = (floorinsq*floorinsv) + " [lt]";
          document.getElementById("potcd").innerHTML = "Pot camping";
          document.getElementById("potq").innerHTML = potq + " [unit]";
          document.getElementById("pottw").innerHTML = ((potq*potw)/1000) + " [kg]";
          document.getElementById("pottv").innerHTML = (potq*potv) + " [lt]";
          document.getElementById("cupcd").innerHTML = "Cup camping";
          document.getElementById("cupq").innerHTML = cupq + " [unit]";
          document.getElementById("cuptw").innerHTML = ((cupq*cupw)/1000) + " [kg]";
          document.getElementById("cuptv").innerHTML = (cupq*cupv) + " [lt]";
          document.getElementById("utensilcd").innerHTML = "Utensil camping";
          document.getElementById("utensilq").innerHTML = utensilq + " [unit]";
          document.getElementById("utensiltw").innerHTML = ((utensilq*utensilw)/1000) + " [kg]";
          document.getElementById("utensiltv").innerHTML = (utensilq*utensilv) + " [lt]";
          document.getElementById("stovecd").innerHTML = "Stove camping";
          document.getElementById("stoveq").innerHTML = stoveq + " [unit]";
          document.getElementById("stovetw").innerHTML = ((stoveq*stovew)/1000) + " [kg]";
          document.getElementById("stovetv").innerHTML = (stoveq*stovev) + " [lt]";
          document.getElementById("canistercd").innerHTML = "Canister gas";
          document.getElementById("canisterq").innerHTML = canisterq + " [unit]";
          document.getElementById("canistertw").innerHTML = ((canisterq*canisterw)/1000) + " [kg]";
          document.getElementById("canistertv").innerHTML = (stoveq*canisterv) + " [lt]";
          document.getElementById("ignitercd").innerHTML = "Igniter";
          document.getElementById("igniterq").innerHTML = igniterq + " [unit]";
          document.getElementById("ignitertw").innerHTML = ((igniterq*igniterw)/1000) + " [kg]";
          document.getElementById("ignitertv").innerHTML = (igniterq*igniterv) + " [lt]";
          document.getElementById("petrolcd").innerHTML = "Petrol bottle";
          document.getElementById("petrolq").innerHTML = petrolq + " [unit]";
          document.getElementById("petroltw").innerHTML = ((petrolq*petrolw)/1000) + " [kg]";
          document.getElementById("petroltv").innerHTML = (petrolq*petrolv) + " [lt]";
          document.getElementById("detergentcd").innerHTML = "Detergent";
          document.getElementById("detergentq").innerHTML = detergentq + " [unit]";
          document.getElementById("detergenttw").innerHTML = ((detergentq*detergentw)/1000) + " [kg]";
          document.getElementById("detergenttv").innerHTML = (detergentq*detergentv) + " [lt]";
          document.getElementById("dishccd").innerHTML = "Dish sponge";
          document.getElementById("dishcq").innerHTML = dishcq + " [unit]";
          document.getElementById("dishctw").innerHTML = ((dishcq*dishcw)/1000) + " [kg]";
          document.getElementById("dishctv").innerHTML = (dishcq*dishcv) + " [lt]";
          document.getElementById("bodycare").innerHTML = "Body care";
          document.getElementById("soapcd").innerHTML = "Soap";
          document.getElementById("soapq").innerHTML = soapq + " [unit]";
          document.getElementById("soaptw").innerHTML = ((soapq*soapw)/1000) + " [kg]";
          document.getElementById("soaptv").innerHTML = (soapq*soapv) + " [lt]";
          document.getElementById("tbrushcd").innerHTML = "Tooth brush";
          document.getElementById("tbrushq").innerHTML = tbrushq + " [unit]";
          document.getElementById("tbrushtw").innerHTML = ((tbrushq*tbrushw)/1000) + " [kg]";
          document.getElementById("tbrushtv").innerHTML = (tbrushq*tbrushv) + " [lt]";
          document.getElementById("tpastecd").innerHTML = "Tooth paste";
          document.getElementById("tpasteq").innerHTML = tpasteq + " [unit]";
          document.getElementById("tpastetw").innerHTML = ((tpasteq*tpastew)/1000) + " [kg]";
          document.getElementById("tpastetv").innerHTML = (tpasteq*tpastev) + " [lt]";



        } else {
          tentq=0;
          matresq=0;
          slepbq=0;
          pilloq=0;
          headq=0;
          floorinsq=0;
          potq=0;
          cupq=0;
          utensilq=0;
          stoveq=0;
          canisterq=0;
          igniterq=0;
          petrolq=0;
          detergentq=0;
          dishcq=0;
          soapq=0;
          tbrushq=0;
          tpasteq=0;
          document.getElementById("campinghead").innerHTML = "";
          document.getElementById("tentcd").innerHTML = "" ;
          document.getElementById("tentq").innerHTML = "";
          document.getElementById("tenttw").innerHTML = "";
          document.getElementById("tenttv").innerHTML = "";
          document.getElementById("matrescd").innerHTML = "";
          document.getElementById("matresq").innerHTML = "";
          document.getElementById("matrestw").innerHTML ="" ;
          document.getElementById("matrestv").innerHTML = "";
          document.getElementById("slepbcd").innerHTML = "";
          document.getElementById("slepbq").innerHTML = "";
          document.getElementById("slepbtw").innerHTML = "";
          document.getElementById("slepbtv").innerHTML = "";
          document.getElementById("pillocd").innerHTML = "";
          document.getElementById("pilloq").innerHTML = "";
          document.getElementById("pillotw").innerHTML = "";
          document.getElementById("pillotv").innerHTML = "";
          document.getElementById("headcd").innerHTML = "";
          document.getElementById("headq").innerHTML = "";
          document.getElementById("headtw").innerHTML = "";
          document.getElementById("headtv").innerHTML = "";
          document.getElementById("floorinscd").innerHTML = "";
          document.getElementById("floorinsq").innerHTML = "";
          document.getElementById("floorinstw").innerHTML = "";
          document.getElementById("floorinstv").innerHTML = "";
          document.getElementById("potcd").innerHTML = "";
          document.getElementById("potq").innerHTML = "";
          document.getElementById("pottw").innerHTML = "";
          document.getElementById("pottv").innerHTML = "";
          document.getElementById("cupcd").innerHTML = "";
          document.getElementById("cupq").innerHTML = "";
          document.getElementById("cuptw").innerHTML = "";
          document.getElementById("cuptv").innerHTML = "";
          document.getElementById("utensilcd").innerHTML = "";
          document.getElementById("utensilq").innerHTML = "";
          document.getElementById("utensiltw").innerHTML = "";
          document.getElementById("utensiltv").innerHTML = "";
          document.getElementById("stovecd").innerHTML = "";
          document.getElementById("stoveq").innerHTML = "";
          document.getElementById("stovetw").innerHTML = "";
          document.getElementById("stovetv").innerHTML = "";
          document.getElementById("canistercd").innerHTML = "";
          document.getElementById("canisterq").innerHTML = "";
          document.getElementById("canistertw").innerHTML = "";
          document.getElementById("canistertv").innerHTML = "";
          document.getElementById("ignitercd").innerHTML = "";
          document.getElementById("igniterq").innerHTML = "";
          document.getElementById("ignitertw").innerHTML = "";
          document.getElementById("ignitertv").innerHTML = "";
          document.getElementById("petrolcd").innerHTML = "";
          document.getElementById("petrolq").innerHTML = "";
          document.getElementById("petroltw").innerHTML = "";
          document.getElementById("petroltv").innerHTML = "";
          document.getElementById("detergentcd").innerHTML = "";
          document.getElementById("detergentq").innerHTML = "";
          document.getElementById("detergenttw").innerHTML = "";
          document.getElementById("detergenttv").innerHTML = "";
          document.getElementById("dishccd").innerHTML = "";
          document.getElementById("dishcq").innerHTML = "";
          document.getElementById("dishctw").innerHTML = "";
          document.getElementById("dishctv").innerHTML = "";
          document.getElementById("bodycare").innerHTML = "";
          document.getElementById("soapcd").innerHTML = "";
          document.getElementById("soapq").innerHTML = "";
          document.getElementById("soaptw").innerHTML = "";
          document.getElementById("soaptv").innerHTML = "";
          document.getElementById("tbrushcd").innerHTML = "";
          document.getElementById("tbrushq").innerHTML = "";
          document.getElementById("tbrushtw").innerHTML = "";
          document.getElementById("tbrushtv").innerHTML = "";
          document.getElementById("tpastecd").innerHTML = "";
          document.getElementById("tpasteq").innerHTML = "";
          document.getElementById("tpastetw").innerHTML = "";
          document.getElementById("tpastetv").innerHTML = "";
        };
        totalcampingv = ((tentq*tentv)+(matresq*matresv)+(slepbq*slepbv)+(pilloq*pillov)+(headq*headv)+(floorinsq*floorinsv)+(potq*potv)+(cupq*cupv)+(utensilq*utensilv)+(stoveq*stovev)+(canisterq*canisterv)+(igniterq*igniterv)+(petrolq*petrolv)+(detergentq*detergentv)+(dishcq*dishcv));
        totalcampingw = ((tentq*tentw)+(matresq*matresw)+(slepbq*slepbw)+(pilloq*pillow)+(headq*headw)+(floorinsq*floorinsw)+(potq*potw)+(cupq*cupw)+(utensilq*utensilw)+(stoveq*stovew)+(canisterq*canisterw)+(igniterq*igniterw)+(petrolq*petrolw)+(detergentq*detergentw)+(dishcq*dishcw))/1000;
        document.getElementById("weight").innerHTML = totalcampingw;
};

equipment2 = function () {
  var helmq;
  var multitq;
  var stubeq;
  var pumpq;
  var sgoogleq;
  var tubefixq;
  var leverq;

 var docuq;
 var phoneq;
 var chargerq;
 var pbankq;
 var soapq;
 var tbrushq;
 var tpasteq;
 var suncq;
 var lightfirstaidq;
 var dayslength = document.getElementById('triplenght').value;
 var campop = document.getElementById('camping').value;
 var rain = document.getElementById('rain').value;
 var tempmin = document.getElementById('mintemp').value;
 if ( dayslength >= 1 ){
       docuq=1;
       phoneq=1;
       lightfirstaidq=1;
       document.getElementById("docuhead").innerHTML = "Documents";
       document.getElementById("docucd").innerHTML = "Wallet";
       document.getElementById("docuq").innerHTML = docuq + " [unit]";
       document.getElementById("docutw").innerHTML = ((docuq*docuw)/1000) + " [kg]";
       document.getElementById("docutv").innerHTML = (docuq*docuv) + " [lt]";
       document.getElementById("electronics").innerHTML = "Electronic devices.";
       document.getElementById("phonecd").innerHTML = "Phone";
       document.getElementById("phoneq").innerHTML = phoneq + " [unit]";
       document.getElementById("phonetw").innerHTML = ((phoneq*phonew)/1000) + " [kg]";
       document.getElementById("phonetv").innerHTML = (phoneq*phonev) + " [lt]";
       document.getElementById("health").innerHTML = "Health";
       document.getElementById("lightfirstaidcd").innerHTML = "Light first aid kit";
       document.getElementById("lightfirstaidq").innerHTML = lightfirstaidq + " [unit]";
       document.getElementById("lightfirstaidtw").innerHTML = ((lightfirstaidq*lightfirstaidw)/1000) + " [kg]";
       document.getElementById("lightfirstaidtv").innerHTML = (lightfirstaidq*lightfirstaidv) + " [lt]";
     } else {
       docuq=0;
       phoneq=0;
       lightfirstaidq=0;
       document.getElementById("docuhead").innerHTML = "";
       document.getElementById("electronics").innerHTML = "";
       document.getElementById("docucd").innerHTML = "";
       document.getElementById("docuq").innerHTML = "";
       document.getElementById("docutw").innerHTML = "";
       document.getElementById("docutv").innerHTML = "";
       document.getElementById("phonecd").innerHTML = "";
       document.getElementById("phoneq").innerHTML = "";
       document.getElementById("phonetw").innerHTML = "";
       document.getElementById("phonetv").innerHTML = "";
       document.getElementById("health").innerHTML = "";
       document.getElementById("lightfirstaidcd").innerHTML = "";
       document.getElementById("lightfirstaidq").innerHTML = "";
       document.getElementById("lightfirstaidtw").innerHTML = "";
       document.getElementById("lightfirstaidtv").innerHTML = "";
     };

  if (dayslength >= 2){
        chargerq=1;
        pbankq=1;
        document.getElementById("chargercd").innerHTML = "Phone charger";
        document.getElementById("chargerq").innerHTML = chargerq + " [unit]";
        document.getElementById("chargertw").innerHTML = ((chargerq*chargerw)/1000) + " [kg]";
        document.getElementById("chargertv").innerHTML = (chargerq*chargerv) + " [lt]";
        document.getElementById("pbankcd").innerHTML = "Power Bank";
        document.getElementById("pbankq").innerHTML = pbankq + " [unit]";
        document.getElementById("pbanktw").innerHTML = ((pbankq*pbankw)/1000) + " [kg]";
        document.getElementById("pbanktv").innerHTML = (pbankq*pbankv) + " [lt]";
      } else {
        document.getElementById("chargercd").innerHTML = "";
        document.getElementById("chargerq").innerHTML = "";
        document.getElementById("chargertw").innerHTML = "";
        document.getElementById("chargertv").innerHTML = "";
        document.getElementById("pbankcd").innerHTML = "";
        document.getElementById("pbankq").innerHTML = "";
        document.getElementById("pbanktw").innerHTML = "";
        document.getElementById("pbanktv").innerHTML = "";
      };
  if ( (dayslength >= 1) && (tempmin >= 10) ){
    suncq=1;
    document.getElementById("sunccd").innerHTML = "Sunscreen";
    document.getElementById("suncq").innerHTML = suncq + " [unit]";
    document.getElementById("sunctw").innerHTML = ((suncq*suncw)/1000) + " [kg]";
    document.getElementById("sunctv").innerHTML = (suncq*suncv) + " [lt]";
  } else {
    document.getElementById("sunccd").innerHTML = "";
    document.getElementById("suncq").innerHTML = "";
    document.getElementById("sunctw").innerHTML = "";
    document.getElementById("sunctv").innerHTML = "";
  };

};
