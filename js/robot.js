cardArray = [
    'fool',
    'magician',
    'priestess',
    'empress',
    'emperor',
    'hierophant',
    'lovers',
    'chariot',
    'strength',
    'hermit',
    'wheel',
    'justice',
    'hanged',
    'death',
    'temperance',
    'devil',
    'tower',
    'star',
    'moon',
    'sun',
    'judgement',
    'world'
];

$(function(){
    initComponet();  
})

function initComponet(){

    //抽单张塔罗牌
    $("#drawSingle").click(function(){

        var card = cardArray[Math.floor(Math.random()*21)];
        var htmlStr = "<img id=\"drawResult\" src=\"../img/" + card + ".png\" class=\"center-block\"></img>";


        $(result).html(htmlStr);
    })
}

//初始化牌阵
function initCard(cardArray){

}