        let show_items = document.getElementById("show_items")
        const list = show_items.querySelectorAll('li')

        let itemChildren = show_items.children

        show_items.addEventListener('click', function(event) {
            if (event.target.innerHTML == "Appetizer") {
		        for (item of itemChildren){
		        	item.classList.remove('active')
		        }
		        event.target.classList.add('active')

                food_items.innerHTML = `
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>`
            } else if (event.target.innerHTML == "Main Course") {
		        for (item of itemChildren){
		        	item.classList.remove('active')
		        }
		        event.target.classList.add('active')

                food_items.innerHTML = `                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>       
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>`
            } else if (event.target.innerHTML == "Desert") {
		        for (item of itemChildren){
		        	item.classList.remove('active')
		        }
		        event.target.classList.add('active')

                food_items.innerHTML = `                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>`
            } else if (event.target.innerHTML == "Wine &amp; Drink") {
		        for (item of itemChildren){
		        	item.classList.remove('active')
		        }
		        event.target.classList.add('active')

                food_items.innerHTML = `                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/diff.png" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>
                <figure>
                    <img src="images/fig.jpg" alt="La-Tante DC menu">
                    <!-- <figcaption> $50.00 </figcaption> -->
                </figure>`
            }

        })