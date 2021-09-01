const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router
//
//router.post('/home-next-constructive', function (req, res) {
//
//   let nextConstruction = req.session.data['next-construction']
//  
//    if (nextConstruction === 'Under 18') {
//     res.redirect('/prototype-2/cautions/caution-type')
//    }  else {
//      res.redirect('/prototype-2/start-page')
//    }
//  })


router.post('/option-one-route', function (req, res) {

   let optionOneRoute = req.session.data['option-one']
  
    if (optionOneRoute === 'read the next option') {
     res.redirect('A2J/task-list-pattern/claim-unfair-dismissal')
    }  else {
      res.redirect('A2J/task-list-pattern/constructive-dimissal-choice')
    }
  })

router.post('/constructive-dismissal-route', function (req, res) {

    let constructiveDismissal = req.session.data['constructive-dismissal']
   
     if (constructiveDismissal === 'no') {
      res.redirect('A2J/task-list-pattern/constructive-dismissal-resign')
     }  else {
       res.redirect('A2J/task-list-pattern/home-v2')
     }
   }) 

router.post('/option-two-route', function (req, res) {

   let optionTwoRoute = req.session.data['option-two']
  
    if (optionTwoRoute === 'return to the previous option') {
     res.redirect('A2J/task-list-pattern/claim-unfair-dismissal')
    }  else {
      res.redirect('A2J/task-list-pattern/claim-unfair-dismissal-choice')
    }
  }) 

  router.post('/unfair-dismissal-route', function (req, res) {

    let unfairDismissal = req.session.data['unfair-dismissal']
   
     if (unfairDismissal === 'return to the previous option') {
      res.redirect('A2J/task-list-pattern/claim-unfair-dismissal')
     }  else {
       res.redirect('A2J/task-list-pattern/home-v2')
     }
   }) 