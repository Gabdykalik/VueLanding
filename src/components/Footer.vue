<template>
    <div>
        <div class="header">
            <div class="logo">
            <a href=""><img src="../assets/logo.png" alt=""></a>
            <div class="slogan">Just type what's on your mind</div>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div class="media">
                <a class="twitter" href=""><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                <a class="facebook" href=""><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                <a class="linkedin" href=""><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            </div>
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

    .slogan{
        font-size: 18px;
        color: #5C5C5C;
    }

    .media{
        display: flex;
        font-size: 40px;
        justify-content: space-between;
        width: 15%;
    }

    .media a{
        color: #112D57;
        transition: 0.3s;
    }

    .twitter:hover{
        color: #1DA1F2;
    }

    .facebook:hover{
        color: 	#4267B2;
    }

    .linkedin:hover{
        color: #0077b5;
    }

    @media screen and (max-width: 850px) {
        .header{
            flex-direction: column;
            text-align: center;
        }

        .header ul{
            flex-direction: column;
            margin-bottom: 40px;
        }

        li{
            margin-bottom: 20px;
        }

        .logo{
            margin-bottom: 50px;
        }

        .media{
            width: 30%;
        }
    }

    @media screen and (max-width:500px) {
        .media{
            width: 50%;
        }
    }
</style>