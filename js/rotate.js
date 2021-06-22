		let roundChildren = document.getElementById('round-child');
			// console.log(roundChildren.children)

			let test1 = 'Text 1 I really had fun at the place. Their food tasted great. I would like to visit the place one more time with my family and friends. The waitress was very professional towards me and treated my order with punctuality. <br/><br/> <span id="name"> - Kojo </span>'
			let test2 = 'Text 2 I really had fun at the place. Their food tasted great. I would like to visit the place one more time with my family and friends. The waitress was very professional towards me and treated my order with punctuality. <br/><br/> <span id="name"> - Ernest </span>'
			let test3 = 'Text 3 I really had fun at the place. Their food tasted great. I would like to visit the place one more time with my family and friends. The waitress was very professional towards me and treated my order with punctuality. <br/><br/> <span id="name"> - Adwoa </span>'
			let test4 = 'Text 4 I really had fun at the place. Their food tasted great. I would like to visit the place one more time with my family and friends. The waitress was very professional towards me and treated my order with punctuality. <br/><br/> <span id="name"> - Akua  </span>'
			


			let get = [test1,test2,test3,test4];

			testing.innerHTML = get[0];
			function text () {
				let first = get.shift()
				get.push(first)
				testing.innerHTML = `${get[0]} `;
			}

			setInterval(function(){
				text();
			}, 20000) 