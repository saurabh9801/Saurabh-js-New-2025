const user = {
    username:"saurabh",
    price: "999",
    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to webiste`);
        console.log(this)
        
    }
}
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
console.log(this)// out:empty object