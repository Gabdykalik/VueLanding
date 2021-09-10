<template>
    <div class="main">
        <div class="title">A rethink of <br class="text-br"> how we work</div>
        <div class="text">Being a freelancer is<br class="text-br">a rollercoaster of emotions. We built Slate to keep your</div>
        <div class="progressbar">
            <div class="progressbar-main">
                <div class="progressbar-left">

                </div>
            </div>
        </div>
        <div class="progressbar-info">
            <div class="progressbar-fb">
                Facebook
            </div>
            <div class="progressbar-num">
                35,929
            </div>
        </div>
        <button class="btn">
            Get Started For Free
        </button>
    </div>
</template>

<style scoped>
.main{
    text-align: center;
    margin-bottom: 200px;
}

.text-br{
    display: none;
}

.title{
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 17px;
}

.text{
    font-size: 19px;
    font-weight: 400;
    color: #5C5C5C;
}

.progressbar {
    display: flex;
    justify-content: center;
    margin-top: 100px;
}

.progressbar-main {
    width: 757px;
    height: 15px;
    background-color: #F3F5F8;
    border-radius: 9.5px;
}

.progressbar-left {
    width: 377.65px;
    height: 15px;
    background-color: #00B6F0;
    border-radius: 9.5px;
}

.progressbar-info {
    display: flex;
    justify-content: center;
    margin-top: 14px;
}

.progressbar-fb {
    margin-right: 630px;
}

.btn {
    margin-top: 50px;
    padding: 16px 46px;
    background-color: #00B6F0;
    border-radius: 85px;
    color: #FFF;
    border: none;
    font-weight: 700;
    transition: 0.3s;
}

.btn:hover{
    background-color: #F3CD03;
    border-color: white;
}

 @media screen and (max-width: 850px) {
        .text-br{
            display: block;
        }

        .progressbar-main{
            width: 390px;
        }

        .progressbar-left{
            width: 200px;
        }
        
        .progressbar-fb{
            margin-right: 250px;
        }
    }

    @media screen and (max-width: 500px){
        .progressbar-main{
            width: 300px;
        }

        .progressbar-left{
            width: 150px;
        }

        .progressbar-fb{
            margin-right: 150px;
        }
    }

</style>