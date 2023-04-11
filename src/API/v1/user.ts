import { IUser } from '../../components/user/type';

export const data: IUser = {
  name: 'ИП Дементьев',
  email: '9602598255@mail.ru',
  phone: 79602598255,
  city: 'Санкт-Петербург',
  products: {
    obj: {
      userHightVolt: {
        type: 'userHightVolt',
        name: 'Power center 10kV',
        url: '#',
        namePLC: 'PLC-Name',
        maxPower: 200,
      },
      userLowVolt: {
        type: 'userLowVolt',
        name: 'Power center 0.4kV',
        url: '#',
        namePLC: 'PLC-Name',
        maxPower: 1600,
      },
      userGenerator: {
        type: 'userGenerator',
        name: 'Factory',
        url: '#',
        namePLC: 'PLC-Name',
      },
      userUPS: {
        type: 'userUPS',
        name: 'Factory',
        url: '#',
        namePLC: 'PLC-Name',
      },
      userWater: {
        type: 'userWater',
        name: 'Factory',
        url: '#',
        namePLC: 'PLC-Name',
      },
      userGas: {
        type: 'userGas',
        name: 'Factory',
        url: '#',
        namePLC: 'PLC-Name',
      },
      userHot: {
        type: 'userHot',
        name: 'Factory',
        url: '#',
        namePLC: 'PLC-Name',
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
