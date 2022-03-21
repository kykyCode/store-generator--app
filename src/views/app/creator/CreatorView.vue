<template>
  <div class="creator__container">
    <div class="col-8 m-0 p-0 preview">
      <div class="preview__navigation d-flex justify-content-between position-relative" v-bind:style="[customization.navigation.color ? {'background-color':customization.navigation.color}:{}]">
        <div v-if="customization.navigation.logo" class="navigation__logo ml-4">LOGO</div>
        <div class="d-flex justify-content-evenly">
          <div class="mx-4" v-if="customization.navigation.contact">Contact</div>
          <div class="mx-4" v-if="customization.navigation.about">About</div>
          <div class="mx-4">Account</div>
          <div class="mx-4">Logout</div>
        </div>
      </div>
      <div class="preview__main d-flex flex-wrap" style="min-height:100vh" v-bind:style="[customization.main.color? {'background-color':customization.main.color}:{}]">
        <div v-for="product in products" :key="product.id" v-bind:style="{'width': 100/customization.main.columns + '%'}" class="d-flex justify-content-center" style="height: fit-content">
            <div class="editor-product__container" v-bind:style="{'border-radius': computedRadius}">
              <div class="d-flex justify-content-between align-center">obrazek</div>
              <div>{{product.name}}</div>
            </div>
        </div>
      </div>
      <div class="preview__footer py-3" v-bind:style="[customization.footer.color? {'background-color': customization.footer.color}:{}]">
        <div class="container d-flex">
          <div class="col-4">logo</div>
          <div class="col-4">{{customization.footer.text}}</div>
          <div class="col-4 d-flex">
              <a :href="'https://'+customization.footer.facebookUrl" target="_blank"><fa v-if="customization.footer.facebook" class="mx-3 fa-style facebook" :icon="[ 'fab', 'facebook' ]"/></a>
              <a :href="'https://'+customization.footer.tiktokUrl" target="_blank"><fa v-if="customization.footer.tiktok" class="mx-3 fa-style tiktok" :icon="[ 'fab', 'tiktok' ]" /></a>
              <a :href="'https://'+customization.footer.instagramUrl" target="_blank"><fa v-if="customization.footer.instagram" class="mx-3 fa-style instagram" :icon="[ 'fab', 'instagram' ]" /></a>
              <a :href="'https://'+customization.footer.youtubeUrl" target="_blank"><fa v-if="customization.footer.youtube" class="mx-3 fa-style youtube" :icon="[ 'fab', 'youtube' ]" /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-3 col-4 panel py-3 px-3">
      <div class="editor__header">EDITOR TOOL</div>
      <div class="navigation__section">
        <div class="mt-4 o-5 fw-600" style="">NAVIGATION SECTION</div>
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-2 mr-4 fs-14 fw-600 o-5">Logo</div>
            <SwitchBox v-model="customization.navigation.logo" :isActive="customization.navigation.logo"></SwitchBox>
          </div>
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-2 mr-4 fs-14 fw-600 o-5">About</div>
            <SwitchBox v-model="customization.navigation.about" :isActive="customization.navigation.about"></SwitchBox>
          </div>
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-2 mr-4 fs-14 fw-600 o-5">Contact</div>
            <SwitchBox v-model="customization.navigation.contact" :isActive="customization.navigation.contact"></SwitchBox>
          </div>
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-2 mr-4 fs-14 fw-600 o-5">Color</div>
            <input v-model="customization.navigation.color" class="color-picker" type="color"/>
          </div>
      </div>
      <div class="main__section">
        <div class="mt-5 o-5 fw-600" style="">MAIN SECTION</div>
        <div class="mt-3 d-flex" style="align-items: center">
          <div class="col-2 mr-4 fw-600 o-5 fs-14">Columns</div>
          <div v-bind:class="customization.main.columns == 2? 'column-active':''" @click="customization.main.columns = 2" class="fw-600 column-clicker">2</div>
          <div v-bind:class="customization.main.columns == 3? 'column-active':''" @click="customization.main.columns = 3" class="fw-600 column-clicker">3</div>
          <div v-bind:class="customization.main.columns == 4? 'column-active':''" @click="customization.main.columns = 4" class="fw-600 column-clicker">4</div>
        </div>
        <div class="mt-3 d-flex" style="align-items: center">
          <div class="col-2 mr-4 fs-14 fw-600 o-5">Color</div>
          <input v-model="customization.main.color" class="color-picker" type="color"/>
        </div>
      </div>
      <div class="footer__section">
        <div class="mt-5 o-5 fw-600">FOOTER SECTION</div>
        <div class="mt-4 d-flex" style="align-items: center">
          <div class="col-2 mr-4 fs-14 fw-600 o-5">Color</div>
          <input v-model="customization.footer.color" class="color-picker" type="color"/>
        </div>
        <div class="d-flex mt-4" style="align-items: center">
          <div class="col-2 mr-4 fs-14 fw-600 o-5">Instagram</div>
          <SwitchBox v-model="customization.footer.instagram" :isActive="customization.footer.instagram"></SwitchBox>
          <div v-if="customization.footer.instagram">
            <input v-model="customization.footer.instagramUrl" placeholder="url" class="ml-3 social-media__link pl-2" type="text" style="transform: scale(1.1)">
          </div>
        </div>
        <div class="d-flex mt-4" style="align-items: center">
          <div class="col-2 mr-4 fs-14 fw-600 o-5">Facebook</div>
          <SwitchBox v-model="customization.footer.facebook" :isActive="customization.footer.facebook"></SwitchBox>
          <div v-if="customization.footer.facebook">
            <input v-model="customization.footer.facebookUrl" placeholder="url" class="ml-3 social-media__link pl-2" type="text" style="transform: scale(1.1)">
          </div>
        </div>
        <div class="d-flex mt-4" style="align-items: center">
          <div class="col-2 mr-4 fs-14 fw-600 o-5">Tiktok</div>
          <SwitchBox v-model="customization.footer.tiktok" :isActive="customization.footer.tiktok"></SwitchBox>
          <div v-if="customization.footer.tiktok">
            <input v-model="customization.footer.tiktokUrl" placeholder="url" class="ml-3 social-media__link pl-2" type="text" style="transform: scale(1.1)">
          </div>
        </div>
        <div class="d-flex mt-4" style="align-items: center">
          <div class="col-2 mr-4 fs-14 fw-600 o-5">Youtube</div>
          <SwitchBox v-model="customization.footer.youtube" :isActive="customization.footer.youtube"></SwitchBox>
          <div v-if="customization.footer.youtube">
            <input v-model="customization.footer.youtubeUrl" placeholder="url" class="ml-3 social-media__link pl-2" type="text" style="transform: scale(1.1)">
          </div>
        </div>
        <div class="ml-2">
          <div class="ml-2 mt-4 fs-14 fw-600 o-5">Text area</div>
          <textarea class="editor-textarea text-main px-3 py-3 o-5" v-model="customization.footer.text" cols="40" rows="4"></textarea>
        </div>
      </div>
      <div class="general__settings">
        <div class="mt-5 o-5 fw-600" style="">GENERAL SETTINGS</div>
        <div class="primary-buttons__section">
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-4 fs-14 fw-600 o-5 mr-4">Primary Button</div>
            <div><button  class="primary-button" v-bind:style="{'background-color':customization.general.primaryBtnColor, 'color':customization.general.primaryBtnText, 'border-radius':computedRadius}">Primary Button</button></div>
          </div>
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-4 fs-14 fw-600 o-5 mr-4">Background color</div>
            <input v-model="customization.general.primaryBtnColor" class="color-picker" type="color"/>
          </div>
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-4 fs-14 fw-600 o-5 mr-4">Text color</div>
            <input v-model="customization.general.primaryBtnText" class="color-picker" type="color"/>
          </div>
        </div>
        <div class="mt-5 secondary-buttons__section">
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-4 fs-14 fw-600 o-5 mr-4">Secondary Button</div>
            <div><button class="secondary-button" v-bind:style="{'border-color':customization.general.secondaryBtnColor, 'color':customization.general.secondaryBtnText, 'border-radius':computedRadius}">Secondary Button</button></div>
          </div>
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-4 fs-14 fw-600 o-5 mr-4">Border color</div>
            <input v-model="customization.general.secondaryBtnColor" class="color-picker" type="color"/>
          </div>
          <div class="d-flex mt-4" style="align-items: center">
            <div class="col-4 fs-14 fw-600 o-5 mr-4">Text color</div>
            <input v-model="customization.general.secondaryBtnText" class="color-picker" type="color"/>
          </div>
          <div class="mt-5 d-flex mt-4" style="align-items: center">
            <div class="col-4 fs-14 fw-600 o-5 mr-4">Border radius (px)</div>
            <div class="mr-2 qty-btn" @click="()=>{!customization.general.radius<=0 ? customization.general.radius-- : null}">-</div>
            <input v-model="customization.general.radius" class="input-number"/>
            <div class="ml-2 qty-btn" @click="customization.general.radius++">+</div>
          </div>
          <button class="app-button" @click="saveConfiguration">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SwitchBox from '../../../components/reusable/SwitchBox.vue'
