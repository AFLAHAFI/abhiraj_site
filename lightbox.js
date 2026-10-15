(() => {
 const links=[...document.querySelectorAll('[data-lightbox],.gallery-grid>a')];
 if(!links.length)return;
 const images=[...new Map(links.map(a=>[a.getAttribute('href'),{src:a.getAttribute('href'),alt:a.querySelector('img').alt}])).values()];
 const dialog=document.createElement('dialog');
 dialog.className='image-lightbox';
 dialog.setAttribute('aria-label','Project image viewer');
 dialog.innerHTML='<div class="lightbox-toolbar"><span class="lightbox-count" aria-live="polite"></span><button type="button" class="lightbox-close" aria-label="Close image viewer">Close ×</button></div><div class="lightbox-stage"><button type="button" class="lightbox-prev" aria-label="Previous image">←</button><img alt=""><button type="button" class="lightbox-next" aria-label="Next image">→</button></div><p class="lightbox-caption"></p>';
 document.body.append(dialog);
 const image=dialog.querySelector('img'),counter=dialog.querySelector('.lightbox-count'),caption=dialog.querySelector('.lightbox-caption');
 let current=0,trigger,previousOverflow,touchX;
 function show(index){current=(index+images.length)%images.length;image.src=images[current].src;image.alt=images[current].alt;counter.textContent=`${current+1} / ${images.length}`;caption.textContent=images[current].alt;}
 links.forEach(a=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||typeof dialog.showModal!=='function')return;e.preventDefault();trigger=a;show(images.findIndex(i=>i.src===a.getAttribute('href')));previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();dialog.querySelector('.lightbox-close').focus();}));
 dialog.querySelector('.lightbox-close').onclick=()=>dialog.close();
 dialog.querySelector('.lightbox-prev').onclick=()=>show(current-1);
 dialog.querySelector('.lightbox-next').onclick=()=>show(current+1);
 dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(current-1)}if(e.key==='ArrowRight'){e.preventDefault();show(current+1)}});
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 dialog.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;trigger?.focus()});
 image.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX},{passive:true});
 image.addEventListener('touchend',e=>{const delta=e.changedTouches[0].clientX-touchX;if(Math.abs(delta)>55)show(current+(delta<0?1:-1))},{passive:true});
})();
