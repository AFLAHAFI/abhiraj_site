(() => {
 const address='abhiraj696@gmail.com';
 const subject='Architectural visualization inquiry';
 const body='Hi Abhi,\n\nI would like to discuss a project.\nProject type:\nLocation:\nTimeline:\n\nThank you.';
 const mailto=`mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 const gmail=`https://mail.google.com/mail/?view=cm&fs=1&to=${address}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 const dialog=document.createElement('dialog');dialog.className='email-dialog';dialog.setAttribute('aria-labelledby','email-title');
 dialog.innerHTML=`<button class="email-close" type="button" aria-label="Close email options">×</button><p class="eyebrow accent">LET’S COLLABORATE</p><h2 id="email-title">Start a conversation.</h2><p>Choose how you’d like to send your inquiry.</p><div class="email-options"><a class="pill" href="${gmail}" target="_blank" rel="noopener">Open Gmail ↗</a><a class="pill" href="${mailto}">Open email app ↗</a><button class="pill email-copy" type="button">Copy email address</button></div><input class="email-address" aria-label="Email address" readonly value="${address}"><p class="email-status" role="status">Gmail opens in your browser. The email app option needs a configured mail app.</p>`;
 document.body.append(dialog);let trigger;
 document.querySelectorAll('a[href^="mailto:"]').forEach(a=>{if(dialog.contains(a))return;a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||typeof dialog.showModal!=='function')return;e.preventDefault();trigger=a;dialog.showModal()})});
 dialog.querySelector('.email-close').onclick=()=>dialog.close();
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 dialog.addEventListener('close',()=>trigger?.focus());
 dialog.querySelector('.email-copy').onclick=async()=>{const input=dialog.querySelector('input');const status=dialog.querySelector('.email-status');try{await navigator.clipboard.writeText(address);status.textContent='Email address copied. Paste it into your email service.'}catch{input.focus();input.select();status.textContent='Select and copy the email address above, then paste it into your email service.'}};
})();
