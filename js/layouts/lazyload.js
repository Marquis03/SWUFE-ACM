Global.initLazyLoad=()=>{var e=document.querySelectorAll("img");const t=new IntersectionObserver((e,r)=>{e.forEach(e=>{var t;e.isIntersecting&&(t=(e=e.target).getAttribute("data-src"),e.src=t,e.removeAttribute("lazyload"),r.unobserve(e))})},{rootMargin:"0px",threshold:.1});e.forEach(e=>{e.hasAttribute("lazyload")&&t.observe(e)})};