const d = document;

export default function scrollSpy() {
  /*Entre quienes vamos a buscar */
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    //console.log("entries", entries);

    entries.forEach((entry) => {
      
      const id = entry.target.getAttribute("id");

      if(entry.isIntersecting){
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
      }else{
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
      }
    });
  }

  const observer = new IntersectionObserver(cb,{
    root:null,
    rootMargin:'0px',
    threshold:0.5
  });
  $sections.forEach(el => observer.observe(el));
}