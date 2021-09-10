<template>
    <div class="main">
    <div class="inner">
        <img class="bg" src="../assets/Frame.png" alt="">
        <div class="info">
            <div class="title">
                Variable fonts
            </div>

            <div class="text">
                Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
            </div>

            <a href="">Learn More</a>
        </div>
    </div>
    </div>
</template>

<style scoped>
    .main{
        position: relative;
        display: flex;
    }
    .inner{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 150px auto;
        align-items: center;
    }

    .info{
        width: 36%;
        margin-right: 10%;
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

    

    

    @media screen and (max-width: 920px) {
        .inner{
            flex-direction: column;
            text-align: center;
        }

        .bg{
            position: absolute;
            left: 0;
            top: 0;
            width: 90%;
        }

        .info{
            margin-top: 400px;
            margin-right: 0;
        }
    }
    
    @media screen and (max-width: 500px) {
     .info{
         width: 90%;
         margin-top: 100px;
     }   
    }
</style>