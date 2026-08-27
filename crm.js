
let leads=JSON.parse(localStorage.getItem('leads')||'[]');
document.getElementById('leadCount').innerHTML=leads.length;
document.getElementById('leads').innerHTML=
leads.map(x=>`<div class="lead">${x.name} - ${x.status}</div>`).join('') ||
'<div class="lead">No leads yet</div>';
