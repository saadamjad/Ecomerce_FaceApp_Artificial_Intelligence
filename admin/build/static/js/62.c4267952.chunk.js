(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1010:function(e,t){},1012:function(e,t){},1035:function(e,t){},1146:function(e,t,a){"use strict";a.r(t);var n=a(256),o=a.n(n),r=a(257),c=a(86),l=a(87),s=a(89),i=a(88),u=a(90),m=a(1),g=a.n(m),d=a(827),h=a(522),f=a(523),p=a(509),b=a(549),v=a(510),E=a(444),P=a(450),R=a(258);a(996);function j(e){var t=e.rooms,a="/rooms/".concat(t.id),n="room/update/".concat(t.id);return g.a.createElement("tr",{key:t.id.toString()},g.a.createElement("th",{scope:"row"},g.a.createElement(d.a,{to:a},t.id)),g.a.createElement("td",null,g.a.createElement(d.a,{to:a},t.room_no)),g.a.createElement("td",null,1==t.status?"Enable":"Disable"),g.a.createElement("td",null,g.a.createElement(d.a,{to:n},g.a.createElement("span",{class:"cui-pencil","aria-hidden":"true"}))))}var k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).getAllRooms=function(){var e=Object(r.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.x)(t);case 2:n=e.sent,console.log(n,"response"),200==n.status?a.setState({isLoaded:!0,items:n.data.result,totalPages:n.data.pages,totalRecords:n.data.count}):404==n.status&&console.warn(n.data.message);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onPageChanged=function(e){var t=e.currentPage;e.totalPages,e.pageLimit;a.getAllRooms(t),console.log(e)},a.state={error:null,isLoaded:!1,items:[],totalPages:0,totalRecords:0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getAllRooms(1)}},{key:"render",value:function(){var e,t=this.state.items,a=parseInt(this.state.totalRecords);return 0!==a&&(e=g.a.createElement(P.a,{totalRecords:a,pageLimit:5,pageNeighbours:1,onPageChanged:this.onPageChanged})),g.a.createElement("div",{className:"animated fadeIn"},g.a.createElement(h.a,null,g.a.createElement(f.a,{xl:2}),g.a.createElement(f.a,{xl:8},g.a.createElement(p.a,null,g.a.createElement(b.a,null,g.a.createElement("i",{className:"fa fa-align-justify"})," Rooms",g.a.createElement(d.a,{to:"room/add"},g.a.createElement("button",{onClick:this.showHospitalInfo,className:"btn btn-success  upActionbtn"},"+ Add room"))),g.a.createElement(v.a,null,g.a.createElement(E.a,{responsive:!0,hover:!0},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",{scope:"col"},"Id"),g.a.createElement("th",{scope:"col"},"Room No"),g.a.createElement("th",{scope:"col"},"Status"),g.a.createElement("th",{scope:"col"},"Edit room"))),g.a.createElement("tbody",null,t.map(function(e,t){return g.a.createElement(j,{key:t,rooms:e})})))),e))))}}]),t}(m.Component);t.default=k},359:function(e,t){},361:function(e,t){},393:function(e,t){},394:function(e,t){},450:function(e,t,a){"use strict";var n=a(452),o=a(86),r=a(87),c=a(89),l=a(88),s=a(90),i=a(1),u=a.n(i),m=a(482),g=a(483),d=a(484),h="LEFT",f="RIGHT",p=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,o=[];n<=t;)o.push(n),n+=a;return o},b=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).gotoPage=function(e){var t=a.props.onPageChanged,n=void 0===t?function(e){return e}:t,o=Math.max(0,Math.min(e,a.totalPages)),r={currentPage:o,totalPages:a.totalPages,pageLimit:a.pageLimit,totalRecords:a.totalRecords};a.setState({currentPage:o},function(){return n(r)})},a.handleClick=function(e,t){t.preventDefault(),a.gotoPage(e)},a.handleMoveLeft=function(e){e.preventDefault(),a.gotoPage(a.state.currentPage-2*a.pageNeighbours-1)},a.handleMoveRight=function(e){e.preventDefault(),a.gotoPage(a.state.currentPage+2*a.pageNeighbours+1)},a.fetchPageNumbers=function(){var e=a.totalPages,t=a.state.currentPage,o=a.pageNeighbours,r=2*a.pageNeighbours+3;if(e>r+2){var c=[],l=t-o,s=t+o,i=e-1,u=l>2?l:2,m=s<i?s:i,g=r-(c=p(u,m)).length-1,d=u>2,b=m<i,v=h,E=f;if(d&&!b){var P=p(u-g,u-1);c=[v].concat(Object(n.a)(P),Object(n.a)(c))}else if(!d&&b){var R=p(m+1,m+g);c=[].concat(Object(n.a)(c),Object(n.a)(R),[E])}else d&&b&&(c=[v].concat(Object(n.a)(c),[E]));return[1].concat(Object(n.a)(c),[e])}return p(1,e)};var r=e.totalRecords,s=void 0===r?null:r,i=e.pageLimit,u=void 0===i?30:i,m=e.pageNeighbours,g=void 0===m?0:m;return a.pageLimit="number"===typeof u?u:30,a.totalRecords="number"===typeof s?s:0,a.pageNeighbours="number"===typeof g?Math.max(0,Math.min(g,2)):0,a.totalPages=Math.ceil(a.totalRecords/a.pageLimit),a.state={currentPage:1},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"render",value:function(){var e=this;if(console.log(typeof this.totalRecords+" - "+this.totalRecords),!this.totalRecords)return null;if(1===this.totalPages)return null;this.state.currentPage;var t=this.fetchPageNumbers();return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,t.map(function(t,a){return t===h?u.a.createElement(g.a,{key:a},u.a.createElement(d.a,{onClick:e.handleMoveLeft,previous:!0,tag:"button"})):t===f?u.a.createElement(g.a,{key:a},u.a.createElement(d.a,{onClick:e.handleMoveRight,next:!0,tag:"button"})):u.a.createElement(g.a,{key:a},u.a.createElement(d.a,{onClick:function(a){return e.handleClick(t,a)},tag:"button"},t))})))}}]),t}(i.Component);t.a=b}}]);
//# sourceMappingURL=62.c4267952.chunk.js.map