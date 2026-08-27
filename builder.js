
function saveProfile(){
let profile={
name:name.value,
company:company.value,
industry:industry.value,
bio:bio.value
};
localStorage.setItem('profile',JSON.stringify(profile));
alert('SalesSphere Profile Created');
}
