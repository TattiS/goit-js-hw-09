import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l="feedback-form-state",r=document.querySelector(".feedback-form");let t={email:"",message:""};const n=()=>{try{const e=JSON.parse(localStorage.getItem(l));if(e===null)return;t=e;for(const o in e)r.elements[o].value=e[o]}catch(e){console.log(e)}};n();const m=e=>{const{target:{name:o,value:a}}=e;t[o]=a.trim(),localStorage.setItem(l,JSON.stringify(t))},s=e=>{if(e.preventDefault(),!t.email.length||!t.message.length){alert("Fill please all fields");return}console.log(t),t={email:"",message:""},e.currentTarget.reset(),localStorage.removeItem(l)};r.addEventListener("input",m);r.addEventListener("submit",s);
//# sourceMappingURL=2-form.js.map