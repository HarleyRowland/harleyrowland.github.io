/*
  Geolocator Javascript Lib v.1.2.9
  (c) 2014-2015 Onur Yildirim (onur@cutepilot.com)
  https://github.com/onury/geolocator
  MIT License
*/
var geolocator=function(){function m(a,b,f){function d(b,a){f&&c.parentNode&&c.parentNode.removeChild(c);"function"===typeof b&&b(a)}var c=document.createElement("script");c.async=!0;c.readyState?c.onreadystatechange=function(a){if("loaded"===c.readyState||"complete"===c.readyState)c.onreadystatechange=null,d(b)}:c.onload=function(a){d(b)};c.onerror=function(b){b="Could not load source at "+String(a).replace(/\?.*$/,"");d(g,Error(b))};c.src=a;document.getElementsByTagName("head")[0].appendChild(c)}
function p(a){function b(){geolocator.__glcb&&delete geolocator.__glcb;google.load("maps","3.18",{other_params:"",callback:a})}void 0!==window.google&&void 0!==google.maps?a&&a():void 0!==window.google&&void 0!==google.loader?b():(geolocator.__glcb=b,m("https://www.google.com/jsapi?callback=geolocator.__glcb"))}function u(a,b,f){var d,c,e;(a=document.getElementById(a))?(d=new google.maps.Map(a,b),c=new google.maps.Marker({position:b.center,map:d}),e=new google.maps.InfoWindow,e.setContent(f),google.maps.event.addListener(c,
"click",function(){e.open(d,c)}),geolocator.location.map={canvas:a,map:d,options:b,marker:c,infoWindow:e}):geolocator.location.map=null}function v(a,b){(new google.maps.Geocoder).geocode({latLng:a},function(a,d){d===google.maps.GeocoderStatus.OK&&b&&b(a)})}function q(a){var b=new google.maps.LatLng(a.latitude,a.longitude);v(b,function(a){if(a&&0<a.length){var d,c,e={},g=a[0].address_components;for(d=0;d<g.length;d+=1)c=g[d],c.types&&0<c.types.length&&(e[c.types[0]]=c.long_name,e[c.types[0]+"_s"]=
c.short_name);geolocator.location.formattedAddress=a[0].formatted_address;geolocator.location.address={street:e.route||"",neighborhood:e.neighborhood||"",town:e.sublocality||"",city:e.locality||"",region:e.administrative_area_level_1||"",country:e.country||"",countryCode:e.country_s||"",postalCode:e.postal_code||"",streetNumber:e.street_number||""}}u(l,{zoom:null===geolocator.location.ipGeoSource?14:7,center:b,mapTypeId:"roadmap"},a[0].formatted_address);h&&h.call(null,geolocator.location)})}function w(a,
b){function f(b){var c=!0===a?0:"number"===typeof a?a:-1;0<=c?geolocator.locateByIP(h,g,c,l):g&&g(b)}function d(a){geolocator.location={ipGeoSource:null,coords:a.coords,timestamp:(new Date).getTime()};q(geolocator.location.coords)}function c(a){f(a)}geolocator.location=null;navigator.geolocation?navigator.geolocation.getCurrentPosition(d,c,b):f(Error("geolocation is not supported."))}function r(a,b){switch(a){case 0:geolocator.location={coords:{latitude:b.latitude,longitude:b.longitude},address:{city:b.city,
country:b.country_name,countryCode:b.country_code,region:b.region_name}};break;case 1:geolocator.location={coords:{latitude:b.geoplugin_latitude,longitude:b.geoplugin_longitude},address:{city:b.geoplugin_city,country:b.geoplugin_countryName,countryCode:b.geoplugin_countryCode,region:b.geoplugin_regionName}};break;case 2:geolocator.location={coords:{latitude:b.lat,longitude:b.lon},address:{city:b.city,country:"",countryCode:b.country,region:""}}}geolocator.location&&(geolocator.location.coords.accuracy=
null,geolocator.location.coords.altitude=null,geolocator.location.coords.altitudeAccuracy=null,geolocator.location.coords.heading=null,geolocator.location.coords.speed=null,geolocator.location.timestamp=(new Date).getTime(),geolocator.location.ipGeoSource=n[a],geolocator.location.ipGeoSource.data=b)}function t(a){var b=!1;geolocator.location=null;delete geolocator.__ipscb;p(function(){2===k?void 0!==window.Geo&&(r(k,window.Geo),delete window.Geo,b=!0):void 0!==a&&"string"!==typeof a&&(r(k,a),b=!0);
!0===b?q(geolocator.location.coords):g&&g(Error(a||"Could not get location."))})}var h,g,l,n=[{url:"//freegeoip.net/json/",cbParam:"callback"},{url:"//www.geoplugin.net/json.gp",cbParam:"jsoncallback"},{url:"//geoiplookup.wikimedia.org/",cbParam:""}],k;return{location:null,locate:function(a,b,f,d,c){h=a;g=b;l=c;p(function(){w(f,d)})},locateByIP:function(a,b,f,d){k="number"!==typeof f||0>f||f>=n.length?1:f;h=a;g=b;l=d;geolocator.__ipscb=t;a=n[k];void 0===a.cbParam||null===a.cbParam||""===a.cbParam?
m(a.url,t,!0):m(a.url+"?"+a.cbParam+"=geolocator.__ipscb",void 0,!0)},isPositionError:function(a){return"[object PositionError]"===Object.prototype.toString.call(a)}}}();


var profile = {
	userNum: null,
	togglePlay: null,
	locationLive: null,
};

onmessage = function(e) {
  console.log("e.data[0].", e.data[0]);

  if(e.data[0].userNum) profile.userNum = e.data[0].userNum;
  if(e.data[0].togglePlay) profile.togglePlay = e.data[0].togglePlay;
  if(e.data[0].locationLive) profile.locationLive = e.data[0].locationLive;
  console.log("profile in message", profile);
}

function locationLive(){
	while(profile == null){}
	    	console.log("in no if")
	    	console.log(profile);
    if(profile && profile.hasOwnProperty("locationLive") && profile.hasOwnProperty("togglePlay")) {
    	console.log("in first if")
        if (profile.togglePlay == "on") {

        	    	console.log("in second if")


            function success(position) {
            	console.log(position);
                var RESTReturn = "undefined";

                function cb(data) {
                    RESTReturn = data;
                }

                sendRESTRequest("http://raptor.kent.ac.uk:3000/locationUpdate?userNum=" + profile.userNum + "&longitude=" + position.coords.longitude + "&latitude=" + position.coords.longitude, "POST", cb);

                while (RESTReturn == "undefined") {
                }

                if (RESTReturn == true) {
                    console.log("location update successful");
                }
                else {
                }
            }

            function error() {
            	console.log("error");
            }
            console.log(JSON.parseprofile.geolocator);
			var html5Options = { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 };
           	geolocator.locate(success, error, true, html5Options, null);
        }
    }
}

function startWorker() {
    setTimeout("locationLive()",1);
}

startWorker();