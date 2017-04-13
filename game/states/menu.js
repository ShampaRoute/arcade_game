var menu = function(game) {};
var music;
WebFontConfig = {
    active: function() {
        this.game.time.events.add(Phaser.Timer.SECOND, createButton, this);
    },
    google: {
        families: ['Nothing You Could Do']
    }

};

menu.prototype = {

    create: function() {
        console.log('%cSTATE::MENU', 'color: #fff; background: #0f0;');

        this.game.add.sprite(0, 0, 'menuBG');

        this.createButton(this.game, 'Play', 48, 500, 300 - 100, 200, 100, '',
            function() {
                this.game.state.start('Levels');
            });

        this.createButton(this.game, 'About', 48, 500, 300 + 100, 200, 100, '',
            function() {
                this.game.state.start('About');
            });
        this.createButton(this.game, '', 24, 950, 550, 40, 40, 'buttonSound',
            function() {
                this.pauseMusic();
            });
        X = this.game.add.sprite(930, 530, 'X');
        if(music.paused) {
            X.visible = true;
        } else {
            X.visible = false;
        }

    },

    createButton: function(game, string, fontSize, x, y, w, h, bg, callback) {
        var Button = game.add.button(x, y, bg, callback, this, 2, 1, 0);

        Button.anchor.setTo(0.5, 0.5);
        Button.width = w;
        Button.heigth = h;

        var text = game.add.text(Button.x - 8, Button.y - 12, string);
        text.font = 'Nothing You Could Do';
        text.fill = '#fff';
        text.fontSize = fontSize;
        text.anchor.setTo(0.5, 0.5);
    },

    pauseMusic: function() {
        if (music.paused) {
            music.resume();
        } else {
            music.pause();
        }
        X.visible = !X.visible;
    }
};
