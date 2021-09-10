<template>
    <div>
        <div class="header">
            <a href=""><img src="../assets/logo.png" alt=""></a>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <button>Login</button>
        </div>
    </div>
</template>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 50px auto;
        align-items: center;
    }

    .header img{
        width: 186px;
        height: 58px;
    }

    ul{
        display: flex;
        width: 35%;
        justify-content: space-between;
        list-style: none;
    }

    ul a{
        font-size: 18px;
        text-decoration: none;
        color: #20262A;
        font-weight: 500;
    }
    
    ul a:before{
        display: block;
        content: "";
        border-top: 1px solid black;
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
        transform-origin:  0% 50%;
    }

    ul a:hover:before { 
        transform: scaleX(1);
    }

    button{
        display: flex;
        border: 1px solid #00B6F0;
        widows: 140px;
        height: 52px;
        border-radius: 85px;
        padding: 20px 36px;
        color: #00B6F0;
        font-size: 18px;
        align-items: center;
        background-color: #fff;
        font-weight: 700;
        transition: ease-in-out 0.3s;
    }

    button:hover{
        background-color: #00B6F0;
        color: #fff;
    }

    @media screen and (max-width: 1200px){
        ul{
            width: 40%;
        }
    }

    @media screen and (max-width: 850px) {
        ul{
            display: none;
        }
    }
</style>