(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),o=a(9),i=a(6);var m=function(){return r.a.createElement("span",null,"About this page!")},l=a(11),u=a.n(l),v=a(25),p=a(26),d=a(27),E=a(31),f=a(32),g=a(28),y=a.n(g);a(56);var h=function(e){var t=e.year,a=e.title,n=e.summary,c=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"movie_data"},r.a.createElement("img",{src:c,alt:a,title:a}),r.a.createElement("h3",{className:"movie_title"},a),r.a.createElement("h5",{className:"movie_year"},t),r.a.createElement("ul",{className:"movie_genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180),"...")))},_=(a(57),function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoding:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoding:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(58);var b=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};var N=function(){return r.a.createElement(o.a,null,r.a.createElement(b,null),r.a.createElement(i.a,{path:"/",exact:!0,component:_}),r.a.createElement(i.a,{path:"/about",component:m}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cf431edc.chunk.js.map