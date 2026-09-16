/* Supplemental MKT Colorado attraction search entries. Loaded after mkt-search.js. */
(function(){
 if(!window.MKT_SEARCH_INDEX) window.MKT_SEARCH_INDEX=[];
 const additions=[
  {name:'Elitch Gardens Theme & Water Park',town:'Denver',type:'place',category:'Amusement Parks, Water Parks, Family & Kids',keywords:'theme park amusement park roller coaster rides water park waterslides family kids thrill downtown denver',url:'denver.html#elitch-gardens-theme-water-park'},
  {name:'Lakeside Amusement Park',town:'Denver',type:'place',category:'Amusement Parks, History, Family & Kids',keywords:'amusement park historic rides roller coaster kiddies playland lake family kids classic',url:'denver.html#lakeside-amusement-park'},
  {name:'Water World',town:'Federal Heights',type:'place',category:'Water Parks, Family & Kids, Water Activities',keywords:'water park waterslides water coaster wave pool swimming family kids summit canyon',url:'federal-heights.html#water-world'},
  {name:'Bishop Castle',town:'Rye',type:'place',category:'Unique Attractions, History, Architecture, Family & Kids',keywords:'castle roadside attraction architecture stone iron towers bridges dragon unusual unique southern colorado rye',url:'rye.html#bishop-castle',cost:'free'},
  {name:'Lake Isabel',town:'Rye',type:'place',category:'Outdoors, Water Activities, Family & Kids',keywords:'lake fishing paddling hiking scenery san isabel wet mountains outdoors family',url:'rye.html#lake-isabel'},
  {name:'The Springs Resort',town:'Pagosa Springs',type:'place',category:'Hot Springs, Wellness, Water Activities',keywords:'hot springs geothermal pools soaking mineral water wellness san juan river pagosa springs',url:'pagosa-springs.html#the-springs-resort'},
  {name:'Chimney Rock National Monument',town:'Pagosa Springs',type:'place',category:'National Monument, History, Archaeology',keywords:'national monument ancestral pueblo archaeology history chimney rock ruins cultural site pagosa springs',url:'pagosa-springs.html#chimney-rock-national-monument'},
  {name:'Ouray Hot Springs Pool',town:'Ouray',type:'place',category:'Hot Springs, Family & Kids, Water Activities',keywords:'hot springs geothermal pool soaking waterslides family kids ouray san juan mountains',url:'ouray.html#ouray-hot-springs-pool'},
  {name:'Box Cañon Falls Park',town:'Ouray',type:'place',category:'Waterfalls, Outdoors, Scenic Attractions',keywords:'waterfall canyon gorge hiking scenic nature box canon box canyon falls ouray',url:'ouray.html#box-canon-falls-park'},
  {name:'Indian Hot Springs',town:'Idaho Springs',type:'place',category:'Hot Springs, Wellness, History',keywords:'hot springs geothermal caves mineral pool private baths soaking spa idaho springs',url:'idaho-springs.html#indian-hot-springs'},
  {name:'Argo Mill & Tunnel',town:'Idaho Springs',type:'place',category:'Mine Tours, History, Unique Attractions',keywords:'mine mining gold mill tunnel historic tour colorado gold rush idaho springs',url:'idaho-springs.html#argo-mill-and-tunnel'},
  {name:'Mount Princeton Hot Springs Resort',town:'Nathrop',type:'place',category:'Hot Springs, Water Activities, Family & Kids',keywords:'hot springs geothermal pools creekside soaking water slide family nathrop buena vista salida',url:'nathrop.html#mount-princeton-hot-springs-resort'},
  {name:'Browns Canyon National Monument',town:'Nathrop',type:'place',category:'National Monument, Outdoors, Water Activities',keywords:'national monument rafting whitewater arkansas river hiking fishing camping wildlife scenic canyon nathrop buena vista salida',url:'nathrop.html#browns-canyon-national-monument',cost:'free'},
  {name:'Strawberry Park Hot Springs',town:'Steamboat Springs',type:'place',category:'Hot Springs, Wellness, Scenic Attractions',keywords:'hot springs geothermal natural pools soaking mountain forest steamboat springs winter',url:'steamboat-springs.html#strawberry-park-hot-springs'},
  {name:'The Howler Alpine Slide',town:'Steamboat Springs',type:'place',category:'Alpine Slides, Family & Kids, Adventure',keywords:'alpine slide mountain slide chairlift scenic ride family kids summer howelsen hill steamboat springs',url:'steamboat-springs.html#howler-alpine-slide'}
 ];
 const existing=new Set(window.MKT_SEARCH_INDEX.map(x=>x.url));
 additions.forEach(x=>{if(!existing.has(x.url))window.MKT_SEARCH_INDEX.push(x)});
})();