(this["webpackJsonpalign-react"]=this["webpackJsonpalign-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),s=(a(17),a(1)),i=a(6),m=a(3),h=a(5),o=a(4),u=a(2),p=a(11);var d=function(e){return l.a.createElement("div",{className:e.className,id:e.id,onClick:e.handleClick},l.a.createElement(p.a.div,null,e.value))};function g(e,t){!function(e){for(var t=0;t<e.length;t++)for(var a=0;a<e[0].length;a++)document.getElementById(e[t][a].id).style.backgroundColor="rgb(213, 235, 207)"}(t);for(var a=0;a<e.length;a++)document.getElementById(e[a]).style.backgroundColor="red"}function E(e){return Object(n.useEffect)((function(){g(e.D[e.D.length-1][e.D[0].length-1].path,e.D)}),[e]),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(d,{className:"letter_square"})),l.a.createElement("td",null,l.a.createElement(d,{className:"letter_square"})),e.seq2.split("").map((function(e,t){return l.a.createElement("td",{key:t},l.a.createElement(d,{value:e,className:"letter_square"}))}))),e.D.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement(d,{value:e.seq1.charAt(a-1),className:"letter_square"})),t.map((function(t,n){return l.a.createElement("td",{key:e.D[a][n].id},l.a.createElement("div",null,l.a.createElement(d,{value:e.D[a][n].score,className:"score_square",id:e.D[a][n].id,handleClick:function(){return g(e.D[a][n].path,e.D)}})))})))})))))}var b=function(e){Object(h.a)(a,e);var t=Object(o.a)(a);function a(e){var n;Object(s.a)(this,a);return(n=t.call(this,e)).state={seq1:"AATCTAG",seq2:"ATCGGTCG",matchScore:1,mismatchScore:-1,gapScore:-1},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){"seq1"===e.target.id?this.setState({seq1:e.target.value.toString().toUpperCase()}):"seq2"===e.target.id?this.setState({seq2:e.target.value.toString().toUpperCase()}):"match"===e.target.id?this.setState({matchScore:e.target.value}):"mismatch"===e.target.id?this.setState({mismatchScore:e.target.value}):"gap"!==e.target.id||isNaN(e.target.value)||this.setState({gapScore:e.target.value})}},{key:"render",value:function(){var e=this,t=isNaN(parseInt(this.state.matchScore))?0:parseInt(this.state.matchScore),a=isNaN(parseInt(this.state.mismatchScore))?0:parseInt(this.state.mismatchScore),n=isNaN(parseInt(this.state.gapScore))?0:parseInt(this.state.gapScore),r=function(e,t,a,n,l){for(var r=new Array(e.length+1),c=0;c<e.length+1;c++)r[c]=new Array(t.length+1),r[c][0]={score:l*c,a:e.substring(0,c),b:"-".repeat(c)},r[c][0].id=c+",0",r[c][0].path=c>0?Object(u.a)(r[c-1][0].path):[],r[c][0].path.push(r[c][0].id.valueOf());for(var s=0;s<t.length+1;s++)r[0][s]={score:l*s,a:"-".repeat(s),b:t.substring(0,s)},r[0][s].id="0,"+s.toString(),r[0][s].path=s>0?Object(u.a)(r[0][s-1].path):[],r[0][s].path.push(r[0][s].id.valueOf());for(var i=0;i<e.length;i++)for(var m=0;m<t.length;m++){var h=t.charAt(m)===e.charAt(i)?a:n,o=Math.max(r[i][m].score+h,r[i][m+1].score+l,r[i+1][m].score+l);r[i+1][m+1]={},r[i+1][m+1].score=o,r[i+1][m+1].id=i+1+","+(m+1),o===r[i][m].score+h?(r[i+1][m+1].a=r[i][m].a+e.charAt(i),r[i+1][m+1].b=r[i][m].b+t.charAt(m),r[i+1][m+1].path=Object(u.a)(r[i][m].path)):o===r[i][m+1].score+l?(r[i+1][m+1].a=r[i][m+1].a+e.charAt(i),r[i+1][m+1].b=r[i][m+1].b+"-",r[i+1][m+1].path=Object(u.a)(r[i][m+1].path)):(r[i+1][m+1].a=r[i+1][m].a+"-",r[i+1][m+1].b=r[i+1][m].b+t.charAt(m),r[i+1][m+1].path=Object(u.a)(r[i+1][m].path)),r[i+1][m+1].path.push(r[i+1][m+1].id.valueOf())}return r}(this.state.seq1,this.state.seq2,t,a,n);return l.a.createElement("div",{id:"main"},l.a.createElement("p",null,"I was introduced to the ",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Needleman%E2%80%93Wunsch_algorithm"},"Needleman-Wunsch algorithm "),"during a fourth year CS course in the context of computing the optimal alignment of two DNA sequences. What is so fascinating about the algorithm is its simplicity, yet its ability to reduce to other popular dynamic programming problems such as ",l.a.createElement("button",{onClick:function(){e.setState({matchScore:1,mismatchScore:0,gapScore:0})}},"Longest Common Subsequence"),"  and ",l.a.createElement("button",{onClick:function(){e.setState({matchScore:0,mismatchScore:-1,gapScore:-1})}},"Edit Distance")," by changing the score scheme. The Needleman-Wunsch algorithm is still widely used in areas like bioinformatics, where its quadratic time and linear space complexities make it effective for aligning extremely long strings.",l.a.createElement("br",null),l.a.createElement("br",null),"The problem is solved by the recurrence relation: \\(\\texttt","{ D[i, j] = max}","\\begin","{cases}","\\texttt","{D[i-1, j-1] + f(S[i], T[j])}","\\\\ \\texttt","{D[i-1, j] + f(S[i], -)}","\\\\ \\texttt","{D[i, j-1] + f(-, T[j])}","\\end","{cases}","\\) , where ",l.a.createElement("span",{className:"mono"},"D[i, j]")," holds the optimal alignment score for ",l.a.createElement("span",{className:"mono"},"S[:i]")," and ",l.a.createElement("span",{className:"mono"},"T[:j]"),", '-' denotes a gap, and f is the scoring function."),l.a.createElement("table",{id:"param_result",style:{paddingTop:"20px"}},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{className:"param_label"}," Sequence S")),l.a.createElement("td",{colSpan:"4"},l.a.createElement("input",{type:"text",id:"seq1",className:"seq",value:this.state.seq1,maxLength:"20",onChange:this.handleChange}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{className:"param_label"},"Sequence T")),l.a.createElement("td",{colSpan:"4"},l.a.createElement("input",{type:"text",id:"seq2",className:"seq",value:this.state.seq2,maxLength:"20",onChange:this.handleChange}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("label",{className:"param_label"},"Match Score")),l.a.createElement("tr",null,l.a.createElement("input",{className:"params",id:"match",type:"number",value:this.state.matchScore,onChange:this.handleChange})))),l.a.createElement("td",null,l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("label",{className:"param_label"},"Mismatch Score")),l.a.createElement("tr",null,l.a.createElement("input",{className:"params",id:"mismatch",type:"number",value:this.state.mismatchScore,onChange:this.handleChange})))),l.a.createElement("td",null,l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("label",{className:"param_label"},"Gap Score")),l.a.createElement("tr",null,l.a.createElement("input",{className:"params",id:"gap",type:"number",value:this.state.gapScore,onChange:this.handleChange})))))),l.a.createElement("td",{rowSpan:"10",id:"result"},l.a.createElement("table",{id:"alignment"},l.a.createElement("tr",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,r[this.state.seq1.length][this.state.seq2.length].a.split("").map((function(e,t){return l.a.createElement("td",null,e)}))),l.a.createElement("tr",null,r[this.state.seq1.length][this.state.seq2.length].b.split("").map((function(e,t){return l.a.createElement("td",null,e)})))))),l.a.createElement("tr",null,"Score: "+r[this.state.seq1.length][this.state.seq2.length].score))))),l.a.createElement("div",null,l.a.createElement(E,{D:r,seq1:this.state.seq1,seq2:this.state.seq2})))}}]),a}(l.a.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.33341c6d.chunk.js.map