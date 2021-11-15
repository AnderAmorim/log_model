const mockProprierties = (changeInfos = {}) => {
  return {
    severity: 'info',
    application: 'pegakienvios-core',
    className: 'ShipmentOrdeService',
    type: 'request',
    message: 'Foi criada uma nova ordem de envio pelo usuário 1234 com o produto 4321, onde foi escolhida a transportadora X.',
    timestamp: '2021-10-21T04:20:52.5252Z',
    trace: 'pegakienvios-core-1634840682_intelipoint-1634840682',
    span: 'pegakienvios-core-1634840682',
    thread: 'main',
    metadata: {
      id: 236,
      orderValue: '10.00',
      shippingDeadline: 1,
      shippingValue: '0.00',
      shippingMethodType: 'STANDARD',
      shippingProviderName: 'Loggi',
      shippingAsCompany: false,
      idUser: '1',
      shipperFederalTaxId: '12345678910112',
      shipperName: 'Global Admin',
      shipperPostalCode: '89025001',
      shipperStreet: 'Rua Belo Horizonte',
      shipperStreetNumber: '703',
      shipperComplement: null,
      shipperCity: 'Blumenau',
      shipperCityDistrict: 'Glória',
      shipperState: 'SC',
      shipperCountry: 'Brasil',
      recipientFirstName: 'Larissa',
      recipientLastName: 'Sena',
      recipientEmail: 'larissa.sena@pegaki.com.br',
      recipientPhone: '',
      recipientCellphone: '11942959933',
      recipientFederalTaxId: '45603329831',
      recipientPostalCode: '05037055',
      recipientStreet: 'Rua Torres da Barra',
      recipientStreetNumber: '409',
      recipientComplement: 'Ap 511',
      recipientReference: 'Rua sem saída',
      recipientCity: 'São Paulo',
      recipientCityDistrict: 'Água Branca',
      recipientState: 'SP',
      recipientCountry: 'Brasil',
      originWarehouseCode: 'sp-osasco',
      shipmentOrderStatus: 'Pagamento Pendente',
      currencyType: 'BRL',
      isPaid: false,
      intelipostShipmentOrderId: null,
      intelipointShipmentOrderId: null,
      externalQuoteId: '903518033567312',
      trackingUrl: null,
      parcels: [
        {
          id: 1,
          idShipmentOrder: '236',
          trackingCode: null,
          heightCm: 15,
          widthCm: 15,
          lengthCm: 15,
          weightGr: 200,
          productValue: '10.00',
          productType: 'BOX',
          productQuantity: 1,
          invoice: undefined,
          createdAt: '2021-07-08T11:43:13.175Z',
          updatedAt: '2021-07-08T11:43:13.175Z',
          contentDeclaration: false,
        },
      ],
      createdAt: '2021-07-08T11:43:13.175Z',
      updatedAt: '2021-07-08T11:43:13.175Z',
    },
    ...changeInfos,
  };
};

const mockLogReturn = () => {
  return {
    application: 'pegakienvios-core',
    level: 'info',
    message: 'Foi criada uma nova ordem de envio pelo usuário 1234 com o produto 4321, onde foi escolhida a transportadora X.',
    metadata: {
      createdAt: '2021-07-08T11:43:13.175Z',
      currencyType: 'BRL',
      externalQuoteId: '903518033567312',
      id: 236,
      idUser: '1',
      intelipointShipmentOrderId: null,
      intelipostShipmentOrderId: null,
      isPaid: false,
      orderValue: '10.00',
      originWarehouseCode: 'sp-osasco',
      parcels: [
        {
          contentDeclaration: false,
          createdAt: '2021-07-08T11:43:13.175Z',
          heightCm: 15,
          id: 1,
          idShipmentOrder: '236',
          lengthCm: 15,
          productQuantity: 1,
          productType: 'BOX',
          productValue: '10.00',
          trackingCode: null,
          updatedAt: '2021-07-08T11:43:13.175Z',
          weightGr: 200,
          widthCm: 15,
        },
      ],
      recipientCellphone: '11942959933',
      recipientCity: 'São Paulo',
      recipientCityDistrict: 'Água Branca',
      recipientComplement: 'Ap 511',
      recipientCountry: 'Brasil',
      recipientEmail: 'larissa.sena@pegaki.com.br',
      recipientFederalTaxId: '45603329831',
      recipientFirstName: 'Larissa',
      recipientLastName: 'Sena',
      recipientPhone: '',
      recipientPostalCode: '05037055',
      recipientReference: 'Rua sem saída',
      recipientState: 'SP',
      recipientStreet: 'Rua Torres da Barra',
      recipientStreetNumber: '409',
      shipmentOrderStatus: 'Pagamento Pendente',
      shipperCity: 'Blumenau',
      shipperCityDistrict: 'Glória',
      shipperComplement: null,
      shipperCountry: 'Brasil',
      shipperFederalTaxId: '12345678910112',
      shipperName: 'Global Admin',
      shipperPostalCode: '89025001',
      shipperState: 'SC',
      shipperStreet: 'Rua Belo Horizonte',
      shipperStreetNumber: '703',
      shippingAsCompany: false,
      shippingDeadline: 1,
      shippingMethodType: 'STANDARD',
      shippingProviderName: 'Loggi',
      shippingValue: '0.00',
      trackingUrl: null,
      updatedAt: '2021-07-08T11:43:13.175Z',
    },
    severity: 'info',
    span: 'pegakienvios-core-2021-11-15T11:35:41.098Z',
    thread: 'main',
    timestamp: '2021-11-15T11:35:41.098Z',
    trace: 'pegakienvios-core-2021-11-15T11:35:41.098Z',
    type: 'request',
  };
};

