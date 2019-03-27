
const mylib = {
	/*
		$.copy() takes an object and returns a copy of it as a new object
		this is useful because when you simply assign an object to a new variable
		instead of copying the object it will just return a reference to the object
		which incase you change the new objects values it will also change the object it
		was refering to
		in ES6 there is a shorter way to do this it's the ... suffix
		example:
			var arr1=['kirk','arong','garcia'];
			var arr2=[...arr1];
	*/
	copy(obj){
		return JSON.parse(JSON.stringify(obj));
	},
	/*
		$.rnd(min,max) is a function that gives a random number (max number included)
		based from the passed parameters.
	*/
	rnd(min, max){
		return Math.floor(Math.random()*(max-min+1))+min;
	},
	/*
		$.ce() is a short cut for document.createElement()
	*/
	ce(selector){
		return document.createElement(selector);
	},
	/*
		$.gid() is a short cut for document.getElementById()
	*/
	id:function(selector){
		return document.getElementById(selector);
	},
	/*
		$.gcn() is a short cut for document.getElementsByClassName()
	*/
	cn:function(selector){
		return [...document.getElementsByClassName(selector)];
	},
	/*
		$.qsa() is a short cut for document.querySelectorAll()
	*/
	qsa:function(selector){
		return [...document.querySelectorAll(selector)];
	},
	qs(selector){
		return document.querySelector(selector);
	},
	/*
		 $.cdf() is a short cut for document.querySelectorAll()
	*/
	cdf(){
		return document.createDocumentFragment();
	},
	/*
		$.ajax() is similar to angulars $HTTP but instead of using xmlHTTPRequest
		it uses fetch an ES6 function for making requests to a server
		
		
		example 1:
			$.ajax({url:'myserver.php'})
			.then(r=>{
				console.log(r);
			});
		example 2:
			$.ajax({
				url:'myserver.php',
				data:{
					account_number:'000001',
					name:'Kirk'
				}
			}).then( r=>{
				console.log(r);
			});
	*/
	ajax({
		data,
		url,
		method = "GET",
		headers = { "Content-Type": "application/json" }
	}){
		return fetch(url,
			{
				headers,
			    body: JSON.stringify(data),
			    method
			    //credentials: 'same-origin',
		  	}
	  	).then(
		  	function(r){
		  		return r.json();
			  }
			  
		  );
		  
	},
	get(url){
		return this.ajax({
			url,
			method: "GET"
		});
	},
	post({data, url}){
		return this.ajax({
			url,
			data,
			method: "POST"
		});
	},
	put({data, url}){
		return this.ajax({
			url,
			data,
			method: "PUT"
			
		});
	},
	delete({data, url}){
		return this.ajax({
			url,
			data,
			method: "DELETE"
		});
	}
};

export default mylib;