function We(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ye="\0",v="\0",Y="";let Be=class{_isDirected=!0;_isMultigraph=!1;_isCompound=!1;_label;_defaultNodeLabelFn=()=>{};_defaultEdgeLabelFn=()=>{};_nodes={};_in={};_preds={};_out={};_sucs={};_edgeObjs={};_edgeLabels={};_nodeCount=0;_edgeCount=0;_parent;_children;constructor(t){t&&(this._isDirected=Object.hasOwn(t,"directed")?t.directed:!0,this._isMultigraph=Object.hasOwn(t,"multigraph")?t.multigraph:!1,this._isCompound=Object.hasOwn(t,"compound")?t.compound:!1),this._isCompound&&(this._parent={},this._children={},this._children[v]={})}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(t){return this._label=t,this}graph(){return this._label}setDefaultNodeLabel(t){return this._defaultNodeLabelFn=t,typeof t!="function"&&(this._defaultNodeLabelFn=()=>t),this}nodeCount(){return this._nodeCount}nodes(){return Object.keys(this._nodes)}sources(){var t=this;return this.nodes().filter(r=>Object.keys(t._in[r]).length===0)}sinks(){var t=this;return this.nodes().filter(r=>Object.keys(t._out[r]).length===0)}setNodes(t,r){var n=arguments,i=this;return t.forEach(function(a){n.length>1?i.setNode(a,r):i.setNode(a)}),this}setNode(t,r){return Object.hasOwn(this._nodes,t)?(arguments.length>1&&(this._nodes[t]=r),this):(this._nodes[t]=arguments.length>1?r:this._defaultNodeLabelFn(t),this._isCompound&&(this._parent[t]=v,this._children[t]={},this._children[v][t]=!0),this._in[t]={},this._preds[t]={},this._out[t]={},this._sucs[t]={},++this._nodeCount,this)}node(t){return this._nodes[t]}hasNode(t){return Object.hasOwn(this._nodes,t)}removeNode(t){var r=this;if(Object.hasOwn(this._nodes,t)){var n=i=>r.removeEdge(r._edgeObjs[i]);delete this._nodes[t],this._isCompound&&(this._removeFromParentsChildList(t),delete this._parent[t],this.children(t).forEach(function(i){r.setParent(i)}),delete this._children[t]),Object.keys(this._in[t]).forEach(n),delete this._in[t],delete this._preds[t],Object.keys(this._out[t]).forEach(n),delete this._out[t],delete this._sucs[t],--this._nodeCount}return this}setParent(t,r){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(r===void 0)r=v;else{r+="";for(var n=r;n!==void 0;n=this.parent(n))if(n===t)throw new Error("Setting "+r+" as parent of "+t+" would create a cycle");this.setNode(r)}return this.setNode(t),this._removeFromParentsChildList(t),this._parent[t]=r,this._children[r][t]=!0,this}_removeFromParentsChildList(t){delete this._children[this._parent[t]][t]}parent(t){if(this._isCompound){var r=this._parent[t];if(r!==v)return r}}children(t=v){if(this._isCompound){var r=this._children[t];if(r)return Object.keys(r)}else{if(t===v)return this.nodes();if(this.hasNode(t))return[]}}predecessors(t){var r=this._preds[t];if(r)return Object.keys(r)}successors(t){var r=this._sucs[t];if(r)return Object.keys(r)}neighbors(t){var r=this.predecessors(t);if(r){const i=new Set(r);for(var n of this.successors(t))i.add(n);return Array.from(i.values())}}isLeaf(t){var r;return this.isDirected()?r=this.successors(t):r=this.neighbors(t),r.length===0}filterNodes(t){var r=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});r.setGraph(this.graph());var n=this;Object.entries(this._nodes).forEach(function([s,o]){t(s)&&r.setNode(s,o)}),Object.values(this._edgeObjs).forEach(function(s){r.hasNode(s.v)&&r.hasNode(s.w)&&r.setEdge(s,n.edge(s))});var i={};function a(s){var o=n.parent(s);return o===void 0||r.hasNode(o)?(i[s]=o,o):o in i?i[o]:a(o)}return this._isCompound&&r.nodes().forEach(s=>r.setParent(s,a(s))),r}setDefaultEdgeLabel(t){return this._defaultEdgeLabelFn=t,typeof t!="function"&&(this._defaultEdgeLabelFn=()=>t),this}edgeCount(){return this._edgeCount}edges(){return Object.values(this._edgeObjs)}setPath(t,r){var n=this,i=arguments;return t.reduce(function(a,s){return i.length>1?n.setEdge(a,s,r):n.setEdge(a,s),s}),this}setEdge(){var t,r,n,i,a=!1,s=arguments[0];typeof s=="object"&&s!==null&&"v"in s?(t=s.v,r=s.w,n=s.name,arguments.length===2&&(i=arguments[1],a=!0)):(t=s,r=arguments[1],n=arguments[3],arguments.length>2&&(i=arguments[2],a=!0)),t=""+t,r=""+r,n!==void 0&&(n=""+n);var o=k(this._isDirected,t,r,n);if(Object.hasOwn(this._edgeLabels,o))return a&&(this._edgeLabels[o]=i),this;if(n!==void 0&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(t),this.setNode(r),this._edgeLabels[o]=a?i:this._defaultEdgeLabelFn(t,r,n);var d=ze(this._isDirected,t,r,n);return t=d.v,r=d.w,Object.freeze(d),this._edgeObjs[o]=d,B(this._preds[r],t),B(this._sucs[t],r),this._in[r][o]=d,this._out[t][o]=d,this._edgeCount++,this}edge(t,r,n){var i=arguments.length===1?C(this._isDirected,arguments[0]):k(this._isDirected,t,r,n);return this._edgeLabels[i]}edgeAsObj(){const t=this.edge(...arguments);return typeof t!="object"?{label:t}:t}hasEdge(t,r,n){var i=arguments.length===1?C(this._isDirected,arguments[0]):k(this._isDirected,t,r,n);return Object.hasOwn(this._edgeLabels,i)}removeEdge(t,r,n){var i=arguments.length===1?C(this._isDirected,arguments[0]):k(this._isDirected,t,r,n),a=this._edgeObjs[i];return a&&(t=a.v,r=a.w,delete this._edgeLabels[i],delete this._edgeObjs[i],z(this._preds[r],t),z(this._sucs[t],r),delete this._in[r][i],delete this._out[t][i],this._edgeCount--),this}inEdges(t,r){var n=this._in[t];if(n){var i=Object.values(n);return r?i.filter(a=>a.v===r):i}}outEdges(t,r){var n=this._out[t];if(n){var i=Object.values(n);return r?i.filter(a=>a.w===r):i}}nodeEdges(t,r){var n=this.inEdges(t,r);if(n)return n.concat(this.outEdges(t,r))}};function B(e,t){e[t]?e[t]++:e[t]=1}function z(e,t){--e[t]||delete e[t]}function k(e,t,r,n){var i=""+t,a=""+r;if(!e&&i>a){var s=i;i=a,a=s}return i+Y+a+Y+(n===void 0?Ye:n)}function ze(e,t,r,n){var i=""+t,a=""+r;if(!e&&i>a){var s=i;i=a,a=s}var o={v:i,w:a};return n&&(o.name=n),o}function C(e,t){return k(e,t.v,t.w,t.name)}var G=Be,qe="2.2.4",Ue={Graph:G,version:qe},He=G,Xe={write:Qe,read:Ze};function Qe(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:Ke(e),edges:Je(e)};return e.graph()!==void 0&&(t.value=structuredClone(e.graph())),t}function Ke(e){return e.nodes().map(function(t){var r=e.node(t),n=e.parent(t),i={v:t};return r!==void 0&&(i.value=r),n!==void 0&&(i.parent=n),i})}function Je(e){return e.edges().map(function(t){var r=e.edge(t),n={v:t.v,w:t.w};return t.name!==void 0&&(n.name=t.name),r!==void 0&&(n.value=r),n})}function Ze(e){var t=new He(e.options).setGraph(e.value);return e.nodes.forEach(function(r){t.setNode(r.v,r.value),r.parent&&t.setParent(r.v,r.parent)}),e.edges.forEach(function(r){t.setEdge({v:r.v,w:r.w,name:r.name},r.value)}),t}var et=tt;function tt(e){var t={},r=[],n;function i(a){Object.hasOwn(t,a)||(t[a]=!0,n.push(a),e.successors(a).forEach(i),e.predecessors(a).forEach(i))}return e.nodes().forEach(function(a){n=[],i(a),n.length&&r.push(n)}),r}let rt=class{_arr=[];_keyIndices={};size(){return this._arr.length}keys(){return this._arr.map(function(t){return t.key})}has(t){return Object.hasOwn(this._keyIndices,t)}priority(t){var r=this._keyIndices[t];if(r!==void 0)return this._arr[r].priority}min(){if(this.size()===0)throw new Error("Queue underflow");return this._arr[0].key}add(t,r){var n=this._keyIndices;if(t=String(t),!Object.hasOwn(n,t)){var i=this._arr,a=i.length;return n[t]=a,i.push({key:t,priority:r}),this._decrease(a),!0}return!1}removeMin(){this._swap(0,this._arr.length-1);var t=this._arr.pop();return delete this._keyIndices[t.key],this._heapify(0),t.key}decrease(t,r){var n=this._keyIndices[t];if(r>this._arr[n].priority)throw new Error("New priority is greater than current priority. Key: "+t+" Old: "+this._arr[n].priority+" New: "+r);this._arr[n].priority=r,this._decrease(n)}_heapify(t){var r=this._arr,n=2*t,i=n+1,a=t;n<r.length&&(a=r[n].priority<r[a].priority?n:a,i<r.length&&(a=r[i].priority<r[a].priority?i:a),a!==t&&(this._swap(t,a),this._heapify(a)))}_decrease(t){for(var r=this._arr,n=r[t].priority,i;t!==0&&(i=t>>1,!(r[i].priority<n));)this._swap(t,i),t=i}_swap(t,r){var n=this._arr,i=this._keyIndices,a=n[t],s=n[r];n[t]=s,n[r]=a,i[s.key]=t,i[a.key]=r}};var le=rt,nt=le,ue=at,it=()=>1;function at(e,t,r,n){return st(e,String(t),r||it,n||function(i){return e.outEdges(i)})}function st(e,t,r,n){var i={},a=new nt,s,o,d=function(l){var u=l.v!==s?l.v:l.w,h=i[u],f=r(l),c=o.distance+f;if(f<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+l+" Weight: "+f);c<h.distance&&(h.distance=c,h.predecessor=s,a.decrease(u,c))};for(e.nodes().forEach(function(l){var u=l===t?0:Number.POSITIVE_INFINITY;i[l]={distance:u},a.add(l,u)});a.size()>0&&(s=a.removeMin(),o=i[s],o.distance!==Number.POSITIVE_INFINITY);)n(s).forEach(d);return i}var ot=ue,dt=lt;function lt(e,t,r){return e.nodes().reduce(function(n,i){return n[i]=ot(e,i,t,r),n},{})}var he=ut;function ut(e){var t=0,r=[],n={},i=[];function a(s){var o=n[s]={onStack:!0,lowlink:t,index:t++};if(r.push(s),e.successors(s).forEach(function(u){Object.hasOwn(n,u)?n[u].onStack&&(o.lowlink=Math.min(o.lowlink,n[u].index)):(a(u),o.lowlink=Math.min(o.lowlink,n[u].lowlink))}),o.lowlink===o.index){var d=[],l;do l=r.pop(),n[l].onStack=!1,d.push(l);while(s!==l);i.push(d)}}return e.nodes().forEach(function(s){Object.hasOwn(n,s)||a(s)}),i}var ht=he,ft=ct;function ct(e){return ht(e).filter(function(t){return t.length>1||t.length===1&&e.hasEdge(t[0],t[0])})}var pt=bt,mt=()=>1;function bt(e,t,r){return wt(e,t||mt,r||function(n){return e.outEdges(n)})}function wt(e,t,r){var n={},i=e.nodes();return i.forEach(function(a){n[a]={},n[a][a]={distance:0},i.forEach(function(s){a!==s&&(n[a][s]={distance:Number.POSITIVE_INFINITY})}),r(a).forEach(function(s){var o=s.v===a?s.w:s.v,d=t(s);n[a][o]={distance:d,predecessor:a}})}),i.forEach(function(a){var s=n[a];i.forEach(function(o){var d=n[o];i.forEach(function(l){var u=d[a],h=s[l],f=d[l],c=u.distance+h.distance;c<f.distance&&(f.distance=c,f.predecessor=h.predecessor)})})}),n}function fe(e){var t={},r={},n=[];function i(a){if(Object.hasOwn(r,a))throw new S;Object.hasOwn(t,a)||(r[a]=!0,t[a]=!0,e.predecessors(a).forEach(i),delete r[a],n.push(a))}if(e.sinks().forEach(i),Object.keys(t).length!==e.nodeCount())throw new S;return n}class S extends Error{constructor(){super(...arguments)}}var ce=fe;fe.CycleException=S;var q=ce,Et=gt;function gt(e){try{q(e)}catch(t){if(t instanceof q.CycleException)return!1;throw t}return!0}var pe=vt;function vt(e,t,r){Array.isArray(t)||(t=[t]);var n=e.isDirected()?o=>e.successors(o):o=>e.neighbors(o),i=r==="post"?_t:yt,a=[],s={};return t.forEach(o=>{if(!e.hasNode(o))throw new Error("Graph does not have node: "+o);i(o,n,s,a)}),a}function _t(e,t,r,n){for(var i=[[e,!1]];i.length>0;){var a=i.pop();a[1]?n.push(a[0]):Object.hasOwn(r,a[0])||(r[a[0]]=!0,i.push([a[0],!0]),me(t(a[0]),s=>i.push([s,!1])))}}function yt(e,t,r,n){for(var i=[e];i.length>0;){var a=i.pop();Object.hasOwn(r,a)||(r[a]=!0,n.push(a),me(t(a),s=>i.push(s)))}}function me(e,t){for(var r=e.length;r--;)t(e[r],r,e);return e}var kt=pe,Ot=Nt;function Nt(e,t){return kt(e,t,"post")}var It=pe,xt=jt;function jt(e,t){return It(e,t,"pre")}var Ct=G,Lt=le,$t=Mt;function Mt(e,t){var r=new Ct,n={},i=new Lt,a;function s(d){var l=d.v===a?d.w:d.v,u=i.priority(l);if(u!==void 0){var h=t(d);h<u&&(n[l]=a,i.decrease(l,h))}}if(e.nodeCount()===0)return r;e.nodes().forEach(function(d){i.add(d,Number.POSITIVE_INFINITY),r.setNode(d)}),i.decrease(e.nodes()[0],0);for(var o=!1;i.size()>0;){if(a=i.removeMin(),Object.hasOwn(n,a))r.setEdge(a,n[a]);else{if(o)throw new Error("Input graph is not connected: "+e);o=!0}e.nodeEdges(a).forEach(s)}return r}var Tt={components:et,dijkstra:ue,dijkstraAll:dt,findCycles:ft,floydWarshall:pt,isAcyclic:Et,postorder:Ot,preorder:xt,prim:$t,tarjan:he,topsort:ce},U=Ue,E={Graph:U.Graph,json:Xe,alg:Tt,version:U.version};let Rt=class{constructor(){let t={};t._next=t._prev=t,this._sentinel=t}dequeue(){let t=this._sentinel,r=t._prev;if(r!==t)return H(r),r}enqueue(t){let r=this._sentinel;t._prev&&t._next&&H(t),t._next=r._next,r._next._prev=t,r._next=t,t._prev=r}toString(){let t=[],r=this._sentinel,n=r._prev;for(;n!==r;)t.push(JSON.stringify(n,St)),n=n._prev;return"["+t.join(", ")+"]"}};function H(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function St(e,t){if(e!=="_next"&&e!=="_prev")return t}var Pt=Rt;let Gt=E.Graph,Ft=Pt;var Dt=At;let Vt=()=>1;function At(e,t){if(e.nodeCount()<=1)return[];let r=Yt(e,t||Vt);return Wt(r.graph,r.buckets,r.zeroIdx).flatMap(i=>e.outEdges(i.v,i.w))}function Wt(e,t,r){let n=[],i=t[t.length-1],a=t[0],s;for(;e.nodeCount();){for(;s=a.dequeue();)L(e,t,r,s);for(;s=i.dequeue();)L(e,t,r,s);if(e.nodeCount()){for(let o=t.length-2;o>0;--o)if(s=t[o].dequeue(),s){n=n.concat(L(e,t,r,s,!0));break}}}return n}function L(e,t,r,n,i){let a=i?[]:void 0;return e.inEdges(n.v).forEach(s=>{let o=e.edge(s),d=e.node(s.v);i&&a.push({v:s.v,w:s.w}),d.out-=o,P(t,r,d)}),e.outEdges(n.v).forEach(s=>{let o=e.edge(s),d=s.w,l=e.node(d);l.in-=o,P(t,r,l)}),e.removeNode(n.v),a}function Yt(e,t){let r=new Gt,n=0,i=0;e.nodes().forEach(o=>{r.setNode(o,{v:o,in:0,out:0})}),e.edges().forEach(o=>{let d=r.edge(o.v,o.w)||0,l=t(o),u=d+l;r.setEdge(o.v,o.w,u),i=Math.max(i,r.node(o.v).out+=l),n=Math.max(n,r.node(o.w).in+=l)});let a=Bt(i+n+3).map(()=>new Ft),s=n+1;return r.nodes().forEach(o=>{P(a,s,r.node(o))}),{graph:r,buckets:a,zeroIdx:s}}function P(e,t,r){r.out?r.in?e[r.out-r.in+t].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}function Bt(e){const t=[];for(let r=0;r<e;r++)t.push(r);return t}let be=E.Graph;var m={addBorderNode:Zt,addDummyNode:we,applyWithChunking:x,asNonCompoundGraph:qt,buildLayerMatrix:Qt,intersectRect:Xt,mapValues:sr,maxRank:ge,normalizeRanks:Kt,notime:nr,partition:tr,pick:ar,predecessorWeights:Ht,range:_e,removeEmptyRanks:Jt,simplify:zt,successorWeights:Ut,time:rr,uniqueId:ve,zipObject:F};function we(e,t,r,n){let i;do i=ve(n);while(e.hasNode(i));return r.dummy=t,e.setNode(i,r),i}function zt(e){let t=new be().setGraph(e.graph());return e.nodes().forEach(r=>t.setNode(r,e.node(r))),e.edges().forEach(r=>{let n=t.edge(r.v,r.w)||{weight:0,minlen:1},i=e.edge(r);t.setEdge(r.v,r.w,{weight:n.weight+i.weight,minlen:Math.max(n.minlen,i.minlen)})}),t}function qt(e){let t=new be({multigraph:e.isMultigraph()}).setGraph(e.graph());return e.nodes().forEach(r=>{e.children(r).length||t.setNode(r,e.node(r))}),e.edges().forEach(r=>{t.setEdge(r,e.edge(r))}),t}function Ut(e){let t=e.nodes().map(r=>{let n={};return e.outEdges(r).forEach(i=>{n[i.w]=(n[i.w]||0)+e.edge(i).weight}),n});return F(e.nodes(),t)}function Ht(e){let t=e.nodes().map(r=>{let n={};return e.inEdges(r).forEach(i=>{n[i.v]=(n[i.v]||0)+e.edge(i).weight}),n});return F(e.nodes(),t)}function Xt(e,t){let r=e.x,n=e.y,i=t.x-r,a=t.y-n,s=e.width/2,o=e.height/2;if(!i&&!a)throw new Error("Not possible to find intersection inside of the rectangle");let d,l;return Math.abs(a)*s>Math.abs(i)*o?(a<0&&(o=-o),d=o*i/a,l=o):(i<0&&(s=-s),d=s,l=s*a/i),{x:r+d,y:n+l}}function Qt(e){let t=_e(ge(e)+1).map(()=>[]);return e.nodes().forEach(r=>{let n=e.node(r),i=n.rank;i!==void 0&&(t[i][n.order]=r)}),t}function Kt(e){let t=e.nodes().map(n=>{let i=e.node(n).rank;return i===void 0?Number.MAX_VALUE:i}),r=x(Math.min,t);e.nodes().forEach(n=>{let i=e.node(n);Object.hasOwn(i,"rank")&&(i.rank-=r)})}function Jt(e){let t=e.nodes().map(s=>e.node(s).rank),r=x(Math.min,t),n=[];e.nodes().forEach(s=>{let o=e.node(s).rank-r;n[o]||(n[o]=[]),n[o].push(s)});let i=0,a=e.graph().nodeRankFactor;Array.from(n).forEach((s,o)=>{s===void 0&&o%a!==0?--i:s!==void 0&&i&&s.forEach(d=>e.node(d).rank+=i)})}function Zt(e,t,r,n){let i={width:0,height:0};return arguments.length>=4&&(i.rank=r,i.order=n),we(e,"border",i,t)}function er(e,t=Ee){const r=[];for(let n=0;n<e.length;n+=t){const i=e.slice(n,n+t);r.push(i)}return r}const Ee=65535;function x(e,t){if(t.length>Ee){const r=er(t);return e.apply(null,r.map(n=>e.apply(null,n)))}else return e.apply(null,t)}function ge(e){const r=e.nodes().map(n=>{let i=e.node(n).rank;return i===void 0?Number.MIN_VALUE:i});return x(Math.max,r)}function tr(e,t){let r={lhs:[],rhs:[]};return e.forEach(n=>{t(n)?r.lhs.push(n):r.rhs.push(n)}),r}function rr(e,t){let r=Date.now();try{return t()}finally{console.log(e+" time: "+(Date.now()-r)+"ms")}}function nr(e,t){return t()}let ir=0;function ve(e){var t=++ir;return toString(e)+t}function _e(e,t,r=1){t==null&&(t=e,e=0);let n=a=>a<t;r<0&&(n=a=>t<a);const i=[];for(let a=e;n(a);a+=r)i.push(a);return i}function ar(e,t){const r={};for(const n of t)e[n]!==void 0&&(r[n]=e[n]);return r}function sr(e,t){let r=t;return typeof t=="string"&&(r=n=>n[t]),Object.entries(e).reduce((n,[i,a])=>(n[i]=r(a,i),n),{})}function F(e,t){return e.reduce((r,n,i)=>(r[n]=t[i],r),{})}let or=Dt,dr=m.uniqueId;var lr={run:ur,undo:fr};function ur(e){(e.graph().acyclicer==="greedy"?or(e,r(e)):hr(e)).forEach(n=>{let i=e.edge(n);e.removeEdge(n),i.forwardName=n.name,i.reversed=!0,e.setEdge(n.w,n.v,i,dr("rev"))});function r(n){return i=>n.edge(i).weight}}function hr(e){let t=[],r={},n={};function i(a){Object.hasOwn(n,a)||(n[a]=!0,r[a]=!0,e.outEdges(a).forEach(s=>{Object.hasOwn(r,s.w)?t.push(s):i(s.w)}),delete r[a])}return e.nodes().forEach(i),t}function fr(e){e.edges().forEach(t=>{let r=e.edge(t);if(r.reversed){e.removeEdge(t);let n=r.forwardName;delete r.reversed,delete r.forwardName,e.setEdge(t.w,t.v,r,n)}})}let cr=m;var pr={run:mr,undo:wr};function mr(e){e.graph().dummyChains=[],e.edges().forEach(t=>br(e,t))}function br(e,t){let r=t.v,n=e.node(r).rank,i=t.w,a=e.node(i).rank,s=t.name,o=e.edge(t),d=o.labelRank;if(a===n+1)return;e.removeEdge(t);let l,u,h;for(h=0,++n;n<a;++h,++n)o.points=[],u={width:0,height:0,edgeLabel:o,edgeObj:t,rank:n},l=cr.addDummyNode(e,"edge",u,"_d"),n===d&&(u.width=o.width,u.height=o.height,u.dummy="edge-label",u.labelpos=o.labelpos),e.setEdge(r,l,{weight:o.weight},s),h===0&&e.graph().dummyChains.push(l),r=l;e.setEdge(r,i,{weight:o.weight},s)}function wr(e){e.graph().dummyChains.forEach(t=>{let r=e.node(t),n=r.edgeLabel,i;for(e.setEdge(r.edgeObj,n);r.dummy;)i=e.successors(t)[0],e.removeNode(t),n.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(n.x=r.x,n.y=r.y,n.width=r.width,n.height=r.height),t=i,r=e.node(t)})}const{applyWithChunking:Er}=m;var j={longestPath:gr,slack:vr};function gr(e){var t={};function r(n){var i=e.node(n);if(Object.hasOwn(t,n))return i.rank;t[n]=!0;let a=e.outEdges(n).map(o=>o==null?Number.POSITIVE_INFINITY:r(o.w)-e.edge(o).minlen);var s=Er(Math.min,a);return s===Number.POSITIVE_INFINITY&&(s=0),i.rank=s}e.sources().forEach(r)}function vr(e,t){return e.node(t.w).rank-e.node(t.v).rank-e.edge(t).minlen}var _r=E.Graph,N=j.slack,ye=yr;function yr(e){var t=new _r({directed:!1}),r=e.nodes()[0],n=e.nodeCount();t.setNode(r,{});for(var i,a;kr(t,e)<n;)i=Or(t,e),a=t.hasNode(i.v)?N(e,i):-N(e,i),Nr(t,e,a);return t}function kr(e,t){function r(n){t.nodeEdges(n).forEach(i=>{var a=i.v,s=n===a?i.w:a;!e.hasNode(s)&&!N(t,i)&&(e.setNode(s,{}),e.setEdge(n,s,{}),r(s))})}return e.nodes().forEach(r),e.nodeCount()}function Or(e,t){return t.edges().reduce((n,i)=>{let a=Number.POSITIVE_INFINITY;return e.hasNode(i.v)!==e.hasNode(i.w)&&(a=N(t,i)),a<n[0]?[a,i]:n},[Number.POSITIVE_INFINITY,null])[1]}function Nr(e,t,r){e.nodes().forEach(n=>t.node(n).rank+=r)}var Ir=ye,X=j.slack,xr=j.longestPath,jr=E.alg.preorder,Cr=E.alg.postorder,Lr=m.simplify,$r=_;_.initLowLimValues=V;_.initCutValues=D;_.calcCutValue=ke;_.leaveEdge=Ne;_.enterEdge=Ie;_.exchangeEdges=xe;function _(e){e=Lr(e),xr(e);var t=Ir(e);V(t),D(t,e);for(var r,n;r=Ne(t);)n=Ie(t,e,r),xe(t,e,r,n)}function D(e,t){var r=Cr(e,e.nodes());r=r.slice(0,r.length-1),r.forEach(n=>Mr(e,t,n))}function Mr(e,t,r){var n=e.node(r),i=n.parent;e.edge(r,i).cutvalue=ke(e,t,r)}function ke(e,t,r){var n=e.node(r),i=n.parent,a=!0,s=t.edge(r,i),o=0;return s||(a=!1,s=t.edge(i,r)),o=s.weight,t.nodeEdges(r).forEach(d=>{var l=d.v===r,u=l?d.w:d.v;if(u!==i){var h=l===a,f=t.edge(d).weight;if(o+=h?f:-f,Rr(e,r,u)){var c=e.edge(r,u).cutvalue;o+=h?-c:c}}}),o}function V(e,t){arguments.length<2&&(t=e.nodes()[0]),Oe(e,{},1,t)}function Oe(e,t,r,n,i){var a=r,s=e.node(n);return t[n]=!0,e.neighbors(n).forEach(o=>{Object.hasOwn(t,o)||(r=Oe(e,t,r,o,n))}),s.low=a,s.lim=r++,i?s.parent=i:delete s.parent,r}function Ne(e){return e.edges().find(t=>e.edge(t).cutvalue<0)}function Ie(e,t,r){var n=r.v,i=r.w;t.hasEdge(n,i)||(n=r.w,i=r.v);var a=e.node(n),s=e.node(i),o=a,d=!1;a.lim>s.lim&&(o=s,d=!0);var l=t.edges().filter(u=>d===Q(e,e.node(u.v),o)&&d!==Q(e,e.node(u.w),o));return l.reduce((u,h)=>X(t,h)<X(t,u)?h:u)}function xe(e,t,r,n){var i=r.v,a=r.w;e.removeEdge(i,a),e.setEdge(n.v,n.w,{}),V(e),D(e,t),Tr(e,t)}function Tr(e,t){var r=e.nodes().find(i=>!t.node(i).parent),n=jr(e,r);n=n.slice(1),n.forEach(i=>{var a=e.node(i).parent,s=t.edge(i,a),o=!1;s||(s=t.edge(a,i),o=!0),t.node(i).rank=t.node(a).rank+(o?s.minlen:-s.minlen)})}function Rr(e,t,r){return e.hasEdge(t,r)}function Q(e,t,r){return r.low<=t.lim&&t.lim<=r.lim}var Sr=j,je=Sr.longestPath,Pr=ye,Gr=$r,Fr=Dr;function Dr(e){switch(e.graph().ranker){case"network-simplex":K(e);break;case"tight-tree":Ar(e);break;case"longest-path":Vr(e);break;default:K(e)}}var Vr=je;function Ar(e){je(e),Pr(e)}function K(e){Gr(e)}var Wr=Yr;function Yr(e){let t=zr(e);e.graph().dummyChains.forEach(r=>{let n=e.node(r),i=n.edgeObj,a=Br(e,t,i.v,i.w),s=a.path,o=a.lca,d=0,l=s[d],u=!0;for(;r!==i.w;){if(n=e.node(r),u){for(;(l=s[d])!==o&&e.node(l).maxRank<n.rank;)d++;l===o&&(u=!1)}if(!u){for(;d<s.length-1&&e.node(l=s[d+1]).minRank<=n.rank;)d++;l=s[d]}e.setParent(r,l),r=e.successors(r)[0]}})}function Br(e,t,r,n){let i=[],a=[],s=Math.min(t[r].low,t[n].low),o=Math.max(t[r].lim,t[n].lim),d,l;d=r;do d=e.parent(d),i.push(d);while(d&&(t[d].low>s||o>t[d].lim));for(l=d,d=n;(d=e.parent(d))!==l;)a.push(d);return{path:i.concat(a.reverse()),lca:l}}function zr(e){let t={},r=0;function n(i){let a=r;e.children(i).forEach(n),t[i]={low:a,lim:r++}}return e.children().forEach(n),t}let I=m;var qr={run:Ur,cleanup:Qr};function Ur(e){let t=I.addDummyNode(e,"root",{},"_root"),r=Hr(e),n=Object.values(r),i=I.applyWithChunking(Math.max,n)-1,a=2*i+1;e.graph().nestingRoot=t,e.edges().forEach(o=>e.edge(o).minlen*=a);let s=Xr(e)+1;e.children().forEach(o=>Ce(e,t,a,s,i,r,o)),e.graph().nodeRankFactor=a}function Ce(e,t,r,n,i,a,s){let o=e.children(s);if(!o.length){s!==t&&e.setEdge(t,s,{weight:0,minlen:r});return}let d=I.addBorderNode(e,"_bt"),l=I.addBorderNode(e,"_bb"),u=e.node(s);e.setParent(d,s),u.borderTop=d,e.setParent(l,s),u.borderBottom=l,o.forEach(h=>{Ce(e,t,r,n,i,a,h);let f=e.node(h),c=f.borderTop?f.borderTop:h,p=f.borderBottom?f.borderBottom:h,w=f.borderTop?n:2*n,y=c!==p?1:i-a[s]+1;e.setEdge(d,c,{weight:w,minlen:y,nestingEdge:!0}),e.setEdge(p,l,{weight:w,minlen:y,nestingEdge:!0})}),e.parent(s)||e.setEdge(t,d,{weight:0,minlen:i+a[s]})}function Hr(e){var t={};function r(n,i){var a=e.children(n);a&&a.length&&a.forEach(s=>r(s,i+1)),t[n]=i}return e.children().forEach(n=>r(n,1)),t}function Xr(e){return e.edges().reduce((t,r)=>t+e.edge(r).weight,0)}function Qr(e){var t=e.graph();e.removeNode(t.nestingRoot),delete t.nestingRoot,e.edges().forEach(r=>{var n=e.edge(r);n.nestingEdge&&e.removeEdge(r)})}let Kr=m;var Jr=Zr;function Zr(e){function t(r){let n=e.children(r),i=e.node(r);if(n.length&&n.forEach(t),Object.hasOwn(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(let a=i.minRank,s=i.maxRank+1;a<s;++a)J(e,"borderLeft","_bl",r,i,a),J(e,"borderRight","_br",r,i,a)}}e.children().forEach(t)}function J(e,t,r,n,i,a){let s={width:0,height:0,rank:a,borderType:t},o=i[t][a-1],d=Kr.addDummyNode(e,"border",s,r);i[t][a]=d,e.setParent(d,n),o&&e.setEdge(o,d,{weight:1})}var en={adjust:tn,undo:rn};function tn(e){let t=e.graph().rankdir.toLowerCase();(t==="lr"||t==="rl")&&Le(e)}function rn(e){let t=e.graph().rankdir.toLowerCase();(t==="bt"||t==="rl")&&nn(e),(t==="lr"||t==="rl")&&(an(e),Le(e))}function Le(e){e.nodes().forEach(t=>Z(e.node(t))),e.edges().forEach(t=>Z(e.edge(t)))}function Z(e){let t=e.width;e.width=e.height,e.height=t}function nn(e){e.nodes().forEach(t=>$(e.node(t))),e.edges().forEach(t=>{let r=e.edge(t);r.points.forEach($),Object.hasOwn(r,"y")&&$(r)})}function $(e){e.y=-e.y}function an(e){e.nodes().forEach(t=>M(e.node(t))),e.edges().forEach(t=>{let r=e.edge(t);r.points.forEach(M),Object.hasOwn(r,"x")&&M(r)})}function M(e){let t=e.x;e.x=e.y,e.y=t}let ee=m;var sn=on;function on(e){let t={},r=e.nodes().filter(d=>!e.children(d).length),n=r.map(d=>e.node(d).rank),i=ee.applyWithChunking(Math.max,n),a=ee.range(i+1).map(()=>[]);function s(d){if(t[d])return;t[d]=!0;let l=e.node(d);a[l.rank].push(d),e.successors(d).forEach(s)}return r.sort((d,l)=>e.node(d).rank-e.node(l).rank).forEach(s),a}let dn=m.zipObject;var ln=un;function un(e,t){let r=0;for(let n=1;n<t.length;++n)r+=hn(e,t[n-1],t[n]);return r}function hn(e,t,r){let n=dn(r,r.map((l,u)=>u)),i=t.flatMap(l=>e.outEdges(l).map(u=>({pos:n[u.w],weight:e.edge(u).weight})).sort((u,h)=>u.pos-h.pos)),a=1;for(;a<r.length;)a<<=1;let s=2*a-1;a-=1;let o=new Array(s).fill(0),d=0;return i.forEach(l=>{let u=l.pos+a;o[u]+=l.weight;let h=0;for(;u>0;)u%2&&(h+=o[u+1]),u=u-1>>1,o[u]+=l.weight;d+=l.weight*h}),d}var fn=cn;function cn(e,t=[]){return t.map(r=>{let n=e.inEdges(r);if(n.length){let i=n.reduce((a,s)=>{let o=e.edge(s),d=e.node(s.v);return{sum:a.sum+o.weight*d.order,weight:a.weight+o.weight}},{sum:0,weight:0});return{v:r,barycenter:i.sum/i.weight,weight:i.weight}}else return{v:r}})}let pn=m;var mn=bn;function bn(e,t){let r={};e.forEach((i,a)=>{let s=r[i.v]={indegree:0,in:[],out:[],vs:[i.v],i:a};i.barycenter!==void 0&&(s.barycenter=i.barycenter,s.weight=i.weight)}),t.edges().forEach(i=>{let a=r[i.v],s=r[i.w];a!==void 0&&s!==void 0&&(s.indegree++,a.out.push(r[i.w]))});let n=Object.values(r).filter(i=>!i.indegree);return wn(n)}function wn(e){let t=[];function r(i){return a=>{a.merged||(a.barycenter===void 0||i.barycenter===void 0||a.barycenter>=i.barycenter)&&En(i,a)}}function n(i){return a=>{a.in.push(i),--a.indegree===0&&e.push(a)}}for(;e.length;){let i=e.pop();t.push(i),i.in.reverse().forEach(r(i)),i.out.forEach(n(i))}return t.filter(i=>!i.merged).map(i=>pn.pick(i,["vs","i","barycenter","weight"]))}function En(e,t){let r=0,n=0;e.weight&&(r+=e.barycenter*e.weight,n+=e.weight),t.weight&&(r+=t.barycenter*t.weight,n+=t.weight),e.vs=t.vs.concat(e.vs),e.barycenter=r/n,e.weight=n,e.i=Math.min(t.i,e.i),t.merged=!0}let gn=m;var vn=_n;function _n(e,t){let r=gn.partition(e,u=>Object.hasOwn(u,"barycenter")),n=r.lhs,i=r.rhs.sort((u,h)=>h.i-u.i),a=[],s=0,o=0,d=0;n.sort(yn(!!t)),d=te(a,i,d),n.forEach(u=>{d+=u.vs.length,a.push(u.vs),s+=u.barycenter*u.weight,o+=u.weight,d=te(a,i,d)});let l={vs:a.flat(!0)};return o&&(l.barycenter=s/o,l.weight=o),l}function te(e,t,r){let n;for(;t.length&&(n=t[t.length-1]).i<=r;)t.pop(),e.push(n.vs),r++;return r}function yn(e){return(t,r)=>t.barycenter<r.barycenter?-1:t.barycenter>r.barycenter?1:e?r.i-t.i:t.i-r.i}let kn=fn,On=mn,Nn=vn;var In=$e;function $e(e,t,r,n){let i=e.children(t),a=e.node(t),s=a?a.borderLeft:void 0,o=a?a.borderRight:void 0,d={};s&&(i=i.filter(f=>f!==s&&f!==o));let l=kn(e,i);l.forEach(f=>{if(e.children(f.v).length){let c=$e(e,f.v,r,n);d[f.v]=c,Object.hasOwn(c,"barycenter")&&jn(f,c)}});let u=On(l,r);xn(u,d);let h=Nn(u,n);if(s&&(h.vs=[s,h.vs,o].flat(!0),e.predecessors(s).length)){let f=e.node(e.predecessors(s)[0]),c=e.node(e.predecessors(o)[0]);Object.hasOwn(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+f.order+c.order)/(h.weight+2),h.weight+=2}return h}function xn(e,t){e.forEach(r=>{r.vs=r.vs.flatMap(n=>t[n]?t[n].vs:n)})}function jn(e,t){e.barycenter!==void 0?(e.barycenter=(e.barycenter*e.weight+t.barycenter*t.weight)/(e.weight+t.weight),e.weight+=t.weight):(e.barycenter=t.barycenter,e.weight=t.weight)}let Cn=E.Graph,Ln=m;var $n=Mn;function Mn(e,t,r){let n=Tn(e),i=new Cn({compound:!0}).setGraph({root:n}).setDefaultNodeLabel(a=>e.node(a));return e.nodes().forEach(a=>{let s=e.node(a),o=e.parent(a);(s.rank===t||s.minRank<=t&&t<=s.maxRank)&&(i.setNode(a),i.setParent(a,o||n),e[r](a).forEach(d=>{let l=d.v===a?d.w:d.v,u=i.edge(l,a),h=u!==void 0?u.weight:0;i.setEdge(l,a,{weight:e.edge(d).weight+h})}),Object.hasOwn(s,"minRank")&&i.setNode(a,{borderLeft:s.borderLeft[t],borderRight:s.borderRight[t]}))}),i}function Tn(e){for(var t;e.hasNode(t=Ln.uniqueId("_root")););return t}var Rn=Sn;function Sn(e,t,r){let n={},i;r.forEach(a=>{let s=e.parent(a),o,d;for(;s;){if(o=e.parent(s),o?(d=n[o],n[o]=s):(d=i,i=s),d&&d!==s){t.setEdge(d,s);return}s=o}})}let Pn=sn,Gn=ln,Fn=In,Dn=$n,Vn=Rn,An=E.Graph,O=m;var Wn=Me;function Me(e,t){if(t&&typeof t.customOrder=="function"){t.customOrder(e,Me);return}let r=O.maxRank(e),n=re(e,O.range(1,r+1),"inEdges"),i=re(e,O.range(r-1,-1,-1),"outEdges"),a=Pn(e);if(ne(e,a),t&&t.disableOptimalOrderHeuristic)return;let s=Number.POSITIVE_INFINITY,o;for(let d=0,l=0;l<4;++d,++l){Yn(d%2?n:i,d%4>=2),a=O.buildLayerMatrix(e);let u=Gn(e,a);u<s&&(l=0,o=Object.assign({},a),s=u)}ne(e,o)}function re(e,t,r){return t.map(function(n){return Dn(e,n,r)})}function Yn(e,t){let r=new An;e.forEach(function(n){let i=n.graph().root,a=Fn(n,i,r,t);a.vs.forEach((s,o)=>n.node(s).order=o),Vn(n,r,a.vs)})}function ne(e,t){Object.values(t).forEach(r=>r.forEach((n,i)=>e.node(n).order=i))}let Bn=E.Graph,g=m;var zn={positionX:Hn,findType1Conflicts:Te,findType2Conflicts:Re,addConflict:A,hasConflict:Se,verticalAlignment:Pe,horizontalCompaction:Ge,alignCoordinates:De,findSmallestWidthAlignment:Fe,balance:Ve};function Te(e,t){let r={};function n(i,a){let s=0,o=0,d=i.length,l=a[a.length-1];return a.forEach((u,h)=>{let f=qn(e,u),c=f?e.node(f).order:d;(f||u===l)&&(a.slice(o,h+1).forEach(p=>{e.predecessors(p).forEach(w=>{let y=e.node(w),W=y.order;(W<s||c<W)&&!(y.dummy&&e.node(p).dummy)&&A(r,w,p)})}),o=h+1,s=c)}),a}return t.length&&t.reduce(n),r}function Re(e,t){let r={};function n(a,s,o,d,l){let u;g.range(s,o).forEach(h=>{u=a[h],e.node(u).dummy&&e.predecessors(u).forEach(f=>{let c=e.node(f);c.dummy&&(c.order<d||c.order>l)&&A(r,f,u)})})}function i(a,s){let o=-1,d,l=0;return s.forEach((u,h)=>{if(e.node(u).dummy==="border"){let f=e.predecessors(u);f.length&&(d=e.node(f[0]).order,n(s,l,h,o,d),l=h,o=d)}n(s,l,s.length,d,a.length)}),s}return t.length&&t.reduce(i),r}function qn(e,t){if(e.node(t).dummy)return e.predecessors(t).find(r=>e.node(r).dummy)}function A(e,t,r){if(t>r){let i=t;t=r,r=i}let n=e[t];n||(e[t]=n={}),n[r]=!0}function Se(e,t,r){if(t>r){let n=t;t=r,r=n}return!!e[t]&&Object.hasOwn(e[t],r)}function Pe(e,t,r,n){let i={},a={},s={};return t.forEach(o=>{o.forEach((d,l)=>{i[d]=d,a[d]=d,s[d]=l})}),t.forEach(o=>{let d=-1;o.forEach(l=>{let u=n(l);if(u.length){u=u.sort((f,c)=>s[f]-s[c]);let h=(u.length-1)/2;for(let f=Math.floor(h),c=Math.ceil(h);f<=c;++f){let p=u[f];a[l]===l&&d<s[p]&&!Se(r,l,p)&&(a[p]=l,a[l]=i[l]=i[p],d=s[p])}}})}),{root:i,align:a}}function Ge(e,t,r,n,i){let a={},s=Un(e,t,r,i),o=i?"borderLeft":"borderRight";function d(h,f){let c=s.nodes(),p=c.pop(),w={};for(;p;)w[p]?h(p):(w[p]=!0,c.push(p),c=c.concat(f(p))),p=c.pop()}function l(h){a[h]=s.inEdges(h).reduce((f,c)=>Math.max(f,a[c.v]+s.edge(c)),0)}function u(h){let f=s.outEdges(h).reduce((p,w)=>Math.min(p,a[w.w]-s.edge(w)),Number.POSITIVE_INFINITY),c=e.node(h);f!==Number.POSITIVE_INFINITY&&c.borderType!==o&&(a[h]=Math.max(a[h],f))}return d(l,s.predecessors.bind(s)),d(u,s.successors.bind(s)),Object.keys(n).forEach(h=>a[h]=a[r[h]]),a}function Un(e,t,r,n){let i=new Bn,a=e.graph(),s=Xn(a.nodesep,a.edgesep,n);return t.forEach(o=>{let d;o.forEach(l=>{let u=r[l];if(i.setNode(u),d){var h=r[d],f=i.edge(h,u);i.setEdge(h,u,Math.max(s(e,l,d),f||0))}d=l})}),i}function Fe(e,t){return Object.values(t).reduce((r,n)=>{let i=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;Object.entries(n).forEach(([o,d])=>{let l=Qn(e,o)/2;i=Math.max(d+l,i),a=Math.min(d-l,a)});const s=i-a;return s<r[0]&&(r=[s,n]),r},[Number.POSITIVE_INFINITY,null])[1]}function De(e,t){let r=Object.values(t),n=g.applyWithChunking(Math.min,r),i=g.applyWithChunking(Math.max,r);["u","d"].forEach(a=>{["l","r"].forEach(s=>{let o=a+s,d=e[o];if(d===t)return;let l=Object.values(d),u=n-g.applyWithChunking(Math.min,l);s!=="l"&&(u=i-g.applyWithChunking(Math.max,l)),u&&(e[o]=g.mapValues(d,h=>h+u))})})}function Ve(e,t){return g.mapValues(e.ul,(r,n)=>{if(t)return e[t.toLowerCase()][n];{let i=Object.values(e).map(a=>a[n]).sort((a,s)=>a-s);return(i[1]+i[2])/2}})}function Hn(e){let t=g.buildLayerMatrix(e),r=Object.assign(Te(e,t),Re(e,t)),n={},i;["u","d"].forEach(s=>{i=s==="u"?t:Object.values(t).reverse(),["l","r"].forEach(o=>{o==="r"&&(i=i.map(h=>Object.values(h).reverse()));let d=(s==="u"?e.predecessors:e.successors).bind(e),l=Pe(e,i,r,d),u=Ge(e,i,l.root,l.align,o==="r");o==="r"&&(u=g.mapValues(u,h=>-h)),n[s+o]=u})});let a=Fe(e,n);return De(n,a),Ve(n,e.graph().align)}function Xn(e,t,r){return(n,i,a)=>{let s=n.node(i),o=n.node(a),d=0,l;if(d+=s.width/2,Object.hasOwn(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":l=-s.width/2;break;case"r":l=s.width/2;break}if(l&&(d+=r?l:-l),l=0,d+=(s.dummy?t:e)/2,d+=(o.dummy?t:e)/2,d+=o.width/2,Object.hasOwn(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":l=o.width/2;break;case"r":l=-o.width/2;break}return l&&(d+=r?l:-l),l=0,d}}function Qn(e,t){return e.node(t).width}let Ae=m,Kn=zn.positionX;var Jn=Zn;function Zn(e){e=Ae.asNonCompoundGraph(e),ei(e),Object.entries(Kn(e)).forEach(([t,r])=>e.node(t).x=r)}function ei(e){let t=Ae.buildLayerMatrix(e),r=e.graph().ranksep,n=0;t.forEach(i=>{const a=i.reduce((s,o)=>{const d=e.node(o).height;return s>d?s:d},0);i.forEach(s=>e.node(s).y=n+a/2),n+=a+r})}let ie=lr,ae=pr,ti=Fr,ri=m.normalizeRanks,ni=Wr,ii=m.removeEmptyRanks,se=qr,ai=Jr,oe=en,si=Wn,oi=Jn,b=m,di=E.Graph;var li=ui;function ui(e,t){let r=t&&t.debugTiming?b.time:b.notime;r("layout",()=>{let n=r("  buildLayoutGraph",()=>vi(e));r("  runLayout",()=>hi(n,r,t)),r("  updateInputGraph",()=>fi(e,n))})}function hi(e,t,r){t("    makeSpaceForEdgeLabels",()=>_i(e)),t("    removeSelfEdges",()=>Li(e)),t("    acyclic",()=>ie.run(e)),t("    nestingGraph.run",()=>se.run(e)),t("    rank",()=>ti(b.asNonCompoundGraph(e))),t("    injectEdgeLabelProxies",()=>yi(e)),t("    removeEmptyRanks",()=>ii(e)),t("    nestingGraph.cleanup",()=>se.cleanup(e)),t("    normalizeRanks",()=>ri(e)),t("    assignRankMinMax",()=>ki(e)),t("    removeEdgeLabelProxies",()=>Oi(e)),t("    normalize.run",()=>ae.run(e)),t("    parentDummyChains",()=>ni(e)),t("    addBorderSegments",()=>ai(e)),t("    order",()=>si(e,r)),t("    insertSelfEdges",()=>$i(e)),t("    adjustCoordinateSystem",()=>oe.adjust(e)),t("    position",()=>oi(e)),t("    positionSelfEdges",()=>Mi(e)),t("    removeBorderNodes",()=>Ci(e)),t("    normalize.undo",()=>ae.undo(e)),t("    fixupEdgeLabelCoords",()=>xi(e)),t("    undoCoordinateSystem",()=>oe.undo(e)),t("    translateGraph",()=>Ni(e)),t("    assignNodeIntersects",()=>Ii(e)),t("    reversePoints",()=>ji(e)),t("    acyclic.undo",()=>ie.undo(e))}function fi(e,t){e.nodes().forEach(r=>{let n=e.node(r),i=t.node(r);n&&(n.x=i.x,n.y=i.y,n.rank=i.rank,t.children(r).length&&(n.width=i.width,n.height=i.height))}),e.edges().forEach(r=>{let n=e.edge(r),i=t.edge(r);n.points=i.points,Object.hasOwn(i,"x")&&(n.x=i.x,n.y=i.y)}),e.graph().width=t.graph().width,e.graph().height=t.graph().height}let ci=["nodesep","edgesep","ranksep","marginx","marginy"],pi={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},mi=["acyclicer","ranker","rankdir","align"],bi=["width","height"],de={width:0,height:0},wi=["minlen","weight","width","height","labeloffset"],Ei={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},gi=["labelpos"];function vi(e){let t=new di({multigraph:!0,compound:!0}),r=R(e.graph());return t.setGraph(Object.assign({},pi,T(r,ci),b.pick(r,mi))),e.nodes().forEach(n=>{let i=R(e.node(n));const a=T(i,bi);Object.keys(de).forEach(s=>{a[s]===void 0&&(a[s]=de[s])}),t.setNode(n,a),t.setParent(n,e.parent(n))}),e.edges().forEach(n=>{let i=R(e.edge(n));t.setEdge(n,Object.assign({},Ei,T(i,wi),b.pick(i,gi)))}),t}function _i(e){let t=e.graph();t.ranksep/=2,e.edges().forEach(r=>{let n=e.edge(r);n.minlen*=2,n.labelpos.toLowerCase()!=="c"&&(t.rankdir==="TB"||t.rankdir==="BT"?n.width+=n.labeloffset:n.height+=n.labeloffset)})}function yi(e){e.edges().forEach(t=>{let r=e.edge(t);if(r.width&&r.height){let n=e.node(t.v),a={rank:(e.node(t.w).rank-n.rank)/2+n.rank,e:t};b.addDummyNode(e,"edge-proxy",a,"_ep")}})}function ki(e){let t=0;e.nodes().forEach(r=>{let n=e.node(r);n.borderTop&&(n.minRank=e.node(n.borderTop).rank,n.maxRank=e.node(n.borderBottom).rank,t=Math.max(t,n.maxRank))}),e.graph().maxRank=t}function Oi(e){e.nodes().forEach(t=>{let r=e.node(t);r.dummy==="edge-proxy"&&(e.edge(r.e).labelRank=r.rank,e.removeNode(t))})}function Ni(e){let t=Number.POSITIVE_INFINITY,r=0,n=Number.POSITIVE_INFINITY,i=0,a=e.graph(),s=a.marginx||0,o=a.marginy||0;function d(l){let u=l.x,h=l.y,f=l.width,c=l.height;t=Math.min(t,u-f/2),r=Math.max(r,u+f/2),n=Math.min(n,h-c/2),i=Math.max(i,h+c/2)}e.nodes().forEach(l=>d(e.node(l))),e.edges().forEach(l=>{let u=e.edge(l);Object.hasOwn(u,"x")&&d(u)}),t-=s,n-=o,e.nodes().forEach(l=>{let u=e.node(l);u.x-=t,u.y-=n}),e.edges().forEach(l=>{let u=e.edge(l);u.points.forEach(h=>{h.x-=t,h.y-=n}),Object.hasOwn(u,"x")&&(u.x-=t),Object.hasOwn(u,"y")&&(u.y-=n)}),a.width=r-t+s,a.height=i-n+o}function Ii(e){e.edges().forEach(t=>{let r=e.edge(t),n=e.node(t.v),i=e.node(t.w),a,s;r.points?(a=r.points[0],s=r.points[r.points.length-1]):(r.points=[],a=i,s=n),r.points.unshift(b.intersectRect(n,a)),r.points.push(b.intersectRect(i,s))})}function xi(e){e.edges().forEach(t=>{let r=e.edge(t);if(Object.hasOwn(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function ji(e){e.edges().forEach(t=>{let r=e.edge(t);r.reversed&&r.points.reverse()})}function Ci(e){e.nodes().forEach(t=>{if(e.children(t).length){let r=e.node(t),n=e.node(r.borderTop),i=e.node(r.borderBottom),a=e.node(r.borderLeft[r.borderLeft.length-1]),s=e.node(r.borderRight[r.borderRight.length-1]);r.width=Math.abs(s.x-a.x),r.height=Math.abs(i.y-n.y),r.x=a.x+r.width/2,r.y=n.y+r.height/2}}),e.nodes().forEach(t=>{e.node(t).dummy==="border"&&e.removeNode(t)})}function Li(e){e.edges().forEach(t=>{if(t.v===t.w){var r=e.node(t.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:t,label:e.edge(t)}),e.removeEdge(t)}})}function $i(e){var t=b.buildLayerMatrix(e);t.forEach(r=>{var n=0;r.forEach((i,a)=>{var s=e.node(i);s.order=a+n,(s.selfEdges||[]).forEach(o=>{b.addDummyNode(e,"selfedge",{width:o.label.width,height:o.label.height,rank:s.rank,order:a+ ++n,e:o.e,label:o.label},"_se")}),delete s.selfEdges})})}function Mi(e){e.nodes().forEach(t=>{var r=e.node(t);if(r.dummy==="selfedge"){var n=e.node(r.e.v),i=n.x+n.width/2,a=n.y,s=r.x-i,o=n.height/2;e.setEdge(r.e,r.label),e.removeNode(t),r.label.points=[{x:i+2*s/3,y:a-o},{x:i+5*s/6,y:a-o},{x:i+s,y:a},{x:i+5*s/6,y:a+o},{x:i+2*s/3,y:a+o}],r.label.x=r.x,r.label.y=r.y}})}function T(e,t){return b.mapValues(b.pick(e,t),Number)}function R(e){var t={};return e&&Object.entries(e).forEach(([r,n])=>{typeof r=="string"&&(r=r.toLowerCase()),t[r]=n}),t}let Ti=m,Ri=E.Graph;var Si={debugOrdering:Pi};function Pi(e){let t=Ti.buildLayerMatrix(e),r=new Ri({compound:!0,multigraph:!0}).setGraph({});return e.nodes().forEach(n=>{r.setNode(n,{label:n}),r.setParent(n,"layer"+e.node(n).rank)}),e.edges().forEach(n=>r.setEdge(n.v,n.w,{},n.name)),t.forEach((n,i)=>{let a="layer"+i;r.setNode(a,{rank:"same"}),n.reduce((s,o)=>(r.setEdge(s,o,{style:"invis"}),o))}),r}var Gi="1.1.4",Fi={graphlib:E,layout:li,debug:Si,util:{time:m.time,notime:m.notime},version:Gi};const Wi=We(Fi);export{Wi as d,We as g};