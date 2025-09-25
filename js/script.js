 
 {
 // Fungsi untuk membuat bola
    function createBall(isHero = false) {
        const ball = document.createElement('div');
        ball.className = isHero ? 'animated-ball hero-ball' : 'animated-ball';
        
        // Random size antara 50px dan 200px
        const size = Math.random() * 150 + 50;
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;
        
        // Random posisi awal
        ball.style.left = `${Math.random() * 100}vw`;
        ball.style.top = `${Math.random() * 100}vh`;
        
        // Random durasi animasi
        const duration = Math.random() * 10 + 5;
        ball.style.animationDuration = `${duration}s`;
        
        // Random delay
        const delay = Math.random() * 5;
        ball.style.animationDelay = `-${delay}s`;
        
        return ball;
    }

    // Buat container untuk animasi background umum
    const backgroundAnimation = document.createElement('div');
    backgroundAnimation.className = 'background-animation';
    document.body.appendChild(backgroundAnimation);

    // Buat container untuk animasi di hero section
    const heroBackgroundAnimation = document.createElement('div');
    heroBackgroundAnimation.className = 'hero-background-animation';
    document.querySelector('.hero-container').appendChild(heroBackgroundAnimation);

    // Buat bola-bola untuk background umum
    for (let i = 0; i < 10; i++) {
        const ball = createBall();
        backgroundAnimation.appendChild(ball);
    }

    // Fungsi untuk membuat bola di belakang gambar
    function createImageBall() {
        const ball = document.createElement('div');
        ball.className = 'animated-ball image-ball';
        
        // Random size yang lebih kecil untuk area gambar
        const size = Math.random() * 80 + 30; // 30px sampai 110px
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;
        
        // Posisi random dalam area terbatas
        ball.style.left = `${Math.random() * 80}%`;
        ball.style.top = `${Math.random() * 80}%`;
        
        // Random durasi dan delay
        const duration = Math.random() * 8 + 4;
        const delay = Math.random() * 3;
        ball.style.animationDuration = `${duration}s`;
        ball.style.animationDelay = `-${delay}s`;
        
        return ball;
    }

    // Buat container untuk animasi di belakang gambar
    const imageBackgroundAnimation = document.createElement('div');
    imageBackgroundAnimation.className = 'image-background-animation';
    document.querySelector('.hero-image').appendChild(imageBackgroundAnimation);

    // Buat bola-bola untuk area gambar
    for (let i = 0; i < 6; i++) { // Jumlah bola yang lebih sedikit
        const ball = createImageBall();
        imageBackgroundAnimation.appendChild(ball);
    }

    function createBackgroundAnimation() {
        const container = document.querySelector('.background-animation');
        const numberOfBalls = 2; // Mengurangi jumlah bola menjadi hanya 2

        for (let i = 0; i < numberOfBalls; i++) {
            const ball = document.createElement('div');
            ball.className = 'animated-ball';
            
            // Membuat ukuran bola lebih besar
            const size = Math.random() * (300 - 200) + 50; // Ukuran antara 200px dan 300px
            ball.style.width = `${size}px`;
            ball.style.height = `${size}px`;
            
            // Posisi awal random
            ball.style.left = `${Math.random() * 100}%`;
            ball.style.top = `${Math.random() * 100}%`;
            
            // Delay yang lebih bervariasi
            ball.style.animationDelay = `${Math.random() * 8}s`;
            
            container.appendChild(ball);
        }
    }

    // Panggil fungsi saat halaman dimuat
    window.addEventListener('load', createBackgroundAnimation);
}