(this.webpackJsonpvideo_search=this.webpackJsonpvideo_search||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),l=a(6),s=a.n(l),o=a(17),u=a(2),m=a(3),p=a(5),d=a(4),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value)},e.onInputChange=function(t){e.setState({value:t.target.value})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"10px"},className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Search:"),r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onInputChange})))))}}]),a}(r.a.Component),h=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){if(!this.props.play)return r.a.createElement("div",{style:{height:"315px"}},r.a.createElement("div",{style:{height:"100%"},className:"ui segment"},r.a.createElement("div",{className:"ui active dimmer"},r.a.createElement("div",{className:"ui medium text loader"},"Loading")),r.a.createElement("p",null),r.a.createElement("p",null)));var e=this.props.play,t=e.id,a=e.snippet;return r.a.createElement("div",null,r.a.createElement("iframe",{title:"hi",width:"560",height:"315",style:{border:0},src:"https://www.youtube.com/embed/"+t.videoId}),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h3",{className:"ui header"},a.title),r.a.createElement("div",{className:"ui fitted divider"}),r.a.createElement("p",null,a.description)))}}]),a}(r.a.Component),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.video.snippet;return r.a.createElement("div",{className:"video-card",onClick:function(){e.props.onVideoClick(e.props.video)}},r.a.createElement("div",null,r.a.createElement("img",{alt:t.description,src:t.thumbnails.default.url})),r.a.createElement("div",null,r.a.createElement("h5",{style:{margin:0,fontSize:"16px"}},t.title),r.a.createElement("h6",{style:{margin:0,fontSize:"14px"}},t.channelTitle),r.a.createElement("p",null,t.publishedAt.substr(0,10))))}}]),a}(r.a.Component),y=(a(25),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.videos.map((function(t,a){return r.a.createElement(f,{key:a,video:t,onVideoClick:e.props.onVideoClick})}));return r.a.createElement("div",{className:"video-section"},r.a.createElement(h,{play:this.props.play}),r.a.createElement("div",{className:"video-list"},t))}}]),a}(r.a.Component)),b=a(18),E=a.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),g=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],play:null},e.searchVideos=function(){var t=Object(o.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"AIzaSyAxLCwtJNXsWPaOExbTDJgzhaQw9xlz2yU",t.next=3,E.get("/search",{params:{q:a,part:"snippet",maxResults:5,key:"AIzaSyAxLCwtJNXsWPaOExbTDJgzhaQw9xlz2yU"}});case 3:n=t.sent,e.setState({videos:n.data.items,play:n.data.items[0]});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoClick=function(t){e.setState({play:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.searchVideos("python free")}},{key:"render",value:function(){return console.log(this.state.videos),r.a.createElement("div",{className:"ui container"},r.a.createElement("div",null,r.a.createElement(v,{onSubmit:this.searchVideos}),r.a.createElement(y,{videos:this.state.videos,play:this.state.play,onVideoClick:this.onVideoClick})))}}]),a}(r.a.Component);c.a.render(r.a.createElement(g,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.517956bf.chunk.js.map