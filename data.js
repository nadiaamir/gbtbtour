var APP_DATA = {
  "scenes": [
    {
      "id": "0-gardens-by-the-bay-south-entrance",
      "name": "Gardens by the Bay South Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.0149135512403333,
        "pitch": -0.09454987641450252,
        "fov": 1.5225790443301637
      },
      "linkHotspots": [
        {
          "yaw": -3.003748175042098,
          "pitch": -0.12313679788301535,
          "rotation": 0,
          "target": "1-kingfisher-wetlands"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.07876466868380483,
          "pitch": -0.07822539893573932,
          "title": "Bayfront MRT",
          "text": "The station is about a 10 minute walk away from this South entrance."
        },
        {
          "yaw": 1.3582101367165986,
          "pitch": 1.422332427997624,
          "title": "Phototaking",
          "text": "Stand here for a good photo when you arrive!"
        }
      ]
    },
    {
      "id": "1-kingfisher-wetlands",
      "name": "Kingfisher Wetlands",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07205544916044815,
          "pitch": -0.05800820607691115,
          "rotation": 0,
          "target": "0-gardens-by-the-bay-south-entrance"
        },
        {
          "yaw": 3.1115699620656727,
          "pitch": -0.0012938115198597444,
          "rotation": 0,
          "target": "2-satay-by-the-bay"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4636493248516782,
          "pitch": -0.14360559192451916,
          "title": "Pavilion",
          "text": "A stop for you to rest and watch the ducks!"
        },
        {
          "yaw": -1.0233030472997626,
          "pitch": 0.20828841975639456,
          "title": "Dragon Hotspot",
          "text": "Sometimes, there are monitor lizards slithering quietly in the water! As big as they might be, they are quite shy and easily scared."
        }
      ]
    },
    {
      "id": "2-satay-by-the-bay",
      "name": "Satay by the Bay",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.9434403336467874,
        "pitch": -0.15942800724879724,
        "fov": 1.4789304472782894
      },
      "linkHotspots": [
        {
          "yaw": 2.801872320048389,
          "pitch": -0.09505149627340614,
          "rotation": 0,
          "target": "1-kingfisher-wetlands"
        },
        {
          "yaw": -0.007139120926579423,
          "pitch": -0.08199300056678638,
          "rotation": 0,
          "target": "3-marina-barrage"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9394233479271925,
          "pitch": -0.2529027778401485,
          "title": "Mealtime",
          "text": "You can have your meals here, before or after a nice stroll in the Gardens."
        }
      ]
    },
    {
      "id": "3-marina-barrage",
      "name": "Marina Barrage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7692919537633829,
          "pitch": -0.107085241470676,
          "rotation": 0,
          "target": "2-satay-by-the-bay"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8699207857791471,
          "pitch": -0.14789752222800878,
          "title": "Feeling Adventurous?",
          "text": "There is a quiet, rocky beach here that photographers love – it gives them a clear view of the ships at sea. Head on over for a look!"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
