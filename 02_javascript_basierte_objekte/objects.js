var userOne = {
    email: 'max@muster.com',
    name: "Max",
    login(){
        console.log(this.email, 'hat sich eingeloggt');
    },
    logout(){
        console.log(this.email, 'hat sich ausgeloggt');
    }
};

userOne.login();
userOne.logout();