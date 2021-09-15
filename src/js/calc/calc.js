const Type = document.getElementById('calc-type'),
    Material = document.getElementById('calc-type-material'),
    Input = document.getElementById('calc-input'),
    Total = document.getElementById('calc-total');

export const calc = () => {
    if (Number(Type.value) && Number(Material.value) && Number(Input.value)) {
        console.log('ku');
        const result = Math.floor(Type.value * Material.value * Input.value * 1000);
        Total.value = result;
        localStorage.setItem('calc', result);
    }
};
