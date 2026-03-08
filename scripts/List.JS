function func1(){

    const storage = [];

    const selector = document.querySelector('.put1');
    const input = selector.value;

    storage.push(input);
    console.log(storage);
    
    selector.value = ''; 

}

