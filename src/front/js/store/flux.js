const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			syncTokenFromSessionStore: () => { 
				const token = sessionStorage.getItem("token");
				console.log("Aplication just loaded, synching the session storage token");
				if(token && token != "" && token!= undefined) setStore({ token : token });
			},

			login: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
					  "Content-type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
			  
					})
				  };

				try{			  
					const resp = await fetch ("https://3001-4geeksacade-team3finalp-pc2dhrgzn4h.ws-us104.gitpod.io/api/token", opts)
					if (resp.status !== 200) {
						alert("There has been some error");
					   	return false;
				    }

					const data = await resp.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token});
					return true;
		
				}
				catch(error){
					console.error("There has been an error login in")
				}
			},

		getMessage:  () => {
			const store = getStore();
			const opts ={
				headers: {
					Authorization: "Bearer" + store.token
				}
			}
				
					// fetching data from the backend
					fetch( "https://3001-4geeksacade-team3finalp-pc2dhrgzn4h.ws-us104.gitpod.io/api/token", opts)
						.then(resp => resp.json())
						.then(data => setStore({ message: data.message}))
						.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
