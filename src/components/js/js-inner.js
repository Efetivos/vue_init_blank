import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
/*import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
import SplitText from 'gsap/SplitText'
import DrawSVGPluginfrom from 'gsap/DrawSVGPlugin'
//import niceScroll from 'jquery.nicescroll'
import Mymenu from '../Mymenu.vue'*/



export default { 
 /*components: {
    'mymenu': Mymenu
  },*/

	  created() {
        //Scrolls to top when view is displayed
				window.scrollTo(0, 0)
				window.document.title = "Name Of Page "
		},
		
    mounted(){


        }, //CloseMounted
        beforeRouteLeave(to, from, next) {
          
             if (to.name === 'NameOfPage') {
              var tlGoDanny  = new TimelineMax({onComplete: next})
              .to('body', 1, {opacity:0}) 
            }
            else {
              var tlGoNext  = new TimelineMax({onComplete: next})
              .to('.body', .2, {backgroundColor:"#000"})
              .to('.main', .8, {backgroundColor:"#000",autoAlpha:0})              
          }
          
        }
              
  }//CloseExport

          