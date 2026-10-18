(function(){
  var root=document.documentElement,btn=document.getElementById('tema');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  btn.onclick=function(){
    var dark=root.getAttribute('data-theme')==='dark';
    root.setAttribute('data-theme',dark?'light':'dark');btn.textContent=dark?'🌙':'☀️';
  };
  var inp=document.getElementById('fotoIn'),box=document.getElementById('foto'),txt=document.getElementById('fotoTxt');
  function show(src){var i=document.createElement('img');i.alt='Foto de Sofi';i.src=src;box.appendChild(i);txt.style.display='none';}
  try{var g=localStorage.getItem('foto-sofi');if(g)show(g);}catch(e){}
  inp.onchange=function(){
    var f=inp.files[0];if(!f)return;
    var r=new FileReader();
    r.onload=function(){
      var old=box.querySelector('img');if(old)old.remove();
      show(r.result);
      try{localStorage.setItem('foto-sofi',r.result);}catch(e){}
    };
    r.readAsDataURL(f);
  };

  // Texto que se escribe solo
  var roles=['Desarrolladora web','Diseñadora de interfaces','Creadora de proyectos lila','Estudiante curiosa'],ri=0,ci=0,del=false,t=document.getElementById('typed');
  function tick(){var w=roles[ri];ci+=del?-1:1;t.textContent=w.slice(0,ci);var d=del?35:80;
    if(!del&&ci===w.length){del=true;d=1500}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=300}
    setTimeout(tick,d);}
  if(reduce)t.textContent=roles[0];else tick();

  // Aparecer al hacer scroll + barras que se llenan
  var bars=document.querySelectorAll('.bar i');
  if(!reduce&&'IntersectionObserver' in window){
    bars.forEach(function(i){i.dataset.w=i.style.width;i.style.width='0%';});
    var els=document.querySelectorAll('section h2,section .sub,.card,.chip,.hero>div:first-child');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(!e.isIntersecting)return;var el=e.target;el.classList.add('in');
      el.querySelectorAll('.bar i').forEach(function(i){i.style.width=i.dataset.w;});
      io.unobserve(el);setTimeout(function(){el.style.transitionDelay='0s';},1400);
    });},{threshold:.15});
    els.forEach(function(el){var k=Array.prototype.indexOf.call(el.parentNode.children,el);
      el.classList.add('rv');el.style.transitionDelay=(k%5)*90+'ms';io.observe(el);});
  }

  // Menú activo según la sección + barra de progreso + botón subir
  var links=document.querySelectorAll('nav ul a'),prog=document.getElementById('prog'),top=document.getElementById('top');
  if('IntersectionObserver' in window){
    var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
      links.forEach(function(a){a.classList.toggle('act',a.getAttribute('href')==='#'+e.target.id);});}});},{rootMargin:'-45% 0px -50% 0px'});
    document.querySelectorAll('section[id]').forEach(function(s){so.observe(s);});
  }
  addEventListener('scroll',function(){
    var h=document.documentElement.scrollHeight-innerHeight;
    prog.style.width=(h>0?scrollY/h*100:0)+'%';top.classList.toggle('on',scrollY>400);
  },{passive:true});
  top.onclick=function(){scrollTo({top:0,behavior:'smooth'});};

  // Chispas al hacer clic
  document.addEventListener('pointerdown',function(e){
    if(reduce)return;var c=['#a78bfa','#8b9cff','#c4a8ff'],s=['✦','✿','♡','★'];
    for(var n=0;n<6;n++){var p=document.createElement('span'),a=Math.random()*6.28,d=30+Math.random()*50;
      p.className='spark';p.textContent=s[Math.floor(Math.random()*4)];p.style.left=e.clientX+'px';p.style.top=e.clientY+'px';
      p.style.color=c[n%3];p.style.setProperty('--dx',Math.cos(a)*d+'px');p.style.setProperty('--dy',Math.sin(a)*d+'px');
      document.body.appendChild(p);setTimeout(p.remove.bind(p),800);}
  });

  var hov=matchMedia('(hover:hover)').matches;
  // Filtro de proyectos
  var fb=document.querySelectorAll('.fbtn');
  fb.forEach(function(b){b.onclick=function(){
    fb.forEach(function(x){x.classList.remove('on');});b.classList.add('on');var f=b.dataset.f;
    document.querySelectorAll('.proj').forEach(function(c){
      var show=f==='all'||c.dataset.cat.split(' ').indexOf(f)>-1;c.classList.toggle('off',!show);
      if(show){c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop');setTimeout(function(){c.classList.remove('pop');},600);}
    });};});
  // Confeti secreto: 5 clics rápidos en el logo
  var lc=0,lt,logo=document.querySelector('.logo');
  logo.onclick=function(){lc++;clearTimeout(lt);lt=setTimeout(function(){lc=0;},1200);
    if(lc>=5){lc=0;if(reduce)return;var e=['✿','✦','♡','★','🌼','💜'];
      for(var n=0;n<45;n++){var p=document.createElement('span');p.className='confetti';p.textContent=e[n%e.length];
        p.style.left=Math.random()*100+'vw';p.style.fontSize=16+Math.random()*18+'px';p.style.animationDelay=Math.random()*.8+'s';p.style.animationDuration=2+Math.random()*1.6+'s';
        document.body.appendChild(p);setTimeout(p.remove.bind(p),4500);}}};
  if(hov&&!reduce){
    // Tarjetas que se inclinan hacia el mouse
    document.querySelectorAll('.card').forEach(function(c){
      c.addEventListener('pointermove',function(e){if(c.classList.contains('rv')&&!c.classList.contains('in'))return;
        var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        c.style.transition='transform .08s';c.style.transform='perspective(800px) rotateX('+(-y*10)+'deg) rotateY('+(x*10)+'deg) translateY(-6px)';});
      c.addEventListener('pointerleave',function(){c.style.transition='';c.style.transform='';});
    });
    // Brillo que sigue al cursor + decoraciones con parallax
    var g=document.getElementById('glow'),gx=0,gy=0,tx=0,ty=0,dc=document.querySelectorAll('.deco span');
    addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;g.style.opacity=1;
      var dx=e.clientX/innerWidth-.5,dy=e.clientY/innerHeight-.5;
      dc.forEach(function(s,i){var k=(i%3+1)*16;s.style.translate=(-dx*k)+'px '+(-dy*k)+'px';});});
    (function loop(){gx+=(tx-gx)*.12;gy+=(ty-gy)*.12;g.style.transform='translate('+gx+'px,'+gy+'px)';requestAnimationFrame(loop);})();
    // Botones magnéticos
    document.querySelectorAll('.btn,#top,#tema,.fbtn').forEach(function(el){
      el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();
        el.style.translate=(e.clientX-r.left-r.width/2)*.25+'px '+(e.clientY-r.top-r.height/2)*.25+'px';});
      el.addEventListener('pointerleave',function(){el.style.translate='';});
    });
  }

})();
