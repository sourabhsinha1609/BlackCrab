body{
    margin:0;
    padding:0;
    display:flex;
    height: 100vh;
    justify-content:center;
    align-items:center;
    font-family:sans-serif;
    background:#222;
    .indicator{
      position:relative;
      width:50px;
      height:50px;
      
      transform:rotate(45deg);
      span{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        box-sizing:border-box;
        border:none;
        border-bottom:3px solid #fff;
        border-right:3px solid #fff;
        animation:animate 1s linear infinite;
        &:nth-child(1){
          top:-30px;
          left:-30px;
          animation-delay:0s;
        }
        &:nth-child(2){
          top:-15px;
          left:-15px;
          animation-delay:0.2s;
        }
        &:nth-child(3){
          top:0;
          left:0;
          animation-delay:0.4s;
        }
        &:nth-child(4){
          top:15px;
          left:15px;
          animation-delay:0.6s;
        }
        &:nth-child(5){
          top:30px;
          left:30px;
          animation-delay:0.8s;
        }
      }
    }
  }
  @keyframes animate{
    0%{
      border-color:#fff;
      transform:translate(0,0);
    }
     20%{
      border-color:#fff;
       transform:translate(15px,15px);
    }
     20.1%,100%{
      border-color:#ffd64a;
    }
}