//let lastEnter = localStorage.getItem("gachi");
//if(lastEnter && (new Date() - new Date(lastEnter))

let elements = {
	 'input-form': document.getElementById('input-form'),
	 'password':   document.getElementById('password'),
	 'enter':      document.getElementById('enter'),
	 
	 // font cases
	 'base-font':      document.getElementById('base-font'),
	 'correct-font':   document.getElementById('correct-font'),
	 'incorrect-font': document.getElementById('incorrect-font'),
	 
	 'incorrect-text': document.getElementById('incorrect-text'),
	 
	 'music': document.getElementById('music')
};


 
elements['enter'].onclick = () => {
	let password = elements['password'].value.replace(/\s+/g, '').toLowerCase();
	
	if(!password)
		return;
	
	if(password == 'oralcumshot')
		return ifcorrect()

	ifincorrect(elements['password'].value)
	
	elements['password'].value = ''; 
};



let ifcorrect = () => {
     elements['base-font'].style.display = 'none';
	 elements['correct-font'].style.display = 'block';
};
	
let ifincorrect = (password) => {
	 elements['base-font'].style.display = 'none';
	 elements['incorrect-font'].style.display = 'block';
	 elements['incorrect-text'].innerHTML = `Уйдите прочь в трехбуквенне эротическое турне со своим "${password}"`;
	 //`изволите пожаловать в трехбуквенне эротическое турне`
};
