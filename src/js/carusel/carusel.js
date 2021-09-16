class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 4,
        responsive = []
    }) {
        //   if (!this.main || !this.wrap) {
        //       console.warn('slider-carusel: необходимы 2 селектора, "main" и "wrap"!');
        //   }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            withSlide: Math.floor(100 / this.slidesToShow),
            infinity,
            maxPosition: this.slides.length - this.slidesToShow
        };
        this.responsive = responsive;
    }
    init() {
        console.log('this.slidesToShow: ', this.slidesToShow);
        console.log('withSlide: ', this.options.withSlide);
        console.log('maxPosition: ', this.options.maxPosition);
        this.addGloClass();
        this.addStyle();
        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
        }
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    addStyle() {
        let style = document.getElementById('sliderCarusel-style');

        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarusel-style';
        }
        style.textContent = `
           .glo-slider {
            display: flex !important;
            position: relative !important; 
            overflow: hidden !important;
            max-width: 550px;
            justify-content: center !important;
            flex-direction: row;
            margin: 0 auto;
           }
           .glo-slider__wrap{
            display: flex !important;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: flex-start;
            transition: transform 0.5s !important;
            will-change: transform !important;
            align-content: flex-start;
            align-items: baseline;
           }
           .glo-slider__item{
               display: flex !important;
               flex-direction: column;
               margin: 10px;
               padding: 10px;
               align-items: center !important;
                justify-content: center !important;
                flex: 0 0 ${this.options.withSlide}% !important;
                margin: auto 0 !important;
                max-width: 100% !important;
           }
       `;

        document.head.append(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.withSlide}%)`;

        }
    }
    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;
            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.withSlide}%)`;
        }
    }
    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.append(this.prev);
        this.main.append(this.next);

        const style = document.createElement('style');
        style.textContent = `
       .glo-slider__prev,
       .glo-slider__next{
           margin: 0 10px;
           border: 20px solid transparent;
           background: transparent;
           position: absolute;
       }
       .glo-slider__next {
           border-left-color: #19B5FE;
           right: -40px;
           top: 20%;
       }
       .glo-slider__prev {
           border-right-color: #19B5FE;
           left: -40px;
           top: 20%;
       }
       .glo-slider__prev:hover,
       .glo-slider__next:hover,
       .glo-slider__prev:focus,
       .glo-slider__next:focus {
           background: transparent;
           outline: transparent;
       },
       `;
        document.head.append(style);
    }
    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        console.log('slidesToShowDefault: ', slidesToShowDefault);
        const allResponse = this.responsive.map(item => item.breakpoint);
        console.log('allResponse: ', allResponse);
        const maxResponse = Math.max(...allResponse);
        console.log('maxResponse: ', maxResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            console.log('widthWindow: ', widthWindow);
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.withSlide = Math.floor(100 / this.slidesToShow);
                        console.log('this.options.withSlide: ', this.options.withSlide);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.withSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);
    }
}

export default SliderCarousel;
