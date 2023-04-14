const exam = {
  name: 'ИП Дементьев',
  email: '9602598255@mail.ru',
  phone: 79602598255,
  city: 'Санкт-Петербург',
  products: [
    {
      objId: 111,
      objName: 'Factory',
      objAdress: 'SPb',
      objSystems: [
        {
          id: 111,
          type: 'userHightVolt',
          name: 'Power center 10kV',
          url: 'https://raw.githubusercontent.com/MVDem/scada-ts/dev/API/v1/hightVolt.json',
          namePLC: 'PLC-Name',
          maxPower: 200,
        },
        {
          type: 'userLowVolt',
          name: 'Power center 0.4kV',
          url: 'https://raw.githubusercontent.com/MVDem/scada-ts/dev/API/v1/lowVolt.json',
          namePLC: 'PLC-Name',
          maxPower: 1600,
        },
      ],
    },
  ],
};
