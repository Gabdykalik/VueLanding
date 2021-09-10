<template>
    <div>
        <div class="main">
            <div class="slogan">
                Just type
            </div>
            <div class="main__text">
                Fastest way <br class="text-br"> to navigate
            </div>
            <div class="main__info">
                Most calendars are designed <br class="text-br">for teams. Slate is <br>
                designed for freelancers.
            </div>
            <div class="btn">
                <button class="download">
                    Download
                </button>
                <button class="see">
                    See Walkthrough
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .main {
        padding-top: 800px;
        position: relative;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.22) 7.62%, rgba(0, 225, 198, 0.06) 25.5%, #FFFFFF 70.92%);
    }

    .slogan{
        text-align: center;
        color: #F3CD03;
        font-size: 36px;
        margin-bottom: 17px;
    }

    .text-br{
        display: none;
    }

    .main__text {
        font-size: 56px;
        font-weight: bold;
        text-align: center;
        color: #20262A;
    }

    .main__info {
        margin-top: 37px;
        text-align: center;
        font-size: 24px;
    }

    
    .btn {
        margin-top: 84px;
        display: flex;
        justify-content: center;
    }

    .download {
        background: #00B6F0;
        border-radius: 85px;
        padding: 16px 46px;
        border: none;
        color: #fff;
        font-weight: 700;
        margin-right: 25px;
        transition: 0.3s;
    }

    .download:hover{
        background-color: #F3CD03;
    }

    .see {
        background: #fff;
        border-radius: 85px;
        padding: 16px 46px;
        border: none;
        color: #20262A;
        font-weight: 700;
        border: 1px solid black;
        transition: 0.3s;
    }

    .see:hover{
        background-color: #F3CD03;
        border-color: white;
    }

    @media screen and (max-width: 920px) {
        .main{
            padding-top: 500px;
        }

        .text-br{
            display: block;
        }

        .btn{
            flex-direction: column;
        }

        .download{
            padding: 20px 102px;
            width: 311px;
            margin: 0 auto;
        }
        .see{
            padding: 20px 75px;
            margin: 10px auto;
            width: 311px;
        }
    }

    @media screen and (max-width:500px) {
        .main{
            padding-top:200px;
        }
    }
</style>