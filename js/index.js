document.getElementById('dot-2').addEventListener('click', () => {
    const images = ['image1', 'image2', 'image3', 'image4'];
    const swaps = ['img/img3.jpeg', 'img/img4.jpeg', 'img/img1.jpeg', 'img/img2.jpeg', 'img/img3.jpeg'];

    for (let i = 0; i < images.length; i++) {
        document.getElementById(images[i]).src = swaps[i + 1];
        animate(images[i])

    }
})
document.getElementById('dot-3').addEventListener('click', () => {
    const images = ['image1', 'image2', 'image3', 'image4'];
    const swaps = ['img/img2.jpeg', 'img/img3.jpeg', 'img/img4.jpeg', 'img/img1.jpeg', 'img/img2.jpeg'];

    for (let i = 0; i < images.length; i++) {
        document.getElementById(images[i]).src = swaps[i + 1];
        animate(images[i])
    }
})
document.getElementById('dot-1').addEventListener('click', () => {
    const images = ['image1', 'image2', 'image3', 'image4'];
    const swaps = ['img/img1.jpeg', 'img/img2.jpeg', 'img/img3.jpeg', 'img/img4.jpeg', 'img/img1.jpeg'];

    for (let i = 0; i < images.length; i++) {
        document.getElementById(images[i]).src = swaps[i];
        animate(images[i])
    }

})

animate = (images) => {
    document.getElementById(images).animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 1000,
        iterations: 1
    });
}


class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e) {
        // remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));

        // add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e) {
        // remove current active classes from content
        this.container.querySelectorAll('.team__content').forEach(item => {
            item.classList.remove('active');
        })
        // add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