export default {
  components: {
    SwitchBox,
  },
  data: ()=>{
    return{
      products: [
        {
          id: 1,
          name: 'Super hoodie Osiem',
          price: 199.99
        },
        {
          id: 2,
          name: 'Tshirt cieply maly',
          price: 79.99
        },
        {
          id: 3,
          name: 'Spodnie rybaka znad wisly',
          price: 129.99
        },
        {
          id: 4,
          name: 'Huj wie czapka z daszkiem',
          price: 19.99
        },
        {
          id: 1,
          name: 'Super hoodie Osiem',
          price: 199.99
        },
        {
          id: 2,
          name: 'Tshirt cieply maly',
          price: 79.99
        },
        {
          id: 3,
          name: 'Spodnie rybaka znad wisly',
          price: 129.99
        },
        {
          id: 4,
          name: 'Huj wie czapka z daszkiem',
          price: 19.99
        }
      ],
      customization: {
        navigation:{
          color: '#4d4488'
        },
        main:{
          columns: 2
        },
        footer:{
          color: '#4d4488'
        },
        general:{
          radius: 0
        }
      }
    }
  },

  methods: {
    saveConfiguration(){
        this.axios.post('/api/customizations', this.customization).then(res=>console.log(res)).catch(err=>console.log(err));
    }
  },
  computed: {
    computedRadius(){
      if(this.customization.general.radius){
        let value = this.customization.general.radius.toString();
        return value + 'px';
      }else {
        return '0px';
      }
    }
  }
}
</script>
