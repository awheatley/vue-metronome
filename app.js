new Vue({
    el: '#wrapper',

    data: {
        bpm: 120
    },

    methods: {
        setBpm() {
            var glow = document.querySelectorAll('.beats__glow'),
                beat = document.querySelectorAll('.beats__beat'),
                bpm = this.bpm,
                duration = (60 / bpm) * 4;

            for (var i = 0; i < glow.length; i++) {
                var delay = i === 0 ? 0 : (60 / bpm) * i;

                glow[i].style.animation = 'show1 ' + duration + 's linear ' + delay + 's infinite';
            }
        },

        slower(e) {
            var glow = document.querySelectorAll('.beats__glow');

            glow.forEach(function(el) {
                el.style.animation = ''
            });

            if (e.shiftKey) {
                this.bpm -= 10;
            } else {
                this.bpm -= 1;
            }

            this.setBpm();
        },

        faster(e) {
            var glow = document.querySelectorAll('.beats__glow');

            glow.forEach(function(el) {
                el.style.animation = ''
            });

            if (e.shiftKey) {
                this.bpm += 10;
            } else {
                this.bpm += 1;
            }

            this.setBpm();
        }
    },

    mounted() {
        this.setBpm();
    }
});