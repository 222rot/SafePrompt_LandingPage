
document.addEventListener('DOMContentLoaded', function() {
    
    AOS.init({ 
        duration: 800, 
        once: true 
    });
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error("Lucide nu a putut fi încărcat din CDN.");
    }
    
});