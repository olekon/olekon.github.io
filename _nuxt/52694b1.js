(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{592:function(e,r){var t,o=Array.prototype.indexOf,n=function(e,r){if(null==e)return-1;if(o&&e.indexOf===o)return e.indexOf(r);for(var i=0,t=e.length;i<t;i++)if(e[i]===r)return i;return-1},l=/([A-Z])/g,c={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},h=/[&><"']/g;function d(e){return c[e]}if("undefined"!=typeof document){var m=document.createElement("span");t="textContent"in m?function(e,text){e.textContent=text}:function(e,text){e.innerText=text}}e.exports={contains:function(e,r){return-1!==n(e,r)},deflt:function(e,r){return void 0===e?r:e},escape:function(text){return(""+text).replace(h,d)},hyphenate:function(e){return e.replace(l,"-$1").toLowerCase()},indexOf:n,setTextContent:t,clearNode:function(e){t(e,"")}}},617:function(e,r){function t(r,t,o,n,l){e.exports[r][l]={font:t,group:o,replace:n}}e.exports={math:{},text:{}};var i,o,n="math",text="text",main="main",l="ams",c="accent",h="bin",d="close",m="inner",w="mathord",f="op",v="open",x="punct",k="rel",y="spacing",L="textord";t(n,main,k,"≡","\\equiv"),t(n,main,k,"≺","\\prec"),t(n,main,k,"≻","\\succ"),t(n,main,k,"∼","\\sim"),t(n,main,k,"⊥","\\perp"),t(n,main,k,"⪯","\\preceq"),t(n,main,k,"⪰","\\succeq"),t(n,main,k,"≃","\\simeq"),t(n,main,k,"∣","\\mid"),t(n,main,k,"≪","\\ll"),t(n,main,k,"≫","\\gg"),t(n,main,k,"≍","\\asymp"),t(n,main,k,"∥","\\parallel"),t(n,main,k,"⋈","\\bowtie"),t(n,main,k,"⌣","\\smile"),t(n,main,k,"⊑","\\sqsubseteq"),t(n,main,k,"⊒","\\sqsupseteq"),t(n,main,k,"≐","\\doteq"),t(n,main,k,"⌢","\\frown"),t(n,main,k,"∋","\\ni"),t(n,main,k,"∝","\\propto"),t(n,main,k,"⊢","\\vdash"),t(n,main,k,"⊣","\\dashv"),t(n,main,k,"∋","\\owns"),t(n,main,x,".","\\ldotp"),t(n,main,x,"⋅","\\cdotp"),t(n,main,L,"#","\\#"),t(n,main,L,"&","\\&"),t(n,main,L,"ℵ","\\aleph"),t(n,main,L,"∀","\\forall"),t(n,main,L,"ℏ","\\hbar"),t(n,main,L,"∃","\\exists"),t(n,main,L,"∇","\\nabla"),t(n,main,L,"♭","\\flat"),t(n,main,L,"ℓ","\\ell"),t(n,main,L,"♮","\\natural"),t(n,main,L,"♣","\\clubsuit"),t(n,main,L,"℘","\\wp"),t(n,main,L,"♯","\\sharp"),t(n,main,L,"♢","\\diamondsuit"),t(n,main,L,"ℜ","\\Re"),t(n,main,L,"♡","\\heartsuit"),t(n,main,L,"ℑ","\\Im"),t(n,main,L,"♠","\\spadesuit"),t(n,main,L,"†","\\dag"),t(n,main,L,"‡","\\ddag"),t(n,main,d,"⎱","\\rmoustache"),t(n,main,v,"⎰","\\lmoustache"),t(n,main,d,"⟯","\\rgroup"),t(n,main,v,"⟮","\\lgroup"),t(n,main,h,"∓","\\mp"),t(n,main,h,"⊖","\\ominus"),t(n,main,h,"⊎","\\uplus"),t(n,main,h,"⊓","\\sqcap"),t(n,main,h,"∗","\\ast"),t(n,main,h,"⊔","\\sqcup"),t(n,main,h,"◯","\\bigcirc"),t(n,main,h,"∙","\\bullet"),t(n,main,h,"‡","\\ddagger"),t(n,main,h,"≀","\\wr"),t(n,main,h,"⨿","\\amalg"),t(n,main,k,"⟵","\\longleftarrow"),t(n,main,k,"⇐","\\Leftarrow"),t(n,main,k,"⟸","\\Longleftarrow"),t(n,main,k,"⟶","\\longrightarrow"),t(n,main,k,"⇒","\\Rightarrow"),t(n,main,k,"⟹","\\Longrightarrow"),t(n,main,k,"↔","\\leftrightarrow"),t(n,main,k,"⟷","\\longleftrightarrow"),t(n,main,k,"⇔","\\Leftrightarrow"),t(n,main,k,"⟺","\\Longleftrightarrow"),t(n,main,k,"↦","\\mapsto"),t(n,main,k,"⟼","\\longmapsto"),t(n,main,k,"↗","\\nearrow"),t(n,main,k,"↩","\\hookleftarrow"),t(n,main,k,"↪","\\hookrightarrow"),t(n,main,k,"↘","\\searrow"),t(n,main,k,"↼","\\leftharpoonup"),t(n,main,k,"⇀","\\rightharpoonup"),t(n,main,k,"↙","\\swarrow"),t(n,main,k,"↽","\\leftharpoondown"),t(n,main,k,"⇁","\\rightharpoondown"),t(n,main,k,"↖","\\nwarrow"),t(n,main,k,"⇌","\\rightleftharpoons"),t(n,l,k,"≮","\\nless"),t(n,l,k,"","\\nleqslant"),t(n,l,k,"","\\nleqq"),t(n,l,k,"⪇","\\lneq"),t(n,l,k,"≨","\\lneqq"),t(n,l,k,"","\\lvertneqq"),t(n,l,k,"⋦","\\lnsim"),t(n,l,k,"⪉","\\lnapprox"),t(n,l,k,"⊀","\\nprec"),t(n,l,k,"⋠","\\npreceq"),t(n,l,k,"⋨","\\precnsim"),t(n,l,k,"⪹","\\precnapprox"),t(n,l,k,"≁","\\nsim"),t(n,l,k,"","\\nshortmid"),t(n,l,k,"∤","\\nmid"),t(n,l,k,"⊬","\\nvdash"),t(n,l,k,"⊭","\\nvDash"),t(n,l,k,"⋪","\\ntriangleleft"),t(n,l,k,"⋬","\\ntrianglelefteq"),t(n,l,k,"⊊","\\subsetneq"),t(n,l,k,"","\\varsubsetneq"),t(n,l,k,"⫋","\\subsetneqq"),t(n,l,k,"","\\varsubsetneqq"),t(n,l,k,"≯","\\ngtr"),t(n,l,k,"","\\ngeqslant"),t(n,l,k,"","\\ngeqq"),t(n,l,k,"⪈","\\gneq"),t(n,l,k,"≩","\\gneqq"),t(n,l,k,"","\\gvertneqq"),t(n,l,k,"⋧","\\gnsim"),t(n,l,k,"⪊","\\gnapprox"),t(n,l,k,"⊁","\\nsucc"),t(n,l,k,"⋡","\\nsucceq"),t(n,l,k,"⋩","\\succnsim"),t(n,l,k,"⪺","\\succnapprox"),t(n,l,k,"≆","\\ncong"),t(n,l,k,"","\\nshortparallel"),t(n,l,k,"∦","\\nparallel"),t(n,l,k,"⊯","\\nVDash"),t(n,l,k,"⋫","\\ntriangleright"),t(n,l,k,"⋭","\\ntrianglerighteq"),t(n,l,k,"","\\nsupseteqq"),t(n,l,k,"⊋","\\supsetneq"),t(n,l,k,"","\\varsupsetneq"),t(n,l,k,"⫌","\\supsetneqq"),t(n,l,k,"","\\varsupsetneqq"),t(n,l,k,"⊮","\\nVdash"),t(n,l,k,"⪵","\\precneqq"),t(n,l,k,"⪶","\\succneqq"),t(n,l,k,"","\\nsubseteqq"),t(n,l,h,"⊴","\\unlhd"),t(n,l,h,"⊵","\\unrhd"),t(n,l,k,"↚","\\nleftarrow"),t(n,l,k,"↛","\\nrightarrow"),t(n,l,k,"⇍","\\nLeftarrow"),t(n,l,k,"⇏","\\nRightarrow"),t(n,l,k,"↮","\\nleftrightarrow"),t(n,l,k,"⇎","\\nLeftrightarrow"),t(n,l,k,"△","\\vartriangle"),t(n,l,L,"ℏ","\\hslash"),t(n,l,L,"▽","\\triangledown"),t(n,l,L,"◊","\\lozenge"),t(n,l,L,"Ⓢ","\\circledS"),t(n,l,L,"®","\\circledR"),t(n,l,L,"∡","\\measuredangle"),t(n,l,L,"∄","\\nexists"),t(n,l,L,"℧","\\mho"),t(n,l,L,"Ⅎ","\\Finv"),t(n,l,L,"⅁","\\Game"),t(n,l,L,"k","\\Bbbk"),t(n,l,L,"‵","\\backprime"),t(n,l,L,"▲","\\blacktriangle"),t(n,l,L,"▼","\\blacktriangledown"),t(n,l,L,"■","\\blacksquare"),t(n,l,L,"⧫","\\blacklozenge"),t(n,l,L,"★","\\bigstar"),t(n,l,L,"∢","\\sphericalangle"),t(n,l,L,"∁","\\complement"),t(n,l,L,"ð","\\eth"),t(n,l,L,"╱","\\diagup"),t(n,l,L,"╲","\\diagdown"),t(n,l,L,"□","\\square"),t(n,l,L,"□","\\Box"),t(n,l,L,"◊","\\Diamond"),t(n,l,L,"¥","\\yen"),t(n,l,L,"✓","\\checkmark"),t(n,l,L,"ℶ","\\beth"),t(n,l,L,"ℸ","\\daleth"),t(n,l,L,"ℷ","\\gimel"),t(n,l,L,"ϝ","\\digamma"),t(n,l,L,"ϰ","\\varkappa"),t(n,l,v,"┌","\\ulcorner"),t(n,l,d,"┐","\\urcorner"),t(n,l,v,"└","\\llcorner"),t(n,l,d,"┘","\\lrcorner"),t(n,l,k,"≦","\\leqq"),t(n,l,k,"⩽","\\leqslant"),t(n,l,k,"⪕","\\eqslantless"),t(n,l,k,"≲","\\lesssim"),t(n,l,k,"⪅","\\lessapprox"),t(n,l,k,"≊","\\approxeq"),t(n,l,h,"⋖","\\lessdot"),t(n,l,k,"⋘","\\lll"),t(n,l,k,"≶","\\lessgtr"),t(n,l,k,"⋚","\\lesseqgtr"),t(n,l,k,"⪋","\\lesseqqgtr"),t(n,l,k,"≑","\\doteqdot"),t(n,l,k,"≓","\\risingdotseq"),t(n,l,k,"≒","\\fallingdotseq"),t(n,l,k,"∽","\\backsim"),t(n,l,k,"⋍","\\backsimeq"),t(n,l,k,"⫅","\\subseteqq"),t(n,l,k,"⋐","\\Subset"),t(n,l,k,"⊏","\\sqsubset"),t(n,l,k,"≼","\\preccurlyeq"),t(n,l,k,"⋞","\\curlyeqprec"),t(n,l,k,"≾","\\precsim"),t(n,l,k,"⪷","\\precapprox"),t(n,l,k,"⊲","\\vartriangleleft"),t(n,l,k,"⊴","\\trianglelefteq"),t(n,l,k,"⊨","\\vDash"),t(n,l,k,"⊪","\\Vvdash"),t(n,l,k,"⌣","\\smallsmile"),t(n,l,k,"⌢","\\smallfrown"),t(n,l,k,"≏","\\bumpeq"),t(n,l,k,"≎","\\Bumpeq"),t(n,l,k,"≧","\\geqq"),t(n,l,k,"⩾","\\geqslant"),t(n,l,k,"⪖","\\eqslantgtr"),t(n,l,k,"≳","\\gtrsim"),t(n,l,k,"⪆","\\gtrapprox"),t(n,l,h,"⋗","\\gtrdot"),t(n,l,k,"⋙","\\ggg"),t(n,l,k,"≷","\\gtrless"),t(n,l,k,"⋛","\\gtreqless"),t(n,l,k,"⪌","\\gtreqqless"),t(n,l,k,"≖","\\eqcirc"),t(n,l,k,"≗","\\circeq"),t(n,l,k,"≜","\\triangleq"),t(n,l,k,"∼","\\thicksim"),t(n,l,k,"≈","\\thickapprox"),t(n,l,k,"⫆","\\supseteqq"),t(n,l,k,"⋑","\\Supset"),t(n,l,k,"⊐","\\sqsupset"),t(n,l,k,"≽","\\succcurlyeq"),t(n,l,k,"⋟","\\curlyeqsucc"),t(n,l,k,"≿","\\succsim"),t(n,l,k,"⪸","\\succapprox"),t(n,l,k,"⊳","\\vartriangleright"),t(n,l,k,"⊵","\\trianglerighteq"),t(n,l,k,"⊩","\\Vdash"),t(n,l,k,"∣","\\shortmid"),t(n,l,k,"∥","\\shortparallel"),t(n,l,k,"≬","\\between"),t(n,l,k,"⋔","\\pitchfork"),t(n,l,k,"∝","\\varpropto"),t(n,l,k,"◀","\\blacktriangleleft"),t(n,l,k,"∴","\\therefore"),t(n,l,k,"∍","\\backepsilon"),t(n,l,k,"▶","\\blacktriangleright"),t(n,l,k,"∵","\\because"),t(n,l,k,"⋘","\\llless"),t(n,l,k,"⋙","\\gggtr"),t(n,l,h,"⊲","\\lhd"),t(n,l,h,"⊳","\\rhd"),t(n,l,k,"≂","\\eqsim"),t(n,main,k,"⋈","\\Join"),t(n,l,k,"≑","\\Doteq"),t(n,l,h,"∔","\\dotplus"),t(n,l,h,"∖","\\smallsetminus"),t(n,l,h,"⋒","\\Cap"),t(n,l,h,"⋓","\\Cup"),t(n,l,h,"⩞","\\doublebarwedge"),t(n,l,h,"⊟","\\boxminus"),t(n,l,h,"⊞","\\boxplus"),t(n,l,h,"⋇","\\divideontimes"),t(n,l,h,"⋉","\\ltimes"),t(n,l,h,"⋊","\\rtimes"),t(n,l,h,"⋋","\\leftthreetimes"),t(n,l,h,"⋌","\\rightthreetimes"),t(n,l,h,"⋏","\\curlywedge"),t(n,l,h,"⋎","\\curlyvee"),t(n,l,h,"⊝","\\circleddash"),t(n,l,h,"⊛","\\circledast"),t(n,l,h,"⋅","\\centerdot"),t(n,l,h,"⊺","\\intercal"),t(n,l,h,"⋒","\\doublecap"),t(n,l,h,"⋓","\\doublecup"),t(n,l,h,"⊠","\\boxtimes"),t(n,l,k,"⇢","\\dashrightarrow"),t(n,l,k,"⇠","\\dashleftarrow"),t(n,l,k,"⇇","\\leftleftarrows"),t(n,l,k,"⇆","\\leftrightarrows"),t(n,l,k,"⇚","\\Lleftarrow"),t(n,l,k,"↞","\\twoheadleftarrow"),t(n,l,k,"↢","\\leftarrowtail"),t(n,l,k,"↫","\\looparrowleft"),t(n,l,k,"⇋","\\leftrightharpoons"),t(n,l,k,"↶","\\curvearrowleft"),t(n,l,k,"↺","\\circlearrowleft"),t(n,l,k,"↰","\\Lsh"),t(n,l,k,"⇈","\\upuparrows"),t(n,l,k,"↿","\\upharpoonleft"),t(n,l,k,"⇃","\\downharpoonleft"),t(n,l,k,"⊸","\\multimap"),t(n,l,k,"↭","\\leftrightsquigarrow"),t(n,l,k,"⇉","\\rightrightarrows"),t(n,l,k,"⇄","\\rightleftarrows"),t(n,l,k,"↠","\\twoheadrightarrow"),t(n,l,k,"↣","\\rightarrowtail"),t(n,l,k,"↬","\\looparrowright"),t(n,l,k,"↷","\\curvearrowright"),t(n,l,k,"↻","\\circlearrowright"),t(n,l,k,"↱","\\Rsh"),t(n,l,k,"⇊","\\downdownarrows"),t(n,l,k,"↾","\\upharpoonright"),t(n,l,k,"⇂","\\downharpoonright"),t(n,l,k,"⇝","\\rightsquigarrow"),t(n,l,k,"⇝","\\leadsto"),t(n,l,k,"⇛","\\Rrightarrow"),t(n,l,k,"↾","\\restriction"),t(n,main,L,"‘","`"),t(n,main,L,"$","\\$"),t(n,main,L,"%","\\%"),t(n,main,L,"_","\\_"),t(n,main,L,"∠","\\angle"),t(n,main,L,"∞","\\infty"),t(n,main,L,"′","\\prime"),t(n,main,L,"△","\\triangle"),t(n,main,L,"Γ","\\Gamma"),t(n,main,L,"Δ","\\Delta"),t(n,main,L,"Θ","\\Theta"),t(n,main,L,"Λ","\\Lambda"),t(n,main,L,"Ξ","\\Xi"),t(n,main,L,"Π","\\Pi"),t(n,main,L,"Σ","\\Sigma"),t(n,main,L,"Υ","\\Upsilon"),t(n,main,L,"Φ","\\Phi"),t(n,main,L,"Ψ","\\Psi"),t(n,main,L,"Ω","\\Omega"),t(n,main,L,"¬","\\neg"),t(n,main,L,"¬","\\lnot"),t(n,main,L,"⊤","\\top"),t(n,main,L,"⊥","\\bot"),t(n,main,L,"∅","\\emptyset"),t(n,l,L,"∅","\\varnothing"),t(n,main,w,"α","\\alpha"),t(n,main,w,"β","\\beta"),t(n,main,w,"γ","\\gamma"),t(n,main,w,"δ","\\delta"),t(n,main,w,"ϵ","\\epsilon"),t(n,main,w,"ζ","\\zeta"),t(n,main,w,"η","\\eta"),t(n,main,w,"θ","\\theta"),t(n,main,w,"ι","\\iota"),t(n,main,w,"κ","\\kappa"),t(n,main,w,"λ","\\lambda"),t(n,main,w,"μ","\\mu"),t(n,main,w,"ν","\\nu"),t(n,main,w,"ξ","\\xi"),t(n,main,w,"o","\\omicron"),t(n,main,w,"π","\\pi"),t(n,main,w,"ρ","\\rho"),t(n,main,w,"σ","\\sigma"),t(n,main,w,"τ","\\tau"),t(n,main,w,"υ","\\upsilon"),t(n,main,w,"ϕ","\\phi"),t(n,main,w,"χ","\\chi"),t(n,main,w,"ψ","\\psi"),t(n,main,w,"ω","\\omega"),t(n,main,w,"ε","\\varepsilon"),t(n,main,w,"ϑ","\\vartheta"),t(n,main,w,"ϖ","\\varpi"),t(n,main,w,"ϱ","\\varrho"),t(n,main,w,"ς","\\varsigma"),t(n,main,w,"φ","\\varphi"),t(n,main,h,"∗","*"),t(n,main,h,"+","+"),t(n,main,h,"−","-"),t(n,main,h,"⋅","\\cdot"),t(n,main,h,"∘","\\circ"),t(n,main,h,"÷","\\div"),t(n,main,h,"±","\\pm"),t(n,main,h,"×","\\times"),t(n,main,h,"∩","\\cap"),t(n,main,h,"∪","\\cup"),t(n,main,h,"∖","\\setminus"),t(n,main,h,"∧","\\land"),t(n,main,h,"∨","\\lor"),t(n,main,h,"∧","\\wedge"),t(n,main,h,"∨","\\vee"),t(n,main,L,"√","\\surd"),t(n,main,v,"(","("),t(n,main,v,"[","["),t(n,main,v,"⟨","\\langle"),t(n,main,v,"∣","\\lvert"),t(n,main,v,"∥","\\lVert"),t(n,main,d,")",")"),t(n,main,d,"]","]"),t(n,main,d,"?","?"),t(n,main,d,"!","!"),t(n,main,d,"⟩","\\rangle"),t(n,main,d,"∣","\\rvert"),t(n,main,d,"∥","\\rVert"),t(n,main,k,"=","="),t(n,main,k,"<","<"),t(n,main,k,">",">"),t(n,main,k,":",":"),t(n,main,k,"≈","\\approx"),t(n,main,k,"≅","\\cong"),t(n,main,k,"≥","\\ge"),t(n,main,k,"≥","\\geq"),t(n,main,k,"←","\\gets"),t(n,main,k,">","\\gt"),t(n,main,k,"∈","\\in"),t(n,main,k,"∉","\\notin"),t(n,main,k,"⊂","\\subset"),t(n,main,k,"⊃","\\supset"),t(n,main,k,"⊆","\\subseteq"),t(n,main,k,"⊇","\\supseteq"),t(n,l,k,"⊈","\\nsubseteq"),t(n,l,k,"⊉","\\nsupseteq"),t(n,main,k,"⊨","\\models"),t(n,main,k,"←","\\leftarrow"),t(n,main,k,"≤","\\le"),t(n,main,k,"≤","\\leq"),t(n,main,k,"<","\\lt"),t(n,main,k,"≠","\\ne"),t(n,main,k,"≠","\\neq"),t(n,main,k,"→","\\rightarrow"),t(n,main,k,"→","\\to"),t(n,l,k,"≱","\\ngeq"),t(n,l,k,"≰","\\nleq"),t(n,main,y,null,"\\!"),t(n,main,y," ","\\ "),t(n,main,y," ","~"),t(n,main,y,null,"\\,"),t(n,main,y,null,"\\:"),t(n,main,y,null,"\\;"),t(n,main,y,null,"\\enspace"),t(n,main,y,null,"\\qquad"),t(n,main,y,null,"\\quad"),t(n,main,y," ","\\space"),t(n,main,x,",",","),t(n,main,x,";",";"),t(n,main,x,":","\\colon"),t(n,l,h,"⊼","\\barwedge"),t(n,l,h,"⊻","\\veebar"),t(n,main,h,"⊙","\\odot"),t(n,main,h,"⊕","\\oplus"),t(n,main,h,"⊗","\\otimes"),t(n,main,L,"∂","\\partial"),t(n,main,h,"⊘","\\oslash"),t(n,l,h,"⊚","\\circledcirc"),t(n,l,h,"⊡","\\boxdot"),t(n,main,h,"△","\\bigtriangleup"),t(n,main,h,"▽","\\bigtriangledown"),t(n,main,h,"†","\\dagger"),t(n,main,h,"⋄","\\diamond"),t(n,main,h,"⋆","\\star"),t(n,main,h,"◃","\\triangleleft"),t(n,main,h,"▹","\\triangleright"),t(n,main,v,"{","\\{"),t(n,main,d,"}","\\}"),t(n,main,v,"{","\\lbrace"),t(n,main,d,"}","\\rbrace"),t(n,main,v,"[","\\lbrack"),t(n,main,d,"]","\\rbrack"),t(n,main,v,"⌊","\\lfloor"),t(n,main,d,"⌋","\\rfloor"),t(n,main,v,"⌈","\\lceil"),t(n,main,d,"⌉","\\rceil"),t(n,main,L,"\\","\\backslash"),t(n,main,L,"∣","|"),t(n,main,L,"∣","\\vert"),t(n,main,L,"∥","\\|"),t(n,main,L,"∥","\\Vert"),t(n,main,k,"↑","\\uparrow"),t(n,main,k,"⇑","\\Uparrow"),t(n,main,k,"↓","\\downarrow"),t(n,main,k,"⇓","\\Downarrow"),t(n,main,k,"↕","\\updownarrow"),t(n,main,k,"⇕","\\Updownarrow"),t(n,n,f,"∐","\\coprod"),t(n,n,f,"⋁","\\bigvee"),t(n,n,f,"⋀","\\bigwedge"),t(n,n,f,"⨄","\\biguplus"),t(n,n,f,"⋂","\\bigcap"),t(n,n,f,"⋃","\\bigcup"),t(n,n,f,"∫","\\int"),t(n,n,f,"∫","\\intop"),t(n,n,f,"∬","\\iint"),t(n,n,f,"∭","\\iiint"),t(n,n,f,"∏","\\prod"),t(n,n,f,"∑","\\sum"),t(n,n,f,"⨂","\\bigotimes"),t(n,n,f,"⨁","\\bigoplus"),t(n,n,f,"⨀","\\bigodot"),t(n,n,f,"∮","\\oint"),t(n,n,f,"⨆","\\bigsqcup"),t(n,n,f,"∫","\\smallint"),t(n,main,m,"…","\\ldots"),t(n,main,m,"⋯","\\cdots"),t(n,main,m,"⋱","\\ddots"),t(n,main,L,"⋮","\\vdots"),t(n,main,c,"´","\\acute"),t(n,main,c,"`","\\grave"),t(n,main,c,"¨","\\ddot"),t(n,main,c,"~","\\tilde"),t(n,main,c,"¯","\\bar"),t(n,main,c,"˘","\\breve"),t(n,main,c,"ˇ","\\check"),t(n,main,c,"^","\\hat"),t(n,main,c,"⃗","\\vec"),t(n,main,c,"˙","\\dot"),t(n,main,w,"ı","\\imath"),t(n,main,w,"ȷ","\\jmath"),t(text,main,y," ","\\ "),t(text,main,y," "," "),t(text,main,y," ","~");var D='0123456789/@."';for(i=0;i<14;i++)t(n,main,L,o=D.charAt(i),o);var V="0123456789`!@*()-=+[]'\";:?/.,";for(i=0;i<29;i++)t(text,main,L,o=V.charAt(i),o);var C="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(i=0;i<52;i++)t(n,main,w,o=C.charAt(i),o),t(text,main,L,o,o)}}]);