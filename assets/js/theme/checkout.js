import PageManager from './page-manager'
import $ from 'jquery'

export default class Checkout extends PageManager {
    constructor(context) {
        super(context);
        this.step = ''
        this.transition = this.transition.bind(this)
    }
    onReady() {
      const cylImages = JSON.parse(sessionStorage.getItem('cylindoImage')) //JS Session Storage
      setTimeout(() => { 
        $('img[data-test]').each(function(i){
          if(cylImages[i]) $(this).attr('src',cylImages[i])
        })
      },500)
    }

    async transition() {
      //console.log('here in transition')
    }
    
    currentStep() {
      let step = document.querySelectorAll('.checkout-view-content')[0].parentElement.className.split('--')[1]

      if(this.step !== step) {
        this.step = step
        step === 'payment' ? this.paymentStep():
        ''        
      }
      return step
    }
     paymentStep() {

  }  
}