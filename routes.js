const express = require ( 'express' )
const { registerView, loginView, registerUser, loginUser } = require ( '../controllers/loginController' )
const router = express.Router ()
const { protectRoute } = require ( "../auth/protect" )
const { homeView } = require ( "../controllers/homeController" )
const { 
  createProduct, 
  changeProductTable, 
  filterCollectionNameProductTable, 
  filterCharacterProductTable, 
  filterPriceProductTable, 
  filterThreeParams 
} = require ( "../controllers/productController" )
const { order, getOrders, deleteOrder, orderSumAverage } = require ( "../controllers/orderController" ) 
const { getAllFans } = require ( "../controllers/providerController" )
const { getCurrency } = require ( "../controllers/currencyController" )
const { playVideo } = require ( "../controllers/videoController" )
const { addLocation, getLocations } = require ( "../controllers/locationController" )
const { createFBPosting} = require ( "../controllers/fbController" )

router.get ( '/', registerView )
router.get ( '/register', registerView )
router.get ( '/login', loginView )
router.get ( "/home", protectRoute, homeView )
router.get ( "/logout", loginView )

router.get ( "/clearFilters", protectRoute, homeView )

router.get ( '/video', playVideo )

router.post ( "/register", registerUser )
router.post ( "/login", loginUser )

router.post ( "/getAllFans", getAllFans )

router.post ( "/createProduct", createProduct ) 
router.post ( "/changeProductTable", changeProductTable )
router.post ( "/filterCollectionNameProductTable", filterCollectionNameProductTable )
router.post ( "/filterCharacterProductTable", filterCharacterProductTable )
router.post( "/filterPriceProductTable", filterPriceProductTable )
router.post( "/filterThreeParams", filterThreeParams )

router.post ( "/order", order )
router.post ( "/getOrders", getOrders )
router.post ( "/deleteOrder", deleteOrder )
router.post ( "/orderSumAverage", orderSumAverage )

router.post ( "/getCurrency", getCurrency )

router.post ( "/addLocation", addLocation )
router.post ( "/getLocations", getLocations )

router.post ( "/createFBPosting", createFBPosting )

module.exports = router