const mockCalledLogWithoutInfos = () => {
  return {
    severity: 'info',
    application: 'pegakienvios-core',
    aplication_secondary: undefined,
    class: 'ShipmentOrdeService',
    type: 'request',
    message: 'Foi criada uma nova ordem de envio pelo usuário 1234 com o produto 4321, onde foi escolhida a transportadora X.',
    thread: 'main',
    metadata: {
      id: 236,
      orderValue: '10.00',
      shippingDeadline: 1,
      shippingValue: '0.00',
      shippingMethodType: 'STANDARD',
      shippingProviderName: 'Loggi',
      shippingAsCompany: false,
      idUser: '1',
      shipperFederalTaxId: '12345678910112',
      shipperName: 'Global Admin',
      shipperPostalCode: '89025001',
      shipperStreet: 'Rua Belo Horizonte',
      shipperStreetNumber: '703',
      shipperComplement: null,
      shipperCity: 'Blumenau',
      shipperCityDistrict: 'Glória',
      shipperState: 'SC',
      shipperCountry: 'Brasil',
      recipientFirstName: 'Larissa',
      recipientLastName: 'Sena',
      recipientEmail: 'larissa.sena@pegaki.com.br',
      recipientPhone: '',
      recipientCellphone: '11942959933',
      recipientFederalTaxId: '45603329831',
      recipientPostalCode: '05037055',
      recipientStreet: 'Rua Torres da Barra',
      recipientStreetNumber: '409',
      recipientComplement: 'Ap 511',
      recipientReference: 'Rua sem saída',
      recipientCity: 'São Paulo',
      recipientCityDistrict: 'Água Branca',
      recipientState: 'SP',
      recipientCountry: 'Brasil',
      originWarehouseCode: 'sp-osasco',
      shipmentOrderStatus: 'Pagamento Pendente',
      currencyType: 'BRL',
      isPaid: false,
      intelipostShipmentOrderId: null,
      intelipointShipmentOrderId: null,
      externalQuoteId: '903518033567312',
      trackingUrl: null,
      parcels: [[Object]],
      createdAt: '2021-07-08T11:43:13.175Z',
      updatedAt: '2021-07-08T11:43:13.175Z',
    },
    ip: undefined,
  };
};

const mockReturnPropriertiesValues = () => {
  return {
    severity: 'info',
    application: 'pegakienvios-core',
    aplication_secondary: undefined,
    class: 'ShipmentOrdeService',
    type: 'request',
    message: 'Foi criada uma nova ordem de envio pelo usuário 1234 com o produto 4321, onde foi escolhida a transportadora X.',
    thread: 'main',
    metadata: {
      id: 236,
      orderValue: '10.00',
      shippingDeadline: 1,
      shippingValue: '0.00',
      shippingMethodType: 'STANDARD',
      shippingProviderName: 'Loggi',
      shippingAsCompany: false,
      idUser: '1',
      shipperFederalTaxId: '12345678910112',
      shipperName: 'Global Admin',
      shipperPostalCode: '89025001',
      shipperStreet: 'Rua Belo Horizonte',
      shipperStreetNumber: '703',
      shipperComplement: null,
      shipperCity: 'Blumenau',
      shipperCityDistrict: 'Glória',
      shipperState: 'SC',
      shipperCountry: 'Brasil',
      recipientFirstName: 'Larissa',
      recipientLastName: 'Sena',
      recipientEmail: 'larissa.sena@pegaki.com.br',
      recipientPhone: '',
      recipientCellphone: '11942959933',
      recipientFederalTaxId: '45603329831',
      recipientPostalCode: '05037055',
      recipientStreet: 'Rua Torres da Barra',
      recipientStreetNumber: '409',
      recipientComplement: 'Ap 511',
      recipientReference: 'Rua sem saída',
      recipientCity: 'São Paulo',
      recipientCityDistrict: 'Água Branca',
      recipientState: 'SP',
      recipientCountry: 'Brasil',
      originWarehouseCode: 'sp-osasco',
      shipmentOrderStatus: 'Pagamento Pendente',
      currencyType: 'BRL',
      isPaid: false,
      intelipostShipmentOrderId: null,
      intelipointShipmentOrderId: null,
      externalQuoteId: '903518033567312',
      trackingUrl: null,
      parcels: [[Object]],
      createdAt: '2021-07-08T11:43:13.175Z',
      updatedAt: '2021-07-08T11:43:13.175Z',
    },
    ip: undefined,
  };
};

module.exports = {
  mockProprierties,
  mockLogReturn,
  mockCalledLogWithoutInfos,
  mockReturnPropriertiesValues,
};
