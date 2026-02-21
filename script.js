window.onload = () => {
    // 5.5 soniyadan keyin (animatsiyalar tugagach) tugmani ko'rsatish
    setTimeout(() => {
        const ring = document.querySelector('.loader-ring');
        const charY = document.querySelector('.char.y');
        const fname = document.querySelector('.f-name');
        const enterBtn = document.getElementById('enter-site');

        // Ringni to'xtatish yoki yashirish (ixtiyoriy)
        if(ring) ring.style.display = 'none';
        
        // Tugmani chiqarish
        if (enterBtn) {
            enterBtn.style.display = 'block';
            enterBtn.style.animation = 'fI 1s forwards';
        }
    }, 5500);
};

// Agar foydalanuvchi hozirgi sahifada qolishni istasa (contentni ko'rish uchun)
// loader ustiga bosganda yoki biror amal bajarganda yopiladigan qilish mumkin.
// Lekin sizning so'rovingizga ko'ra, asosiy yo'nalish tugma orqali Vercel saytiga o'tish.
