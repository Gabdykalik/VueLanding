<template>
    <div>
        <div class="main">
            <div class="main__text">
                Lightning fast <br>
                prototyping
            </div>
            <div class="main__info">
                Most calendars are designed for teams. Slate is <br>
                designed for freelancers.
            </div>
            <div class="btn">
                <button class="get">
                    Get Started
                </button>
                <button class="try">
                    Try For Free
                </button>
            </div>
            <div class="screen-img">
                <img class="screen" src="../assets/screen.png" alt="">
            </div>
            <div class="main__image-left">
                <img src="../assets/left.svg" alt="">
            </div>
            <div class="main__image-right">
                <img src="../assets/right.svg" alt="">
            </div>
        </div>
    </div>
</template>


<style scoped>
    .main {
        padding-top: 100px;
        padding-bottom: 400px;
        position: relative;
        z-index: 1;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.22) 7.62%, rgba(0, 225, 198, 0.06) 25.5%, #FFFFFF 70.92%);
    }

    .main__text {
        font-size: 72px;
        font-weight: 900;
        text-align: center;
        color: #112D57;
    }

    .main__info {
        margin-top: 37px;
        text-align: center;
        font-size: 24px;
    }

    

    .main__image-left {
        position: absolute;
        top: 30%;
        z-index: -2;
    }

    .main__image-right {
        position: absolute;
        right: 0%;
        top: 55%;
        z-index: -2;
    }
    .screen-img {
            position: absolute;
            z-index: -1;
            top: 53%;
            width: 100%;
        }

    .screen {
        width: 100%;
    }

    .btn {
        margin-top: 84px;
        display: flex;
        justify-content: center;
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

    .try {
        background: #fff;
        border-radius: 85px;
        padding: 16px 46px;
        border: none;
        color: #20262A;
        font-weight: 700;
        border: 1px solid black;
        transition: 0.3s;
    }

    .try:hover{
        background-color: #F3CD03;
        border-color: white;
    }

    @media screen and (max-width: 850px) {
        .main__text{
            font-size: 56px;
        }
        
        .main{
            padding-bottom: 200px;
        }

        .screen-img{
            top: 70%;
        }
    }

    
    @media screen and (max-width: 500px) {
     .btn{
         margin-bottom: 50px;
         flex-direction: column;
         align-items: center;
     }   

     .get{
         padding: 16px 80px;
         margin-right: 0;
         margin-bottom: 10px;
     }
     
     .try{
         padding: 16px 80px;
     }
    }
</style>