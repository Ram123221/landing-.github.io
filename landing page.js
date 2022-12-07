const introImgEle= document.getElementById("introduction-img");
const registerImgEle= document.getElementById("register-img");

// console.log(plus_minus_symbols);
// const paragraph_for_plus_minus = document.querySelectorAll()

const time= document.querySelectorAll(".time");
// console.log(time);
const hours_tens= time[0].querySelectorAll("span")[1];
const hours_ones= time[0].querySelectorAll("span")[2];
const minutes_tens= time[1].querySelectorAll("span")[1];
const minutes_ones= time[1].querySelectorAll("span")[2];
const seconds_tens=time[2].querySelectorAll("span")[1];
const seconds_ones=time[2].querySelectorAll("span")[2];
function scroll_func()
{
    // console.log(window.scrollY);
    const distance= window.scrollY;
    introImgEle.style.transform=`scale(1.35) translateY(${distance * 0.13}px)`;
    // registerImgEle.style.transform=`scale(1.4) translateY(${distance* 0.0094}px)`;
    const i=0;
    // while(i<=60)
    // {
        //     registerImgEle.style.transform=`scale(1.4) translateY(${i * 0.1}px)`;
        // }
    }
    
window.addEventListener("scroll", scroll_func);

plus_minus_toggling();
function plus_minus_toggling()
{
    const plus_minus_symbols = document.querySelectorAll(".description-toggle > div > span");
    plus_minus_symbols.forEach(function(symbol)
    {
        symbol.addEventListener("click", function()
        {
            // console.log(this.parentElement.parentElement);
            // console.log((this.parentElement.parentElement).lastElementChild);
            // console.log((this.parentElement.parentElement).querySelector("p"));
            const another_span = this.parentElement.querySelectorAll("span")[1];//this.nextSibling gives text so I tried this.nextElementSibling
            const prev_span = this.parentElement.querySelectorAll("span")[0];
            // console.log(prev_span);
            // console.log(another_span);
            // // this.classList.add("hide");
            // if(!this.classList.contains("hide"))
            // {
            //     this.classList.add("hide");
            // }
            // if(another_span.classList.contains("hide"))
            // {
            //     another_span.classList.remove("hide");
            // }
    
            // console.log(this.parentElement.querySelectorAll("span")[1])
    
            // console.log(!this.classList.contains("hide"))
            if(this.classList.contains("show") && this==prev_span)//this here refers to particular span element(i.e. plus containing element) and if span doesnot have class="show", else will be executed
            {
                prev_span.classList.add("hide");
                prev_span.classList.remove("show");
                another_span.classList.remove("hide");
                another_span.classList.add("show");
            }
            else//executed when minus sign appears
            {
                another_span.classList.add("hide");
                another_span.classList.remove("show");
                prev_span.classList.add("show");
                prev_span.classList.remove("hide");
            }
            const grandParent_of_this = this.parentElement.parentElement;
            const last_paragraph= grandParent_of_this.lastElementChild;
            if(last_paragraph.classList.contains("hide-p"))
            {
                last_paragraph.classList.remove("hide-p");
                last_paragraph.classList.add("show-p");
            }
            else
            {
                last_paragraph.classList.remove("show-p");
                last_paragraph.classList.add("hide-p");
            }
            // console.log(grandParent_of_this.querySelector('p').classList); //didn't work
            // console.log(grandParent_of_this.lastElementChild.classList);
        });
    });
}

window.onload=function showTime()
{
    let local_time= new Date();
    // console.log(local_time);
    let hours= local_time.getHours();
    // console.log((""+hours).split(""));
    let minutes= local_time.getMinutes();
    let seconds= local_time.getSeconds();

//    (hours<10)?(hours_tens.innerText="0", hours_tens.innerText=`${hours}`):(hours_tens.innerText=)
     if(hours<10)
     {
        hours_tens.innerText="0";
        hours_ones.innerText= hours;
     }
     else
     {
        let splitted_hours= (""+hours).split("");
        hours_tens.innerText=splitted_hours[0];
        hours_ones.innerText=splitted_hours[1];
     }

     if(minutes<10)
     {
        minutes_tens.innerText="0";
        minutes_ones.innerText= minutes;
     }
     else
     {
        let splitted_minutes= (""+minutes).split("");
        minutes_tens.innerText=splitted_minutes[0];
        minutes_ones.innerText=splitted_minutes[1];
     }

     if(seconds<10)
     {
        seconds_tens.innerText="0";
        seconds_ones.innerText= seconds;
     }
     else
     {
        let splitted_seconds= (""+seconds).split("");
        seconds_tens.innerText=splitted_seconds[0];
        seconds_ones.innerText=splitted_seconds[1];
     }
     setInterval(showTime,1000);
}

//for increasing number from 0 to 200
const increasing_num= document.querySelectorAll(".num-with-plus");
// console.log(increasing_num);
const records_section= document.querySelector("#records");

    // increasing_num.forEach((num)=>
    // {
    //     num.innerText="0";
    //     function increasing_num_func()
    //     {
    //             num.innerText++;
    //     }
    //     // let count_interval=setInterval(increasing_num_func,10);
    //     if(num.innerText=="200")
    //     {
    //         clearInterval(count_interval);
    //     }
    // });

    console.log(window.scrollY);
    console.log(records_section.offsetTop+730);
    let start=false;
    window.onscroll=function()
    {
        if(window.scrollY>=(records_section.offsetTop+730))
        {
                if(!start)
                {
                increasing_num.forEach((num)=>{increasing_num_func(num);});
                }
                start=true;
        }
    }
    function increasing_num_func(a_ele)
    {
        let max=200;
        let count=setInterval(()=>
        {
                a_ele.innerText++;
                if(a_ele.innerText==max)
                clearInterval(count);
        },5);
    }

