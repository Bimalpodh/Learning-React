import React from "react";
import ReactDOM from "react-dom/client"

/**
 * 1.Header
 *    -Logo
 *    -Nav bar
 * 2.Body
 *    -Search
 *    -Reastaurant caontainer
 *    -Resto Card
 *       -image
 *       -name of the restaurant,cuisines, delivery time,etc
 *       -rating
 * Footer
 *    -copy right
 *    -links
 *    -Contack
 */

/** */
const Header = () => {
   return (
      <div className="header">
         <div className="logo-container">
            
            <img className="logo" src="https://img.freepik.com/free-psd/isolated-hamburger-with-splash-ink-background_1409-3855.jpg?ga=GA1.1.561149722.1734708030&semt=ais_hybrid" alt="logo"/>

         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
};

const objList=[ 
  {
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "73598",
        "name": "Garam Masala",
        "cloudinaryImageId": "dkzh3tjhm9wopurxgixh",
        "locality": "Kanak Durga Nagar",
        "areaName": "Chandrasekharpur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "Tandoor",
          "Biryani"
        ],
        "avgRating": 4.3,
        "parentId": "408",
        "avgRatingString": "4.3",
        "totalRatingsString": "103K+",
        "promoted": true,
        "adTrackingId": "cid=22352984~p=1~adgrpid=22352984#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=73598~eid=e9dd2d38-0682-4ff1-98d8-032ba68cc37c~srvts=1734868702313~collid=83639",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "22352984"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=73598&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "305807",
        "name": "Barbeque Nation",
        "cloudinaryImageId": "pocpd4knzgptsuguulhv",
        "locality": "Chandrasekharpur",
        "areaName": "Chandrasekharpur",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "2438",
        "avgRatingString": "4.2",
        "totalRatingsString": "3.2K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.4",
            "ratingCount": "12K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=305807&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "878613",
        "name": "Royal's Kitchen",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/30/1c7bfc48-a3ca-4aee-bf18-399243d9ce65_878613.JPG",
        "locality": "Muddy Cup -Tea & Snacks",
        "areaName": "Patia",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Thalis",
          "Indian"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "172630",
        "avgRatingString": "4.1",
        "totalRatingsString": "73",
        "promoted": true,
        "adTrackingId": "cid=22837812~p=2~adgrpid=22837812#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=878613~eid=28b6cf67-eaef-4022-a03f-fa0da28c1541~srvts=1734868702313~collid=83639",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 6.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "25% OFF",
          "subHeader": "UPTO ₹65",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "22837812"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=878613&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "753759",
        "name": "Treat By Karisma Premium",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/15/898eaa86-9311-49b3-ac20-8564eea0e8d6_2c09be1f-cdb0-4862-aea3-d95e8313c431.jpg_compressed",
        "locality": "BDA Colony",
        "areaName": "Sahid Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Tandoor",
          "South Indian",
          "Continental",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "521377",
        "avgRatingString": "4.4",
        "totalRatingsString": "150",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 23:15:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                    "description": "bolt!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=753759&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},

{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "82520",
        "name": "Bhaina Hotel And Fast Food",
        "cloudinaryImageId": "tfwansofkchev7xog7gk",
        "locality": "Bhimpur",
        "areaName": "Unit 4",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "Biryani",
          "Oriya"
        ],
        "avgRating": 4,
        "parentId": "9838",
        "avgRatingString": "4.0",
        "totalRatingsString": "137K+",
        "promoted": true,
        "adTrackingId": "cid=22929088~p=3~adgrpid=22929088#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=82520~eid=ef1da510-2a5b-450e-8ff9-93883a7c66bd~srvts=1734868702313~collid=83639",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹29",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.4",
            "ratingCount": "1.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "22929088"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=82520&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},

{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "446804",
        "name": "The Good Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/90fe9d8c-0016-4357-96c3-fb8aa9d7b9f1_446804.jpg",
        "locality": "Technology Corridor Rd",
        "areaName": "Patia",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "7918",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.3K+",
        "promoted": true,
        "adTrackingId": "cid=22955737~p=0~adgrpid=22955737#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=446804~eid=f878cd6f-8dba-46a8-9bcb-6ae31c0905be~srvts=1734868702313~collid=83639",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "22955737"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=446804&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "639471",
        "name": "Dum Safar Biryani",
        "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
        "locality": "Sachivalay Marg",
        "areaName": "3PELX MALL",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Kebabs",
          "Tandoor",
          "Indian",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "351013",
        "avgRatingString": "4.2",
        "totalRatingsString": "568",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=639471&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
// -----------idli----------

{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "71132",
        "name": "Go South",
        "cloudinaryImageId": "3245314a531135edf30e106a2eb63586",
        "locality": "Patia",
        "areaName": "Chandrashekarpur",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "Indian",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "87917",
        "avgRatingString": "4.3",
        "totalRatingsString": "6.3K+",
        "promoted": true,
        "adTrackingId": "cid=23040081~p=3~adgrpid=23040081#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=71132~eid=fa80a10e-ef43-4a86-bb16-8df847766012~srvts=1735104743957~collid=80440",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 15:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23040081"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=71132&source=collection&query=Idli",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "293926",
        "name": "Zingiber",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/21/619a66f9-7b70-45dd-a795-eb6f4d6ce380_f2a97c27-b951-46c0-bb75-7fcd47f0d995.jpg",
        "locality": "Irc Village",
        "areaName": "Nayapalli",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "South Indian",
          "Andhra",
          "Tandoor"
        ],
        "avgRating": 4.5,
        "parentId": "18657",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.1K+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=293926&source=collection&query=Idli",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "124810",
        "name": "Venus Inn Restaurant",
        "cloudinaryImageId": "cnhseovdotguswbfpifp",
        "locality": "Buddha Nagar",
        "areaName": "Bapuji Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian",
          "Indian"
        ],
        "avgRating": 4.4,
        "parentId": "222728",
        "avgRatingString": "4.4",
        "totalRatingsString": "63K+",
        "promoted": true,
        "adTrackingId": "cid=23040163~p=5~adgrpid=23040163#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=124810~eid=91a41cce-5d27-4e6c-88d8-b7dd5bb8ef30~srvts=1735104743957~collid=80440",
        "sla": {
          "deliveryTime": 53,
          "lastMileTravel": 6.1,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "6.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Dosa.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Dosa.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23040163"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=124810&source=collection&query=Idli",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "463130",
        "name": "Shirose Restaurant & Sweets",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/21/1886dd81-7181-4eaf-80e5-1570dfe24572_6114028e-1106-4871-b975-f2e433331d5d.jpeg",
        "locality": "Meghdoot Street",
        "areaName": "Sahid Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian",
          "Indian",
          "Chinese",
          "Sweets"
        ],
        "avgRating": 4.5,
        "parentId": "455164",
        "avgRatingString": "4.5",
        "totalRatingsString": "3.0K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=463113&source=collection&query=Idli",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "87304",
        "name": "Dosa Plaza",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/20/eeb53267-fdc9-42c4-8680-6bb72fd92c3a_e7787850-92eb-4975-a104-edbdb4ea2ea2.JPG",
        "locality": "Patia",
        "areaName": "Chandrashekarpur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.5,
        "parentId": "1398",
        "avgRatingString": "4.5",
        "totalRatingsString": "17K+",
        "promoted": true,
        "adTrackingId": "cid=23040124~p=6~adgrpid=23040124#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=87304~eid=84c0f7af-de45-40f8-bc46-809503231753~srvts=1735104743957~collid=80440",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 6.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "2.5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23040124"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=87304&source=collection&query=Idli",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "82619",
        "name": "Street Foods By Punjab Grill",
        "cloudinaryImageId": "j9vwq8fpwrj1yarhbyac",
        "locality": "Cuttack Road",
        "areaName": "Rasulgarh",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Kebabs",
          "Biryani",
          "Mughlai"
        ],
        "avgRating": 4.4,
        "parentId": "1345",
        "avgRatingString": "4.4",
        "totalRatingsString": "3.2K+",
        "promoted": true,
        "adTrackingId": "cid=22893237~p=0~adgrpid=22893237#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=82619~eid=f7bd52b0-1823-4d91-8772-04e5e932a5df~srvts=1735106966081~collid=80382",
        "sla": {
          "deliveryTime": 57,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "22893237"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=82619&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "220360",
        "name": "Priya",
        "cloudinaryImageId": "oivksbtnt4ufouny0srf",
        "locality": "Jayadev Vihar",
        "areaName": "Sahid Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian",
          "Tandoor"
        ],
        "avgRating": 4.4,
        "parentId": "161324",
        "avgRatingString": "4.4",
        "totalRatingsString": "23K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 15:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                    "description": "bolt!"
                  }
                },
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹115",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "5.5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=220360&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "908388",
        "name": "Shree Anandam",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/b22e20f5-da5e-4576-8fe5-5e3653bbec1a_908388.jpg",
        "locality": "Shankar Rd",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "184144",
        "avgRatingString": "4.2",
        "totalRatingsString": "117",
        "promoted": true,
        "adTrackingId": "cid=23083197~p=2~adgrpid=23083197#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=908388~eid=b7173cb5-c125-425a-a106-5abdc5851023~srvts=1735106966081~collid=80382",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 5.6,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "5.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹100",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23083197"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=908388&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "110185",
        "name": "Chapan Bhog",
        "cloudinaryImageId": "x6x1srh1d4mlnyppoyvw",
        "locality": "Jayadev Vihar",
        "areaName": "Sahid Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Sweets",
          "Indian",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "58021",
        "avgRatingString": "4.5",
        "totalRatingsString": "37K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "5.6K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=110185&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "375559",
        "name": "Priya Restaurant",
        "cloudinaryImageId": "fkcm08zqjevtrpy6cisj",
        "locality": "Sampur",
        "areaName": "Kalinga Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Indian",
          "Tandoor",
          "Salads",
          "Snacks",
          "Thalis",
          "South Indian",
          "Sweets"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "161363",
        "avgRatingString": "4.5",
        "totalRatingsString": "19K+",
        "promoted": true,
        "adTrackingId": "cid=23040245~p=4~adgrpid=23040245#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=375559~eid=6adb77e3-a63f-4ce1-a0f9-e09b9b03e561~srvts=1735106966081~collid=80382",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23040245"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=375559&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "668061",
        "name": "New Delhi Sweets",
        "cloudinaryImageId": "14054e3a6a3f0980835b77a10d0fcf72",
        "locality": "Madhusadan Nagar",
        "areaName": "Madhusudan Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Sweets",
          "Snacks",
          "Desserts",
          "North Indian"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "8665",
        "avgRatingString": "4.6",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=668061&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "107774",
        "name": "Hotel Shirose",
        "cloudinaryImageId": "ai5xct3scjpnkrqqkdrb",
        "locality": "Puri Road",
        "areaName": "Bjb Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "Tandoor"
        ],
        "avgRating": 4.5,
        "parentId": "102224",
        "avgRatingString": "4.5",
        "totalRatingsString": "51K+",
        "promoted": true,
        "adTrackingId": "cid=23040143~p=5~adgrpid=23040143#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=107774~eid=d32005cf-26dc-4f00-9e7f-705c9976614f~srvts=1735106966081~collid=80382",
        "sla": {
          "deliveryTime": 51,
          "lastMileTravel": 7.6,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "7.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23040143"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=107774&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "995679",
        "name": "The Divan",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/3b9d0658-6f0b-4fa6-9dcb-1228df6d70de_995679.jpg",
        "locality": "Sahid Nagar",
        "areaName": "Nayapalli",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Chinese",
          "Biryani",
          "Tandoor"
        ],
        "avgRating": 5,
        "parentId": "581456",
        "avgRatingString": "5.0",
        "totalRatingsString": "2",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 15:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=995679&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "71130",
        "name": "Go South",
        "cloudinaryImageId": "mzq5tcr3pairozppwf0n",
        "locality": "Patia",
        "areaName": "Chandrashekarpur",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "Indian",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "87917",
        "avgRatingString": "4.3",
        "totalRatingsString": "6.3K+",
        "promoted": true,
        "adTrackingId": "cid=23040081~p=9~adgrpid=23040081#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=71132~eid=06094600-be7d-466b-9edf-8c01a417e04d~srvts=1735106966081~collid=80382",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 15:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23040081"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=71132&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "463113",
        "name": "Shirose Restaurant & Sweets",
        "cloudinaryImageId": "j1jmcu3gp0yatozottoh",
        "locality": "Meghdoot Street",
        "areaName": "Sahid Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian",
          "Indian",
          "Chinese",
          "Sweets"
        ],
        "avgRating": 4.5,
        "parentId": "455164",
        "avgRatingString": "4.5",
        "totalRatingsString": "3.0K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=463113&source=collection&query=Chole%20Bhature",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "621140",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/7d3e0c44-ce41-476a-826b-6799685eb3a0_621140.JPG",
        "locality": "Chandresekkarpur",
        "areaName": "Chandrasekharpur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American",
          "Fast Food"
        ],
        "avgRating": 4.6,
        "parentId": "630",
        "avgRatingString": "4.6",
        "totalRatingsString": "8.5K+",
        "promoted": true,
        "adTrackingId": "cid=23067381~p=0~adgrpid=23067381#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=621140~eid=75740a5d-5219-4523-84ea-0f7d532f50ff~srvts=1735107576833~collid=80406",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 5.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-26 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹49",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23067381"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=621140&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "744844",
        "name": "Burger King",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/63049b6a-d048-4d69-b625-07c395431dc2_ccfe6fd3-2656-4522-ad53-76464c3cc286.jpg",
        "locality": "Jayadev Vihar",
        "areaName": "Jayadev Vihar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.6,
        "parentId": "166",
        "avgRatingString": "4.6",
        "totalRatingsString": "6.1K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-26 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "821"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=744844&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "831931",
        "name": "TEALOGY",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/7/de78bd4e-50a7-45ce-9de6-55af3492592b_d800a455-18d4-4976-a200-bd862ba1617e",
        "locality": "Samanta Vihar",
        "areaName": "Chandrashekarpur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Beverages",
          "Cafe"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "202846",
        "avgRatingString": "4.1",
        "totalRatingsString": "74",
        "promoted": true,
        "adTrackingId": "cid=23036555~p=3~adgrpid=23036555#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=831931~eid=5e3a3e13-b67b-454e-8aa4-68dd9fba4dd7~srvts=1735107576833~collid=80406",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23036555"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=831931&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "988657",
        "name": "KRUTI COFFEE",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/11/a64be4f5-c9fc-4470-8a2d-a690182659f6_988657.jpg",
        "locality": "Sahid Nagar",
        "areaName": "Sahid Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Cafe"
        ],
        "avgRating": 4.6,
        "parentId": "121241",
        "avgRatingString": "4.6",
        "totalRatingsString": "16",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=988657&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "856287",
        "name": "Sai South Special",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/4140a8fd-dca4-4994-affd-7d28105c8aae_7b0364ed-7870-4d08-9808-a4f61270c9be.jpg",
        "locality": "Chakeisihani",
        "areaName": "Chandrashekarpur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "Indian"
        ],
        "avgRating": 4,
        "parentId": "503593",
        "avgRatingString": "4.0",
        "totalRatingsString": "133",
        "promoted": true,
        "adTrackingId": "cid=22433212~p=4~adgrpid=22433212#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=856287~eid=0e8aff06-a905-4cf4-9cfd-f7102f4e1bf4~srvts=1735107576833~collid=80406",
        "sla": {
          "deliveryTime": 56,
          "lastMileTravel": 7.3,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "7.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "22433212"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=856287&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "94690",
        "name": "Shree Kunj Restaurant",
        "cloudinaryImageId": "r4rpaumlk63gytmpnsnw",
        "locality": "Jayadev Vihar Road",
        "areaName": "Sahid Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Sweets",
          "South Indian",
          "Chinese"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "465601",
        "avgRatingString": "4.3",
        "totalRatingsString": "4.3K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                    "description": "bolt!"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=94690&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "469200",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/3f16adc8-df18-402c-84ab-b9c5962ef7df_469200.JPG",
        "locality": "Forum Esplanade Mall",
        "areaName": "Rasulgarh",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "avgRating": 4.5,
        "parentId": "195515",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.8K+",
        "promoted": true,
        "adTrackingId": "cid=23038820~p=5~adgrpid=23038820#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=469200~eid=deec5579-700a-4343-ad3d-ba125c2ecb03~srvts=1735107576833~collid=80406",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "discountTag": "FLAT DEAL",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23038820"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=469200&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "735863",
        "name": "Oberai Bakers & Cafe",
        "cloudinaryImageId": "df3487e521860573ece814bfc8c5adf6",
        "locality": "Gadakana",
        "areaName": "Chandrashekarpur",
        "costForTwo": "₹199 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.6,
        "parentId": "150851",
        "avgRatingString": "4.6",
        "totalRatingsString": "309",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=735863&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "72736",
        "name": "Richard's Kitchen & Coffee Bar",
        "cloudinaryImageId": "g4qlnockzksn1ki9ykfi",
        "locality": "Patia",
        "areaName": "Patia",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Chinese",
          "Thai"
        ],
        "avgRating": 4.4,
        "parentId": "169403",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.5K+",
        "promoted": true,
        "adTrackingId": "cid=23040098~p=6~adgrpid=23040098#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=72736~eid=3e7f237b-bb2f-49fb-b718-6538516bfadb~srvts=1735107576833~collid=80406",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 6.5,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "6.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹125",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "2.3K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "23040098"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=72736&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "945968",
        "name": "Maa Mangala Sweets & Tiffin",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/28/c1095d39-daf9-4d6b-bd30-d6a2d5a0763f_b011684e-53fc-4fb9-8a94-ff4259349864.jpg",
        "locality": "Sahid Nagar",
        "areaName": "Sahid Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Beverages",
          "Fast Food",
          "Burgers",
          "Cafe"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "554192",
        "avgRatingString": "4.4",
        "totalRatingsString": "113",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-25 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                    "description": "bolt!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=945968&source=collection&query=Tea",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
]



// Body Component

// RestaurantCard functional Component
const RestaurantCard=(props)=>{
   const {resdata}=props;

   if (!resdata?.card?.card?.info) {
    return null; // Or handle the error gracefully
  };
  const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}=resdata?.card?.card?.info;
   
   return(
      <div className="res-card">
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      


      </div>

   )
};

const Body=()=>{
   return(
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            {/* Restaurant card */}
           
            {
              objList.map((restaurant,index)=>(<RestaurantCard key={restaurant?.card?.card?.info?.id} resdata={restaurant}/>))
              
            }
          

         

       
         </div>
      </div>

   )
};



//*********************************************** */
const AppLayout=()=>{
   return(

   <div className="app">
   <Header/>
   <Body/>


   </div>
   )
};


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)




