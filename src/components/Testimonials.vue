<template>
    <div class="main">
        <img class="shape1" src="../assets/Vector-t.png" alt="">
        <img class="shape2" src="../assets/Vector-t2.png" alt="">
        <div class="title">Testimonials</div>
        <img class="logo" src="../assets/logos_ibm.png" alt="">
        <div class="text">Being a freelancer is a rollercoaster of <br class="text-br">emotions. <br class="text-br2">
            We built Slate to keep your <br class="text-br"> freelance business less stressful. <br class="text-br2">
            <span class="text-hide"> We'd love to show you what we're building...</span></div>
        
        <div class="designer">
            <img src="../assets/avatar.png" alt="">
            <div class="author">
                <div class="name">Esther Webb</div>
                <div class="job">Designer</div>
            </div>
        </div>

        <button class="btn">All Testimonials</button>
    </div>
</template>

<style scoped>
.main{
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-bottom: 100px;
}

.text-br{
    display: none;
}

.logo{
    margin-bottom: 50px;
    width: 150px;
    height: 60px;
}

.title{
    font-size: 36px;
    font-weight: 450;
    color: #20262A;
    margin-bottom: 50px;
}

.text{
    font-size: 19px;
    line-height: 30px;
    letter-spacing: 0.2px;
    margin-bottom: 50px;
}

.designer{
    display: flex;
    align-items: center;
}

.author{
    margin-left: 23px;
    text-align: left;
}

.name{
    font-size: 18px;
    color: #20262A;
}

.job{
    font-size: 18px;
    color: #5C5C5C;
}

.shape1{
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
}

.shape2{
    position: absolute;
    top: 60%;
    left: 10%;
    z-index: -1;
}

.btn {
    margin-top: 50px;
    width: 255px;
    height: 52px;
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

        .text-br2{
            display: none;
        }

        .text-hide{
            display: none;
        }

        .shape1{
            width: 50%;
        }

        .shape2{
            left: 0%;
        }
 }
</style>