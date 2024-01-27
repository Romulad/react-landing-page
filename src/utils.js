export const writeText = (elId, inter) =>{
    let element = document.getElementById(elId);
    let textToWrite = element.textContent;

    element.textContent = "";
    element.classList.remove('d-none');

    let i = 0
    let int = setInterval(() => {
        if(i<textToWrite.length){
            element.textContent += textToWrite[i]
            i++
        }else{
            clearInterval(int)
        }
    }, inter);
};

export const countNumber = (num, elRef, inter, end="") =>{
    // let element = document.getElementById(elId);

    elRef.current.textContent = "";
    elRef.current.classList.remove('d-none');

    let i = 0
    let int = setInterval(() => {
        if(i <= num){
            elRef.current.textContent = i++;
        }else{
            if(end){
                elRef.current.textContent += end 
            }
            clearInterval(int)
        }
    }, inter);
};

export const isVisibleByC = (elRef="", elId, exact=false, onBottom=false) =>{
        let elem = elRef ? elRef.current : document.getElementById(elId);
        let scrollLen = window.scrollY;
        let innerH = window.innerHeight;
        let viewpToEl = elem.getBoundingClientRect().top;
        let viewpToElAtB = elem.getBoundingClientRect().bottom;
        if(onBottom){
            return innerH > viewpToElAtB
        }else{
          return exact ? (innerH/2) >= viewpToEl : innerH/1.03 > viewpToEl   
        }
};