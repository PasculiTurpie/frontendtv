export const canales = [
  {
    id: "1",
    nombre: "Dreamworks",
    channelTelsur: 3,
    channelGtd: 3,
    encoder: {
      ipEncoder: "http://172.19.14.157/",
      nombreEncoder: "TL-HOST_157",
    },
    multicast: [
      { cobre: "239.255.2.138" },
      { hd: "239.255.3.34" },
      { mpeg4: "239.255.3.50" },
    ],
    urlLogo:
      "https:/upload.wikimedia.org/wikipedia/commons/thumb/8/84/DreamWorks_ChannelTelsur_Logo.svg/800px-DreamWorks_ChannelTelsur_Logo.svg.png",
    region: {
      signalType: "Cobre",
    },
    origen: {
      nombreOrigen: "VLDV",
    },
    criticidad: {
      category: "4",
    },
    contacto: [
      {
        nombre: "Jorge",
        apellido: "Sepulveda",
        telefono: "5555-5555",
        email: "jorge.sepulveda@gmail.com",
      },
      {
        nombre: "Carlos",
        apellido: "Sanz",
        telefono: "5555-5555",
        email: "carlos.sanz@gmail.com",
      },
    ],
  },
];
