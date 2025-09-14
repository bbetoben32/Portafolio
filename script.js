
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const scope = document.querySelector(".presentacion");
  if (scope) {
    const split = new SplitType(
      ".presentacion .titulo, .presentacion .subtitulo, .presentacion .descripcion",
      { types: "words" }
    );

    gsap.set(split.words, {
      display: "inline-block",
      willChange: "transform, opacity"
    });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.set(scope, { visibility: "visible" });

    tl.from(split.words, {
      y: 28,
      opacity: 0,
      duration: 0.85,
      stagger: 0.06
    }, 0);

    const btn = scope.querySelector(".btn-proyectos");
    if (btn) {
      tl.from(btn, {
        y: 16,
        opacity: 0,
        duration: 0.55
      }, "-=0.25");
    }
  }

  const caption = document.querySelector(".python");
  if (caption) {
    gsap.set(caption, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
  }
  const tec = document.querySelector(".tecnologia");
  if (tec) {
    gsap.set(tec, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
  }
  const n8n = document.querySelector(".n8n");
  if (n8n) {
    gsap.set(n8n, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
  }
  const node = document.querySelector(".node-js");
  if (node) {
    gsap.set(node, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
  }
  const git = document.querySelector(".git");
  if (git) {
    gsap.set(git, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
  }

  const  react = document.querySelector(".react-caption");
  if (react) {
    gsap.set(react, { autoAlpha: 0, y: -1200, filter: "blur(8px)" });
  }
  const phone = document.querySelector(".proyectos-content");
  
  if (phone) {
    gsap.set(phone, { autoAlpha: 0, y: 130, x:1000,filter: "blur(8px)" });
  }

  const descripcion = document.querySelector(".project-card");
  if (descripcion) {
    gsap.set(descripcion, { autoAlpha: 0, y: 350, x: 1000, filter: "blur(8px)" });
  }
  const pc = document.querySelector(".pc");
  
  if (pc) {
    gsap.set(pc, { autoAlpha: 0, y: 130, x:1000,filter: "blur(8px)" });
  }

  const descripcion_2 = document.querySelector(".project-card-2");
  if (descripcion_2) {
    gsap.set(descripcion_2, { autoAlpha: 0, y: 350, x: 1000, filter: "blur(8px)" });
  }
  


  const FINAL_MASK = "clamp(10vh, 20%, 12vh)";  
  const REVEAL_PROGRESS = 0.8;

  const heroTl = gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: {
      trigger: ".React",
      start: "top top",
      end: "+=2000",
      scrub: 3,
      pin: true,
      anticipatePin: 1,
      onUpdate: self => {
        if (caption) {
          const inReveal = self.progress >= REVEAL_PROGRESS;
          caption.setAttribute("aria-hidden", inReveal ? "false" : "true");
        }
      }
    }
  });

  heroTl
    
    .to(".React", {
      background: "#f7f7f7",
      maskSize: FINAL_MASK,
      ease: "none",
      duration: REVEAL_PROGRESS
    }, 0)
    
    .add("reveal")
    .to(caption || {}, {
      autoAlpha: 1,
      y: -205,
      x: -500,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power3.out"
    }, "reveal")
    .to(tec || {}, {
      autoAlpha: 1,
      y: -305,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power3.out"
    }, "reveal")
    
    .to(n8n || {}, {
      autoAlpha: 1,
      y: -205,
      x: 500,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power3.out"
    }, "reveal")
    .to(node || {}, {
      autoAlpha: 1,
      y: -200,
      x: 250,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power3.out"
    }, "reveal")
    .to(git || {}, {
      autoAlpha: 1,
      y: -203,
      x: -230,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power3.out"
    }, "reveal")

        .to(react || {}, {
      autoAlpha: 1,
      y: -120,
      filter: "blur(0px)",
      duration: 0.6,
      ease: "power3.out"
    }, "reveal+=0.1")

    .to(phone || {}, {
      autoAlpha: 1,
      y: 130,
      x: -450,
      filter: "blur(0px)",
      duration: 1.6,
      ease: "power3.out"
    }, "reveal+=0.1")
    
    .to(descripcion || {}, {
       autoAlpha: 1,
       y: 350,
       x: 100,
       filter: "blur(0px)",
       duration: 1,
       ease: "power3.out"
      }, "reveal+=0.1")

    

    .to(phone || {}, {
      autoAlpha: 0,
      x: -3000,           
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power2.in"
    }, "reveal+=1.2")

    .to(descripcion || {}, {
      autoAlpha: 0,
      x: -3000,           
      filter: "blur(10px)",
      duration: 1.82,
      ease: "power2.in"
    }, "reveal+=1.2")
    
    .to(pc || {}, {
      autoAlpha: 1,
      y: 130,
      x: -450,
      filter: "blur(0px)",
      duration: 1.6,
      ease: "power3.out"
    }, "reveal+=2.1")
    
    .to(descripcion_2 || {}, {
       autoAlpha: 1,
       y: 350,
       x: 160,
       filter: "blur(0px)",
       duration: 1,
       ease: "power3.out"
      }, "reveal+=2.1")

    .to(pc || {}, {
      autoAlpha: 0,
      x: -3000,           
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power2.in"
    }, "reveal+=3.1")

    .to(descripcion_2 || {}, {
      autoAlpha: 0,
      x: -3000,           
      filter: "blur(10px)",
      duration: 1.82,
      ease: "power2.in"
    }, "reveal+=3.1")

    .to([".React",caption ,n8n, react, node, git, tec]|| {}, {
      autoAlpha: 0,
      x: -3000,           
      filter: "blur(10px)",
      duration: 1.82,
      ease: "power2.in"
    }, "reveal+=3.5")
    
});
