import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
/*import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
import SplitText from 'gsap/SplitText'*/
import Mymenu from '../Mymenu.vue'



export default { 
  /*components: {
    'mymenu': Mymenu
  },*/

	  created() {
        //Scrolls to top when view is displayed
				window.scrollTo(0, 0)
				window.document.title = "Nome of Page"
		},
		
    mounted(){

        }, // mounted
        
        beforeRouteLeave(to, from, next) {

           if (to.name === 'nameOfComponent') {
                TweenMax.to('.Something', 1, {opacity:0, onComplete: next})
             } else {
               next();
             }
         },// End beforeRouteLeave

        beforeRouteEnter (to, from, next) {
          if (from.name === 'nameOfComponent'){
              next(vm => {

                //Do Something

              });
              } else {
                  next();
              }
          }// End beforeRouteEnter
              
  }//CloseExport


          