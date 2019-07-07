module.exports = {
    generateRandomPassword: function() {
        var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var lowercase = 'abcdefghijklmnopqrstuvwxyz';
        var numbers = '0123456789';
        var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

        var all = uppercase + lowercase + numbers + symbols;
        var password = 'JbL';

        for(var i=0; i<15; i++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }
        password += 'Hs';
        return password;
    }
}