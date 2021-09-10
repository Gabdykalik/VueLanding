<template>
    <div class="main">
        <div class="inner">
            <div class="text1">We focus on ergonomic <br> meeting</div>
            <div class="text2">
               Being a freelancer is a rollercoaster of emotions. <br> We built Slate to keep your freelance business building... <br> <br> <br> Being a freelancer is a rollercoaster of emotions. <br> We built Slate to keep your freelance business <br> building...
               <div class="btn"><button class="get">Get Started</button></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    padding: 100px 0;
    background: linear-gradient(180deg, #E9FAFF 0%, rgba(233, 250, 255, 0) 100%);
}

.inner{
    display: flex;
    width: 85%;
    justify-content: space-evenly;
    margin: 0 auto;
}

.text1{
    color: #20262A;
    font-size: 36px;
    line-height: 42px;
}

.text2{
    font-size: 19px;
    line-height: 30px;
    color: #5C5C5C;
}

.btn{
    margin-top: 30px;
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

 .text1{
     margin-bottom: 40px;
 }
 }

</style>