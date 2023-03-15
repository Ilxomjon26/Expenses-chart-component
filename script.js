$(document).ready(function(){
    fetch("data.json").then((response) => {
        return response.json();
    }).then((data) => {
        const data2 =data;
        $("#amount-mon").text("$" + data2[2].amount)
        $("#amount-se").text("$" + data2[0].amount)
        $("#amount-cho").text("$" + data2[6].amount)
        $("#amount-pay").text("$" + data2[1].amount)
        $("#amount-jum").text("$" + data2[4].amount)
        $("#amount-sha").text("$" + data2[3].amount)
        $("#amount-yak").text("$" + data2[5].amount)
        $(".mon").text(data2[0].day)
        $(".se").text(data2[1].day)
        $(".cho").text(data2[2].day)
        $(".pay").text(data2[3].day)
        $(".jum").text(data2[4].day)
        $(".sha").text(data2[5].day)
        $(".yak").text(data2[6].day)
    })
   
    $(".div1").hide()
    $(".div2").hide()
    $(".div3").hide()
    // $(".div4").hide()
    $(".div5").hide()
    $(".div6").hide()
    $(".div7").hide()
    $(".bir1").mouseenter(function(){
        $(".div2").show()
    }).mouseleave(function(){
        $(".div2").hide()
    })
    $(".yetti").mouseenter(function(){
        $(".div3").show()
    }).mouseleave(function(){
        $(".div3").hide()
    })
    $(".uch").mouseenter(function(){
        $(".div1").show()
    }).mouseleave(function(){
        $(".div1").hide()
    })
    $(".ikki2").mouseenter(function(){
        $(".div4").show()
    }).mouseleave(function(){
        $(".div4").hide()
    })
    $(".tort").mouseenter(function(){
        $(".div5").show()
    }).mouseleave(function(){
        $(".div5").hide()
    })
    $(".besh").mouseenter(function(){
        $(".div6").show()
    }).mouseleave(function(){
        $(".div6").hide()
    })
    $(".olti").mouseenter(function(){
        $(".div7").show()
    }).mouseleave(function(){
        $(".div7").hide()
    })

});