import { IUser } from '../components/user/type';

export const datadef: IUser = {
  id: '',
  name: '',
  email: '',
  phone: 7,
  city: '',
  products: {
    obj: {
      userHightVolt: {
        type: '',
        name: '',
        url: '#',
        namePLC: '',
        maxPower: 0,
      },
      userLowVolt: {
        type: '',
        name: '',
        url: '#',
        namePLC: '',
        maxPower: 0,
      },
      userGenerator: {
        type: '',
        name: '',
        url: '#',
        namePLC: '',
      },
      userUPS: {
        type: '',
        name: '',
        url: '#',
        namePLC: '',
      },
      userWater: {
        type: '',
        name: '',
        url: '#',
        namePLC: '',
      },
      userGas: {
        type: '',
        name: '',
        url: '#',
        namePLC: '',
      },
      userHot: {
        type: '',
        name: '',
        url: '#',
        namePLC: '',
      },
    },
  },
};

// {
//   "name": "ИП Дементьев",
//   "email": "9602598255@mail.ru",
//   "phone": "79602598255",
//   "city": "Санкт-Петербург",
//   "products": {
//     "obj1": {
//       "name": "Factory",
//       "userHightVolt": {
//         "name": "Power center 10kV",
//         "url": "#",
//         "namePLC": "PLC-Name",
//         "maxPower": 200
//       },
//       "lowVolt": {
//         "name": "Power center 0.4kV",
//         "url": "#",
//         "namePLC": "PLC-Name",
//         "maxPower": 1600
//       },
//       "gen": { "name": "Factory", "url": "#", "namePLC": "PLC-Name" },
//       "ups": { "name": "Factory", "url": "#", "namePLC": "PLC-Name" },
//       "water": { "name": "Factory", "url": "#", "namePLC": "PLC-Name" },
//       "gas": { "name": "Factory", "url": "#", "namePLC": "PLC-Name" },
//       "hot": { "name": "Factory", "url": "#", "namePLC": "PLC-Name" }
//     }
//   }
// }
