document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to("#janela", {
    scale: 5.6,
    scrollTrigger: {
      trigger: "main",
      scroll: "body",
      start: "top 0%",
      scrub: 1,
      pin: true
    }
  })

  gsap.to("section .conteudo", {
    opacity: 0,
    scrollTrigger: {
      trigger: "main",
      scroll: "body",
      start: "top 1%",
      end: "bottom 50%",
      scrub: 1
    }
  })

  gsap.to("#logo", {
    y: -410,
    scrollTrigger: {
      trigger: "main",
      scroll: "body",
      start: "top 1%",
      end: "bottom 50%",
      scrub: 1
    }
  })

  let split = SplitText.create("#text", {
    type: "words"
  });

  gsap.from(split.words, {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".btn",
      scroll: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 1
    }
  })

  gsap.fromTo("#seta", {
    y: -5
  }, {
    y: 5,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  })

  let tl = gsap.timeline();

  tl.from("header div a", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out"
  })

  tl.from(".hero-p", {
    y: 10,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  })

  tl.from(".hero-ad", {
    y: 10,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.5")

  tl.from(".hero-text h1", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
  })

  tl.from("#logo", {
    opacity: 0,
    ease: "power1.in"
  }, "-=0.5")

  tl.from(".btn", {
    y: 10,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  })

  gsap.utils.toArray(".link").forEach(link => {
    Observer.create({
      target: link,
      type: "pointer",

      onHover(self) {
        gsap.to(self.target, {
          scale: 1.1,
          y: -5,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        })
      },

      onHoverEnd(self) {
        gsap.to(self.target, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto"
        })
      }
    })
  })

  let aviaoTween;

  Observer.create({
    target: ".btn",
    type: "pointer",
    onHover: () => { 
      aviaoTween = gsap.fromTo("#aviao", {
        x: -5,
        y: 5
      }, {
        x: 5,
        y: -5,
        yoyo: true,
        repeat: -1
      })

      gsap.to("button p", {
        scale: 1.1
      })
       },

    onHoverEnd: () => { if (aviaoTween) {
      aviaoTween.kill();
    }
      gsap.to("#aviao", {
        x: 0,
        y: 0,
        yoyo: false,
        repeat: 0
      })

      gsap.to("button p", {
        scale: 1,
        duration: 0.2
      })
    }
  })




});
