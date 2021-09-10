<template>
    <div class="main">
    <div class="inner">
        <div class="info">
            <div class="title">
                OpenType features
            </div>

            <div class="text">
                Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
            </div>

            <a href="">Learn More</a>
        </div>

        <img class='photo' src="../assets/OpenType.png" alt="">
    </div>
        <img class='bg' src="../assets/Vector.png" alt="">
    </div>
</template>

<style scoped>
    .main{
        padding-top: 100px;
        position: relative;
        display: flex;
    }
    .inner{
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 150px auto;
        align-items: center;
    }

    .info{
        width: 36%;
        margin-left: 10%;
    }

    .title{
        font-size: 36px;
        color: #20262A;
        font-weight: 500;
        margin-bottom: 17px;
    }
    
    .text{
        font-size: 24px;
        line-height: 38px;
        margin-bottom: 17px;
    }
    
    .info a{
        text-decoration: none;
        text-transform: uppercase;
        color: #00B6F0;
    }

    .info a:after{
        display: block;
        content: "";
        border-top: 1px solid black;
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
        transform-origin:  0% 50%;
        width: 90px;
        border-color: #00B6F0;
    }

    .info a:hover:after { 
        transform: scaleX(1);
    }


    .bg{
        position: absolute;
        z-index: -1;
        right: 0;
        top: 13%;
    }

    @media screen and (max-width: 920px) {
        .inner{
            flex-direction: column-reverse;
            text-align: center;
        }
        
        .photo{
            width: 90%;
        }

        .bg{
            width: 40%;
        }
    }

    @media screen and (max-width: 500px) {
     .info{
         width: 80%;
     }
    
    .bg{
        top: 20%;
    }
    }
</style>