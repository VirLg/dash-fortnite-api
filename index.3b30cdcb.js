const t=new{DashFortnite:class{async fetchApi(t){return await fetch("https://fortnite-api.com/v1/playlists/")}}}.DashFortnite;console.log(t);document.querySelector(".search-form").addEventListener("submit",(async function(e){e.preventDefault();e.target.elements.search.value;const n=await t.fetchApi();console.log(n)}));
//# sourceMappingURL=index.3b30cdcb.js.map