//for day switching
const dayDivEle= document.querySelectorAll(".day");
const daySpanEle= document.querySelectorAll(".day > span");

const objectForSchedule= {
0:[{"am-or-pm": "0:00 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "0:00 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "0:00 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "0:00 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "0:00 PM", "name": "HELLO!!", "Event":"Some events for hello"},] ,
1:[{"am-or-pm": "5:55 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "5:55 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "5:55 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "5:55 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "5:55 PM", "name": "HELLO!!", "Event":"Some events for hello"},] ,
2:[{"am-or-pm": "4:44 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "4:44 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "4:44 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "4:44 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "4:44 PM", "name": "HELLO!!", "Event":"Some events for hello"},] ,
3:[{"am-or-pm": "2:22 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "2:22 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "2:22 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "2:22 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "2:22 PM", "name": "HELLO!!", "Event":"Some events for hello"},] ,
4:[{"am-or-pm": "1:11 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "1:11 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "1:11 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "1:11 PM", "name": "HELLO!!", "Event":"Some events for hello"},{"am-or-pm": "1:11 PM", "name": "HELLO!!", "Event":"Some events for hello"},] ,
};

const containerOfScheduleBlocks=document.querySelector("#collection-of-blocks");
const scheduleContainers= document.querySelectorAll(".schedule-blocks-inner-container");
// console.log(scheduleContainers[0]);


// console.log(dayDivEle);
dayDivEle.forEach((oneDayEle)=>
{
    oneDayEle.addEventListener("click",function()
    {
        // console.log(this.dataset.id);
        dayDivEle.forEach((ele)=>
        {
            const ele_span= ele.lastElementChild;
            ele.classList.remove("day-active");
            ele_span.classList.remove("hide");
        });
        daySpanEle.forEach((span_el)=>
        {
            span_el.classList.remove("day-span-active");
        });
        if(!this.classList.contains("day-active"))
        {
            this.classList.add("day-active");//you can use toggle function too
            // console.log(this.lastElementChild);
            let spanChild=this.lastElementChild;
            spanChild.classList.add("day-span-active");
            // console.log(this.previousElementSibling);
                let prevSibling=this.previousElementSibling;
                let prevSiblingSpan=prevSibling.lastElementChild;
                prevSiblingSpan.classList.add("hide");
        }

        // console.log(objectForSchedule[this.dataset.id][0]["am-or-pm"]);
        // console.log(scheduleContainers[this.dataset.id]);
        containerOfScheduleBlocks.innerHTML="";
        for(i=0; i<5;i++)//i is used for the index of array inside the object
        {
            containerOfScheduleBlocks.innerHTML+=`<div class="schedule-blocks-inner-container">
            <div class="time-name">
            <h1 class="am-or-pm">${objectForSchedule[this.dataset.id][i]["am-or-pm"]}</h1>
            <p>${objectForSchedule[this.dataset.id][i]["name"]}</p>
            </div>
        <div class="description-toggle">
            <div>
                <p>${objectForSchedule[this.dataset.id][i]["Event"]}</p>
                <span class="show"><i class="fa fa-plus"></i></span>
                <span class="hide"><i class="fa fa-minus"></i></span>
            </div>
            <div class="arrow"></div>
            <div class="arrow"></div>
            <p class="hide-p">After completing the registration form at one of Intense Terminals, where visitors should state their personal information and contacts, they will be invited to the breakfast devoted to the opening of our event. If you register first, you’ll receive additional bonuses, so hurry up!</p>
        </div>
        </div>`;
        console.log(containerOfScheduleBlocks.innerHTML);
        }
        plus_minus_toggling();
    });
});


// const footerSmallCircles= document.getElementsByTagName("#people-say-text div#small-circles > span");
const footerSmallCircles= document.querySelectorAll("#people-say-text div#small-circles > span");
const quotations= document.querySelectorAll("#quotations-container > .quotations");
console.log(footerSmallCircles);
footerSmallCircles.forEach((one_circle)=>
{
    one_circle.addEventListener("click",function()
    {
        if(!this.classList.contains("circle-active"))
        {
            footerSmallCircles.forEach((a_circle)=>
            {
                a_circle.classList.remove("circle-active");
            });
            this.classList.add("circle-active");
            if(this==footerSmallCircles[1])
            {
                quotations[0].classList.remove("quotations-show");
                quotations[0].classList.add("quotations-hide-first");
                quotations[1].classList.remove("quotations-hide-second");
                quotations[1].classList.add("quotations-show");
            }
            if(this==footerSmallCircles[0])
            {
                quotations[1].classList.remove("quotations-show");
                quotations[1].classList.add("quotations-hide-second");
                quotations[0].classList.remove("quotations-hide-first");
                quotations[0].classList.add("quotations-show");
            }
        }
    });
});