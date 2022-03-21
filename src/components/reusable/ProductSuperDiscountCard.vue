<template>
  <div class="discount-card__container">
    <div class="d-flex">
      <div class="col-4 t-shirt-background">
        <img src="../../assets/images/hoodie.png" class="t-shirt__style" alt="">
      </div>
      <div class="col-8">
        <div class="mb-4 mt-2 discount__container"><div style="transform: translateY(-2px)">${{discount}}</div></div>
        <div class="fw-400 fs-16 text-main o-9 fw-500 text-white">{{title}}</div>
        <div class="d-flex">
          <img v-for="index in stars" class="star-positioner" :key="index" src="../../assets/images/star.png" alt="">
        </div>
        <div class="d-flex mt-3">
          <div class="fw-600 mr-2 trending-color">-{{percentage}}%</div>
          <div class="fs-14 d-flex o-7 align-items-end text-white">Compared to last price</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'stars', 'percentage', 'discount'],
  data: ()=>{
    return{

    }
  }
}
</script>
<style>
.discount__container{
  border-radius: 2px;
  color:white;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width:60px;
  height: 30px;
  background-image: linear-gradient(to bottom right, #ff9008, #ffc108);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.discount__container::before{
  content: "";
  width: 2px;
  border-radius: 3px;
  height: 20px;
  background-color: #ffc108;
  position: absolute;
  top:32px;
  left: 7px;
  transform: rotate(60deg);
  box-shadow: rgba(0, 0, 0, 0.84) 0px 3px 8px;

}
.discount-card__container{
  opacity: .8;
  margin: 10px;
  padding: 15px;
  background-image: linear-gradient(to bottom right, #301a3b, #1a1f3b);
  height: fit-content;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px, rgba(0, 0, 0, 0.35) 0px 2px 6px 2px;
  transition: all .01s ease;
}
.discount-card__container:hover{
  box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 2px 0px, rgba(0, 0, 0, 0.55) 0px 2px 6px 2px;
  cursor: pointer;
  opacity: 1;
}
.star-positioner{
  opacity: .9;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.t-shirt__style{
  transform: translateY(10px) scale(1.2);
  max-width: 120px;
  margin-right: 90px;
  transition: all .2s ease;
}
.t-shirt__style:hover{
  transform:  translateY(10px) scale(1.22);

}
.o-7{
  opacity: .7;
}

.o-9{
  opacity: .9;
}

.trending-color{
  color: #22b312;
}

</style>