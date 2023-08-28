const increment=document.getElementById('increment');
const decrement=document.getElementById('decrement');
const reset=document.getElementById('reset');
const changeby=document.getElementById('changeby');
const value=document.querySelector('.value');



increment.addEventListener('click', () => {
    value.textContent = +value.textContent + changeby.valueAsNumber;
  });

decrement.addEventListener('click',()=>{
    value.textContent= +value.textContent - changeby.valueAsNumber;
})

changeby.addEventListener('change', () => {
    const changebyValue = changeby.valueAsNumber;
  
    if (Number.isNaN(changebyValue)) {
      changeBy.value = 1;
    } else if (changebyValue < 0) {
      changeBy.value = 1;
    }
  });

reset.addEventListener('click', ()=>{
    value.textContent=0;
})