let mkAccount = function (){
	let accountName = document.getElementById("accountName");
	let deposit = document.getElementById("deposit");
	let getName= accountName.value;
	let getBalance= deposit.value;
	return{
		name:function(){return getName}, 
		balance:function(){return getBalance}
	};
};

function show(){

	let account =mkAccount();
	alert(typeof(account.name()));
	let accountdisplay = document.getElementById("accountInfo");
	let currentAccount = accountdisplay.value;
	accountdisplay.value = currentAccount+"\n Account Name: "+account.name()+" Balance: "+account.balance();
			
} 
	

window.onload =function(){
	let makeAccount=document.getElementById("createAccount");
	makeAccount.onclick = show;
}