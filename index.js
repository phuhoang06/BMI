function tinhcs(){
    let chieucao = document.getElementById('chieucao').value;
    let cannang = document.getElementById('cannang').value
    let bmi = cannang/(Math.pow(chieucao, 2));
    let demo = '';
    if (bmi < 16) {
        demo = "Gầy độ 3. Ăn thật nhiều vào nhé"
    }else if (bmi < 17) {
        demo = "Gầy độ 2"
    }else if (bmi<18.5){
        demo = 'bạn gầy độ 1'
    }
    else if (bmi < 25) {
        demo = "Bình thường"
    }else if (bmi < 30) {
        demo = "Thừa cân"
    }else if (bmi < 35) {
        demo = "Béo phì độ 1"
    }else if (bmi < 40) {
        demo = "Béo phì độ 2"
    }else {
        demo = 'Béo phì độ 3, Ăn ít thôi con lợn'
    }
    document.getElementById('demo').innerText = `Chỉ số BMI của bạn là: ${bmi} ,${demo}`


}