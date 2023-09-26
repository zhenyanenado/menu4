window.addEventListener('DOMContentLoaded', (event)=>{

	let c = console.log;
	let main = [];
	let close = false;


	for(let i = 1; i<=4; i++){

		let obj = document.createElement('div');
			obj.id = 'obj' + i;
			obj.classList.add('main')
			document.body.append(obj);
			main.push(obj)


				main[i-1].addEventListener('touchstart', function(event){

					if(this == main[1]){
						this.style.marginTop = '-200px'
					}

					else if(this == main[2]){
						this.style.marginTop = '-400px'
					}

						let others = main.filter((currentValue)=>{
							return currentValue != this;

						})

						for(let i = 0; i <= 2; i++){
							others[i].style.opacity = 0;
							close = true;
						}

						if(close){
							setTimeout(()=>{

								if(this == main[2] || this == main[3]){
									this.style.left = '20px'
								}


								this.style.width = '500px';

							}, 500)
						}

				})

	}




})