
let leads = JSON.parse(localStorage.getItem('salesphereLeads')||'[]');

function createSphere(){
let name=document.getElementById('name').value;
let company=document.getElementById('company').value;
let industry=document.getElementById('industry').value;
let bio=document.getElementById('bio').value;

document.getElementById('preview').innerHTML=`
<div class="profile">
<h2>${name}</h2>
<h3>${company}</h3>
<p>${industry} SalesSphere</p>
<p>${bio}</p>
<a href="https://wa.me/27612657558">WhatsApp Customer</a>
</div>`;
}

function saveLead(){
let lead=document.getElementById('lead').value;
leads.push({name:lead,status:"New Lead"});
localStorage.setItem('salesphereLeads',JSON.stringify(leads));
displayLeads();
}

function displayLeads(){
document.getElementById('leads').innerHTML=leads.map(
l=>`<p>${l.name} - ${l.status}</p>`
).join('');
}

displayLeads();
