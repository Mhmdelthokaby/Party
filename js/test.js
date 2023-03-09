let check = false

$('#open').click(()=>{
    
    if(check)
    {
        check = false
        $('.main').animate({marginLeft : "0"})
        $('#list').animate({padding: "0" , width: "0"})
    }
    else
    {
        check = true
        $('.main').animate({marginLeft : "250px"})
        $('#list').animate({padding: "1.5rem" , width: "250px"})
    }
})

$('#close').click(()=>{
    check = false
    $('.main').animate({marginLeft : "0"})
    $('#list').animate({padding: "0" , width: "0"})
})
// /////////////////////////////////
// end section 1

// start 2

$('#s1').click(()=>{
    // let l =1
    // 
    move(1)
})

$('#s2').click(()=>{
    // let l =2
    // $('#Singer2').slideToggle(1000)
    // for(let i=1;i<=4;i++)
    // {
    //     if(i!=l)
    //     {
    //         $(`#Singer${i}`).slideUp(1000)
    //     }
    // }
    move(2)
})

$('#s3').click(()=>{
    // let l =3
    // $('#Singer3').slideToggle(1000)
    // for(let i=1;i<=4;i++)
    // {
    //     if(i!=l)
    //     {
    //         $(`#Singer${i}`).slideUp(1000)
    //     }
    // }
    move(3)
})

$('#s4').click(()=>{
    // let l =4
    // $('#Singer4').slideToggle(1000)
    // for(let i=1;i<=4;i++)
    // {
    //     if(i!=l)
    //     {
    //         $(`#Singer${i}`).slideUp(1000)
    //     }
    // }
    move(4)
})

function move(x){
    $(`#Singer${x}`).slideToggle(1000)
    for(let i=1;i<=4;i++)
    {
        if(i!=x)
        {
            $(`#Singer${i}`).slideUp(1000)
        }
    }
}

// /////////////

let Counter = new Date("march 1, 2026 10:00:00").getTime();
console.log(Counter);
let now=new Date().getTime()
console.log(now);
setInterval(() => {
    let now=new Date().getTime()
    let temp=Counter-now


    let day=Math.floor(temp/(1000*60*60*24))
    temp %=(1000*60*60*24)
    let hour=Math.floor(temp/(1000*60*60))
    temp %=(1000*60*60)
    let min=Math.floor(temp/(1000*60))
    temp %=(1000*60)
    let sec=Math.floor(temp/(1000))

    let dayH=document.getElementById('day')
    let hourH=document.getElementById('hour')
    let minH=document.getElementById('min')
    let secH=document.getElementById('sec')

    dayH.innerHTML=day
    hourH.innerHTML=hour
    minH.innerHTML=min
    secH.innerHTML=sec

    if(temp<0)
    {
        clearInterval(1)
    }
}, 1000);

let maxChar=100
let n=document.getElementById('number')
$('#area').keyup(function(e){
    var l=$(this).val().length
    if(maxChar-l>0){
        n.innerHTML=maxChar-l
    }
    else{
        n.innerHTML="ERROR"
    }
}
    
)
