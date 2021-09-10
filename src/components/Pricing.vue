<template>
    <div class="main">
        <div class="inner">
            <div class="text1">
                <div class="title1">Pricing</div>
                <div class="description1">Most calendars are designed for teams. Slate is <br> designed for freelancers who want a simple <br> way to plan their schedule.</div>
            </div>
            <div class="text2">
                <div class="title2">30-DAY FREE TRIAL</div>
                <div class="cost">
                    <div class="price">$5</div>
                    <div class="duration">/month per <br> user</div>
                </div>
                <div class="description2">Most calendars are designed <br class="br-hide"> for teams.</div>
                <button class="get">Get Started</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    padding: 100px 0;
    background-color: #182333;
}



.inner{
    display: flex;
    width: 85%;
    color: #fff;
    justify-content: space-evenly;
    margin: 0 auto;
}

.title1{
    font-weight: 700;
    font-size: 56px;
}

.description1{
    margin-top: 16px;
    font-weight: 450;
    font-size: 19px;
    line-height: 30px;
    letter-spacing: 0.2px;}

.title2{
    font-size: 18px;
    margin-bottom: 10px;
}

.text2{
    width: 30%;
}

.cost{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.price{
    color: #F3CD03;
    font-weight: 700;
    font-size: 72px;
    margin-right: 10px;
}

.duration{
    font-size: 24px;
    font-weight: 400;
}

.description2{
    font-size: 19px;
    line-height: 30px;
    margin-bottom: 20px;
}

.get {
    background: #00B6F0;
    border-radius: 85px;
    padding: 16px 46px;
    border: none;
    color: #fff;
    font-weight: 700;
    margin-right: 25px;
    transition: 0.3s;
 }

.get:hover{
    background-color: #F3CD03;
 }

 @media screen and (max-width: 850px) {
     .inner{
         flex-direction: column;
         text-align: center;
     }

     .text2{
         display: flex;
         flex-direction: column;
         margin: 80px auto;
         align-items: center;
     }

     .title2{
         font-size: 24px;
         margin-bottom: 30px;
     }

     .br-hide{
         display: none;
     }

    .get{
        margin-left: 15px;
    }
 }
 
    @media screen and (max-width: 500px) {
     .text2{
         width:90%;
     }   
    }
</style>