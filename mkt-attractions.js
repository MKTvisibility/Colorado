/* Supplemental MKT Colorado attraction search entries. Loaded after mkt-search.js. */
(function(){
 if(!window.MKT_SEARCH_INDEX) window.MKT_SEARCH_INDEX=[];
 const additions=[
  {name:'Elitch Gardens Theme & Water Park',town:'Denver',type:'place',category:'Amusement Parks, Water Parks, Family & Kids',keywords:'theme park amusement park roller coaster rides water park waterslides family kids thrill downtown denver',url:'denver.html#elitch-gardens-theme-water-park'},
  {name:'Lakeside Amusement Park',town:'Denver',type:'place',category:'Amusement Parks, History, Family & Kids',keywords:'amusement park historic rides roller coaster kiddies playland lake family kids classic',url:'denver.html#lakeside-amusement-park'},
  {name:'Water World',town:'Federal Heights',type:'place',category:'Water Parks, Family & Kids, Water Activities',keywords:'water park waterslides water coaster wave pool swimming family kids summit canyon',url:'federal-heights.html#water-world'},
  {name:'Bishop Castle',town:'Rye',type:'place',category:'Unique Attractions, History, Architecture, Family & Kids',keywords:'castle roadside attraction architecture stone iron towers bridges dragon unusual unique southern colorado rye',url:'rye.html#bishop-castle',cost:'free'},
  {name:'Lake Isabel',town:'Rye',type:'place',category:'Outdoors, Water Activities, Family & Kids',keywords:'lake fishing paddling hiking scenery san isabel wet mountains outdoors family',url:'rye.html#lake-isabel'}
 ];
 const existing=new Set(window.MKT_SEARCH_INDEX.map(x=>x.url));
 additions.forEach(x=>{if(!existing.has(x.url))window.MKT_SEARCH_INDEX.push(x)});
})();