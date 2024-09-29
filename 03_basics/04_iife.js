// Immediately Invoked Function Expression (IIFE)

//named IIFE
(function chai(){
    console.log('DB conected')
})();

//unamed IIFE
((namse) =>{
    console.log(`DB disconnected ${namse}`);
})('harsh');